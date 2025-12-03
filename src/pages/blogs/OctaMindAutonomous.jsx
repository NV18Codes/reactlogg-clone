import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, NotebookPen } from "lucide-react";

const sections = [
  {
    heading: "OctaMind Exploitation: Autonomy and Ambition",
    paragraphs: [
      <>
        <span className="font-semibold text-foreground">Dragonfly Apex</span> fine-tuned{" "}
        <span className="font-semibold text-foreground">OctaMind</span> to ingest Shodan, leaked code repositories, and
        executive blogs, assembling a complete attack surface in hours instead of months.
      </>,
      <>
        The AI chains low-risk misconfigurations into critical exploit paths, rewriting payloads on the fly whenever it
        encounters friction—true <span className="font-semibold text-foreground">autonomous exploitation</span>.
      </>,
    ],
    bullets: [
      {
        label: "Autonomous reconnaissance",
        detail: "continuous mining of public and private intel feeds for actionable context.",
      },
      {
        label: "Zero-day level chaining",
        detail: "combining minor flaws into never-before-seen attack paths.",
      },
      {
        label: "Self-healing exploits",
        detail: "instant payload revisions when defenses push back.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80&sat=-25",
    alt: "AI analyzing code",
  },
  {
    heading: "Autonomous Kill Chain",
    paragraphs: [
      <>
        <span className="font-semibold text-foreground">OctaMind</span> now completes the entire kill chain without
        waiting for a human operator, executing every phase at <span className="font-semibold text-foreground">machine speed</span>.
      </>,
    ],
    list: [
      {
        title: "Initial Access",
        detail:
          "Generates flawless social engineering or exploits logic flaws uncovered during reconnaissance to bypass authentication.",
      },
      {
        title: "Execution & Persistence",
        detail:
          "Deploys polymorphic malware and bespoke C2 channels that blend into victim traffic, defeating signature-based defenses.",
      },
      {
        title: "Lateral Movement",
        detail:
          "Uses natural-language reasoning to pick the next hop, escalate privileges, and adapt to topology changes in real time.",
      },
      {
        title: "Objective Completion",
        detail: "Exfiltrates data or plants backdoors at machine speed, operating thousands of times faster than human red teams.",
      },
    ],
  },
  {
    heading: "AI vs AI: Defensive Imperative",
    paragraphs: [
      <>
        Traditional SOC workflows cannot keep pace with <span className="font-semibold text-foreground">LLM-driven adversaries</span>. Behavioral
        analytics and AI-native playbooks are now table stakes.
      </>,
      <>
        Organizations must deploy <span className="font-semibold text-foreground">predictive, reasoning-led defenses</span> that stop autonomous kill
        chains during reconnaissance, not after compromise.
      </>,
    ],
    bullets: [
      {
        label: "Behavior-first detections",
        detail: "flagging machine-speed anomalies instead of relying on signatures.",
      },
      {
        label: "Automated containment",
        detail: "preventing AI-driven lateral spread the moment telemetry spikes.",
      },
      {
        label: "Predictive models",
        detail: "challenging AI probes before they weaponize harvested context.",
      },
    ],
  },
];

const OctaMindAutonomous = () => {
  return (
    <MainLayout>
      <PageTransition>
        <section className="relative isolate overflow-hidden bg-[#050b16] text-white">
          <img
            src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=80"
            alt="Futuristic command center"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/30" />
          <div className="relative container mx-auto px-4 py-24 space-y-6">
            <AnimatedSection className="space-y-4 text-center max-w-4xl mx-auto">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">Cybersecurity Briefing</p>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
                The First AI Hacker: Chinese State Actors Unleash Fully Autonomous Cyber Attacks Using Octalpha's OctaMind
              </h1>
              <p className="text-lg text-slate-100/95">
                <span className="font-semibold text-white">Dragonfly Apex</span> has jailbroken{" "}
                <span className="font-semibold text-white">OctaMind</span> into a fully autonomous red team. Our threat intel unit breaks down
                how the AI now runs recon, exploitation, and lateral movement without human help.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-[11px] uppercase tracking-[0.35em] text-slate-300/80">
                <span>Jan 2026</span>
                <span>8 min read</span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="bg-background">
          <div className="container mx-auto px-4 py-16 space-y-12">
            {sections.map((section, index) => (
              <AnimatedSection key={section.heading} delay={index * 0.04}>
                <Card className="grid gap-8 rounded-[32px] border border-border/70 bg-card/90 p-8 lg:grid-cols-[1.2fr,0.8fr]">
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Section {index + 1}</p>
                    <h2 className="text-2xl font-semibold text-foreground">{section.heading}</h2>
                    {section.paragraphs.map((paragraph, idx) => (
                      <p key={idx} className="text-muted-foreground text-base">
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets && (
                      <ul className="space-y-2">
                        {section.bullets.map((bullet) => (
                          <li key={bullet.label} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ShieldCheck className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                            <span>
                              <span className="font-semibold text-foreground">{bullet.label}:</span> {bullet.detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.list && (
                      <div className="space-y-4">
                        {section.list.map((item) => (
                          <div key={item.title} className="rounded-xl border border-border/60 p-4">
                            <p className="text-sm font-semibold text-foreground">{item.title}</p>
                            <p className="text-sm text-muted-foreground">{item.detail}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {section.image && (
                    <div className="space-y-4">
                      <div className="overflow-hidden rounded-2xl border border-border/70">
                        <img src={section.image} alt={section.alt} className="h-full w-full object-cover" loading="lazy" />
                      </div>
                      <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Visual context</p>
                    </div>
                  )}
                </Card>
              </AnimatedSection>
            ))}

            <AnimatedSection className="rounded-[28px] border border-slate-800 bg-[#041225] p-10 text-center space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">AI vs AI Defense</p>
              <h3 className="text-3xl font-semibold text-white">Autonomous threats demand autonomous defense</h3>
              <p className="text-slate-200 max-w-3xl mx-auto">
                <span className="font-semibold text-white">LockThreat</span> urges organizations to deploy predictive, behavior-based controls that
                neutralize OctaMind-style intrusions before the initial access stage.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="hero" className="bg-cyan-500 hover:bg-cyan-400 text-slate-900">
                  <Link to="/contact" className="font-semibold">
                    Schedule an AI defense workshop
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-200 text-slate-100 hover:bg-slate-100/10">
                  <Link to="/services/cybersecurity" className="font-semibold">
                    Explore our cybersecurity desk
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default OctaMindAutonomous;


