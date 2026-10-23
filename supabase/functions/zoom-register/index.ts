// Lovable Cloud edge function: registers a webinar visitor directly in Zoom.
// Blocks repeat registrations by email AND by mobile number.
//
// Secrets (Lovable → Cloud → Secrets): ZOOM_ACCOUNT_ID, ZOOM_CLIENT_ID,
// ZOOM_CLIENT_SECRET, ZOOM_WEBINAR_ID. Optional: ZOOM_REGISTRATION_URL.
//
// Zoom app scopes: webinar:write:registrant:admin (register people) and
// webinar:read:list_registrants:admin (duplicate check).

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const env = (k: string, d = "") => (Deno.env.get(k) || d).trim();
const FALLBACK_URL = () =>
  env("ZOOM_REGISTRATION_URL", "https://us06web.zoom.us/webinar/register/WN_e5h1zakjTj6rLqO4IVas8Q");

const reply = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...CORS, "Content-Type": "application/json" } });

// Digits only, last 9 digits: "+971 50 123 4567" == "0501234567"
const phoneKey = (p: unknown) => {
  const d = String(p ?? "").replace(/\D/g, "");
  return d.length >= 7 ? d.slice(-9) : "";
};

async function getAccessToken(): Promise<string> {
  const basic = btoa(`${env("ZOOM_CLIENT_ID")}:${env("ZOOM_CLIENT_SECRET")}`);
  const res = await fetch(
    `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${encodeURIComponent(env("ZOOM_ACCOUNT_ID"))}`,
    { method: "POST", headers: { Authorization: `Basic ${basic}` } },
  );
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.access_token) throw new Error(`Zoom OAuth failed (${res.status}): ${JSON.stringify(data)}`);
  return data.access_token;
}

// Looks for an existing registrant by email, and by mobile number.
// Returns undefined if Zoom doesn't allow the lookup (missing read scope).
async function findExisting(token: string, webinarId: string, email: string, phone: string) {
  const wanted = phoneKey(phone);
  let byPhone: Record<string, unknown> | null = null;
  for (const status of ["approved", "pending"]) {
    let pageToken = "";
    for (let page = 0; page < 40; page++) {
      const url = `https://api.zoom.us/v2/webinars/${webinarId}/registrants?status=${status}&page_size=300` +
        (pageToken ? `&next_page_token=${encodeURIComponent(pageToken)}` : "");
      const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) {
        console.error("Zoom registrant lookup not allowed", res.status, await res.text());
        return undefined;
      }
      const data = await res.json();
      for (const r of data.registrants || []) {
        if (String(r.email || "").toLowerCase() === email) return { byEmail: r, byPhone: null };
        if (!byPhone && wanted && phoneKey(r.phone) === wanted) byPhone = r;
      }
      pageToken = data.next_page_token || "";
      if (!pageToken) break;
    }
  }
  return { byEmail: null, byPhone };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });
  if (req.method !== "POST") return reply({ ok: false, error: "Method not allowed" }, 405);

  const body = await req.json().catch(() => ({}));
  const firstName = String(body.first_name || "").trim();
  const lastName = String(body.last_name || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const phone = String(body.phone || "").trim();
  const company = String(body.company || (email.includes("@") ? email.split("@")[1] : "")).trim();

  if (!firstName || !lastName || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return reply({ ok: false, error: "Missing or invalid fields" }, 400);
  }

  const webinarId = env("ZOOM_WEBINAR_ID").replace(/\D/g, "");
  if (!webinarId || !env("ZOOM_CLIENT_SECRET")) {
    console.error("Zoom secrets are not set");
    return reply({ ok: true, zoom_api_synced: false, join_url: FALLBACK_URL(), zoom_error: "not_configured" });
  }

  try {
    const token = await getAccessToken();

    const found = (await findExisting(token, webinarId, email, phone)) || { byEmail: null, byPhone: null };
    if (!found.byEmail && found.byPhone) {
      // Same mobile number, different email: block without revealing whose it is.
      return reply({ ok: true, duplicate_phone: true, already_registered: false, zoom_api_synced: false });
    }
    if (found.byEmail) {
      const r = found.byEmail as Record<string, string>;
      return reply({
        ok: true,
        already_registered: true,
        zoom_api_synced: true,
        registrant_id: r.id || "",
        join_url: r.join_url || FALLBACK_URL(),
        first_name: r.first_name || firstName,
        last_name: r.last_name || lastName,
      });
    }

    const res = await fetch(`https://api.zoom.us/v2/webinars/${webinarId}/registrants`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        org: company,
        comments: "Registered via octalpha.com/webinar",
      }),
    });
    const data = await res.json().catch(() => ({}));
    if ((res.status === 201 || res.status === 200) && data.join_url) {
      return reply({ ok: true, already_registered: false, zoom_api_synced: true, registrant_id: data.registrant_id || "", join_url: data.join_url });
    }
    console.error("Zoom registrant error", res.status, JSON.stringify(data));
    return reply({ ok: true, zoom_api_synced: false, join_url: FALLBACK_URL(), zoom_error: data.message || `HTTP ${res.status}` });
  } catch (err) {
    console.error("Zoom registration failed", (err as Error).message);
    return reply({ ok: true, zoom_api_synced: false, join_url: FALLBACK_URL(), zoom_error: (err as Error).message });
  }
});
