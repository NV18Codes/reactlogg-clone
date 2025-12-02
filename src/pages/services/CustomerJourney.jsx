import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Compass, PencilRuler, Puzzle, Activity, Smile, PieChart, Waypoints } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

const CustomerJourney = () => {
  const phases = [
    {
      icon: Compass, // Discovery = Finding direction
      title: "Discovery & Consultation",
      description: "We begin by understanding your business needs, challenges, and goals through detailed consultations.",
      steps: ["Initial consultation", "Requirements gathering", "Technology assessment", "Solution design"],
    },
    {
      icon: PencilRuler, // Planning = Drafting/Design tools
      title: "Planning & Design",
      description: "Our experts create a comprehensive roadmap tailored to your specific requirements.",
      steps: ["Architecture design", "Budget planning", "Timeline development", "Risk assessment"],
    },
    {
      icon: Puzzle, // Implementation = Fitting pieces together
      title: "Implementation & Integration",
      description: "Seamless deployment of solutions with minimal disruption to your operations.",
      steps: ["Project kickoff", "System deployment", "Integration testing", "User training"],
    },
    {
      icon: Activity, // Support = Monitoring Pulse/Activity
      title: "Support & Optimization",
      description: "Ongoing support and continuous improvement to ensure optimal performance.",
      steps: ["24/7 monitoring", "Proactive maintenance", "Performance optimization", "Regular updates"],
    },
  ];

  const services = [
    {
      icon: Smile, // CX = Happiness/Satisfaction
      title: "Customer Experience Solutions",
      description: "Digital transformation solutions focused on enhancing customer interactions and satisfaction.",
    },
    {
      icon: PieChart, // Analytics = Data Viz (Distinct from BarChart)
      title: "Analytics & Insights",
      description: "Data-driven insights to understand and improve customer journey touchpoints.",
    },
    {
      icon: Waypoints, // Omnichannel = Connecting multiple points/channels
      title: "Omnichannel Integration",
      description: "Seamless customer experience across all digital and physical channels.",
    },
  ];

  return (
    <MainLayout>
      <PageTransition>
        <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80"
              alt="Customer journey planning"
              className="h-full w-full object-cover opacity-25"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />
          <div className="container relative z-10 mx-auto px-4">
            <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">Customer Journey</h1>
              <p className="text-xl text-primary-foreground/80">
                Your success story from consultation to ongoing partnership.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Your Journey With Octalpha</h2>
                <div className="w-24 h-1 bg-gradient-accent mx-auto" />
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {phases.map((phase, index) => {
                  const Icon = phase.icon;
                  return (
                    <AnimatedSection key={phase.title} delay={index * 0.05} className="h-full">
                      <Card className="h-full flex flex-col p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="p-3 bg-gradient-primary rounded-lg shadow-md shrink-0">
                            <Icon className="h-8 w-8 text-primary-foreground" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-accent mb-1">Phase {index + 1}</div>
                            <h3 className="text-2xl font-bold text-foreground">{phase.title}</h3>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-6 flex-grow">{phase.description}</p>
                        <ul className="space-y-2">
                          {phase.steps.map((step) => (
                            <li key={step} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                              <span className="text-sm text-muted-foreground">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </AnimatedSection>
                  );
                })}
              </div>

              <AnimatedSection className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Customer-Centric Solutions</h2>
                <div className="w-24 h-1 bg-gradient-accent mx-auto" />
              </AnimatedSection>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <AnimatedSection key={service.title} delay={index * 0.05} className="h-full">
                      <Card className="h-full flex flex-col p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                        <div className="p-3 bg-gradient-primary rounded-lg inline-block mb-4 shadow-md w-fit">
                          <Icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed flex-grow">{service.description}</p>
                      </Card>
                    </AnimatedSection>
                  );
                })}
              </div>

              <AnimatedSection>
                <Card className="p-8 md:p-12 bg-gradient-primary text-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white,transparent_65%)]" />
                  <div className="relative">
                    <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                      Start Your Journey With Us
                    </h2>
                    <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                      Experience a partnership built on trust, expertise, and a commitment to your success.
                    </p>
                    <Button variant="cta" size="lg">
                      Begin Your Journey
                    </Button>
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default CustomerJourney;