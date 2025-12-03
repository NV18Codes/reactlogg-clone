import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, NotebookPen, Sparkles } from "lucide-react";

const blogPosts = [
  {
    id: "octamind-autonomous-attacks",
    category: "Cybersecurity Briefing",
    title: "The First AI Hacker: Chinese State Actors Unleash Fully Autonomous Cyber Attacks Using Octalpha's OctaMind",
    summary:
      "Dragonfly Apex weaponized OctaMind into a full-stack autonomous red team, running recon, exploitation, and lateral movement at machine speed.",
    readTime: "8 min read",
    published: "Jan 2026",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80",
    href: "/blogs/octamind-autonomous-attacks",
  },
];

const Blog = () => {
  return (
    <MainLayout>
      <PageTransition>
        <section className="relative isolate overflow-hidden bg-slate-950 text-white">
          <img
            src="https://images.unsplash.com/photo-1522199992901-9e1c0e639daa?auto=format&fit=crop&w=1600&q=80"
            alt="Editorial desk with laptop"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/40" />
          <div className="relative container mx-auto px-4 py-24 space-y-8 text-center">
            <AnimatedSection className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-200">Octalpha Blog</p>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">Curate your own stories here</h1>
              <p className="text-lg text-slate-100/90 max-w-3xl mx-auto">
                This page is intentionally lightweight—drop in your long-form articles, link to deep dives, or reuse the cards
                below as a quick index. Each card is just placeholder text waiting for your content.
              </p>
            </AnimatedSection>
            <AnimatedSection className="flex flex-wrap items-center justify-center gap-3">
              {["All", "Cybersecurity", "Cloud", "Governance", "Innovation"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.35em] text-slate-100/80"
                >
                  {tag}
                </span>
              ))}
            </AnimatedSection>
          </div>
        </section>

        <section className="bg-background">
          <div className="container mx-auto px-4 py-16 space-y-12">
            <AnimatedSection className="text-center space-y-3">
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Headline Hub</p>
              <h2 className="text-3xl font-semibold text-foreground">Browse the latest from Octalpha</h2>
              <p className="text-base text-muted-foreground max-w-3xl mx-auto">
                Each post includes a hero image, description, and a continue reading button that routes to the full article.
              </p>
            </AnimatedSection>

            <div className="grid gap-8 md:grid-cols-2">
              {blogPosts.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 0.05}>
                  <Card className="h-full overflow-hidden border border-border/70">
                    <div className="h-56 overflow-hidden">
                      <img src={post.image} alt={post.title} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <div className="space-y-4 p-6">
                      <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-muted-foreground">
                        <span>{post.category}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-2xl font-semibold text-foreground">{post.title}</h3>
                        <p className="text-muted-foreground">{post.summary}</p>
                      </div>
                      <Button asChild variant="hero" className="gap-2">
                        <Link to={post.href}>
                          Continue reading
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/30">
          <div className="container mx-auto px-4 py-16">
            <AnimatedSection className="grid gap-8 rounded-[32px] border border-border/60 bg-card/90 p-8 text-center lg:grid-cols-2">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Need structure?</p>
                <h3 className="text-3xl font-semibold text-foreground">Use this panel for featured drops</h3>
                <p className="text-muted-foreground">
                  Swap the icon, add a short description, or stitch this block to your CMS. It’s just another ready-made slot
                  for whatever CTA you need.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border/70 p-6">
                <NotebookPen className="h-10 w-10 text-accent" />
                <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Short-form ideas</p>
                <p className="text-muted-foreground">
                  Drop links, press notes, or teasers here. Delete this block if you don’t need it.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <AnimatedSection>
          <div className="container mx-auto px-4 pb-20">
            <Card className="bg-gradient-primary text-primary-foreground relative overflow-hidden rounded-[32px] p-10">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_white,_transparent_65%)]" />
              <div className="relative space-y-4 text-center">
                <p className="text-xs uppercase tracking-[0.4em]">Need inspiration?</p>
                <h3 className="text-3xl font-semibold">Add your own copy, or wire this page to your CMS feed.</h3>
                <p className="text-primary-foreground/80 max-w-3xl mx-auto">
                  This layout is flexible—replace the dummy array above with API data, Markdown, or whatever workflow fits
                  your blog stack.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild variant="cta">
                    <Link to="/contact">
                      Talk to our team
                      <Sparkles className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white/60 text-white hover:bg-white/10">
                    <Link to="/services">Explore services</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </AnimatedSection>
      </PageTransition>
    </MainLayout>
  );
};

export default Blog;


