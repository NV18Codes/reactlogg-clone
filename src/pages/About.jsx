import { Building2, Trophy, Globe } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Introduction } from "@/components/Introduction";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Card } from "@/components/ui/card";

const milestones = [
  {
    year: "2015",
    title: "Octalpha founded",
    description: "Launched in Dubai with a mission to simplify enterprise technology transformation.",
    // Kept Building2, but added 'text-red-500' for branding
    icon: <Building2 className="h-6 w-6 text-red-500" />,
  },
  {
    year: "2018",
    title: "Regional expansion",
    description: "Extended our footprint across the GCC, delivering complex infrastructure programs.",
    // CHANGED: Handshake -> Globe (Better represents 'Expansion')
    icon: <Globe className="h-6 w-6 text-red-500" />,
  },
  {
    year: "2022",
    title: "Global recognition",
    description: "Recognised by strategic partners and clients for excellence in cybersecurity and managed services.",
    // CHANGED: Award -> Trophy (More distinct visual)
    icon: <Trophy className="h-6 w-6 text-red-500" />,
  },
];

const About = () => {
  return (
    <MainLayout>
      <PageTransition>
        <section className="relative bg-gradient-to-br from-background via-background to-background/60">
          <div className="container mx-auto px-4 py-20 md:py-28 grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <AnimatedSection direction="up" className="space-y-6">
              <p className="text-sm tracking-[0.35em] uppercase text-muted-foreground mb-2">About Octalpha</p>
              <h1 className="text-4xl md:text-5xl font-bold">A partner committed to your digital evolution</h1>
              <p className="text-lg text-muted-foreground">
                We align technology strategy with business outcomes to build resilient, compliant, and scalable ecosystems
                for ambitious organizations across the UAE and GCC.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 pt-4">
                {[
                  { label: "Happy Clients", value: "300+" },
                  { label: "Finished Projects", value: "200+" },
                  { label: "Global Partners", value: "50+" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border bg-card/60 px-6 py-5 text-center">
                    <p className="text-3xl font-bold text-foreground">{item.value}</p>
                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" className="relative">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
                alt="Team collaborating on digital transformation"
                className="w-full rounded-3xl border border-border shadow-strong object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-3xl border border-border/70 bg-background/80 backdrop-blur-md px-6 py-4 shadow-xl">
                <p className="text-sm font-semibold text-foreground">“From data centers to digital transformation.”</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="bg-background">
          <div className="container mx-auto px-4 pb-20 grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
            <AnimatedSection direction="right" className="order-2 lg:order-1 relative">
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80"
                alt="Enterprise technology discussion"
                className="w-full rounded-3xl border border-border shadow-strong object-cover"
                loading="lazy"
              />
            </AnimatedSection>
            <AnimatedSection className="space-y-6 order-1 lg:order-2">
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Why we exist</p>
              <h2 className="text-3xl font-bold text-foreground">Enabling intelligent and secure IT for over a decade</h2>
              <p className="text-lg text-muted-foreground">
                Our lean, expert-driven team ensures agility, accountability, and personalised service—whether we are
                delivering enterprise-grade infrastructure, orchestrating cybersecurity frameworks, or managing complex
                rollouts across multi-site retail networks.
              </p>
              <p className="text-lg text-muted-foreground">
                Backed by strategic vendor alliances, Octalpha delivers high-impact, cost-effective solutions that span
                office IT setups, networking, cloud migrations, and compliance programmes.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <AnimatedSection className="container mx-auto px-4 pb-20">
          <Introduction />
        </AnimatedSection>

        <AnimatedSection direction="right" className="container mx-auto px-4 pb-20">
          <WhyChooseUs />
        </AnimatedSection>

        <section className="bg-muted/40 py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection className="mb-12 text-center max-w-2xl mx-auto">
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground mb-3">Our journey</p>
              <h2 className="text-4xl font-semibold mb-4">Milestones that shaped us</h2>
              <p className="text-lg text-muted-foreground">
                Every milestone reflects a measurable business outcome for our clients and reinforces our commitment to
                excellence.
              </p>
            </AnimatedSection>
            <div className="grid gap-8 md:grid-cols-3">
              {milestones.map((milestone, index) => (
                <AnimatedSection key={milestone.year} delay={index * 0.1} direction="up">
                  <Card className="h-full p-8 bg-card/80 border-border/70 hover:shadow-xl transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      {/* Updated background color to red tint to match icon */}
                      <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                        {milestone.icon}
                      </div>
                      <span className="text-sm uppercase tracking-wider text-muted-foreground">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default About;