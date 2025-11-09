import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Target, TrendingUp, Smartphone, BarChart } from "lucide-react";

const CustomerJourney = () => {
  const phases = [
    {
      icon: Target,
      title: "Discovery & Consultation",
      description: "We begin by understanding your business needs, challenges, and goals through detailed consultations.",
      steps: ["Initial consultation", "Requirements gathering", "Technology assessment", "Solution design"],
    },
    {
      icon: Users,
      title: "Planning & Design",
      description: "Our experts create a comprehensive roadmap tailored to your specific requirements.",
      steps: ["Architecture design", "Budget planning", "Timeline development", "Risk assessment"],
    },
    {
      icon: MessageSquare,
      title: "Implementation & Integration",
      description: "Seamless deployment of solutions with minimal disruption to your operations.",
      steps: ["Project kickoff", "System deployment", "Integration testing", "User training"],
    },
    {
      icon: TrendingUp,
      title: "Support & Optimization",
      description: "Ongoing support and continuous improvement to ensure optimal performance.",
      steps: ["24/7 monitoring", "Proactive maintenance", "Performance optimization", "Regular updates"],
    },
  ];

  const services = [
    {
      icon: Smartphone,
      title: "Customer Experience Solutions",
      description: "Digital transformation solutions focused on enhancing customer interactions and satisfaction.",
    },
    {
      icon: BarChart,
      title: "Analytics & Insights",
      description: "Data-driven insights to understand and improve customer journey touchpoints.",
    },
    {
      icon: Users,
      title: "Omnichannel Integration",
      description: "Seamless customer experience across all digital and physical channels.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Customer Journey
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Your success story from consultation to ongoing partnership.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Your Journey With Octalpha</h2>
              <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {phases.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <Card key={index} className="p-8 hover:shadow-medium transition-all duration-300">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-gradient-primary rounded-lg">
                        <Icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-accent mb-1">Phase {index + 1}</div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {phase.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      {phase.description}
                    </p>
                    <ul className="space-y-2">
                      {phase.steps.map((step, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Customer-Centric Solutions</h2>
              <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300">
                    <div className="p-3 bg-gradient-primary rounded-lg inline-block mb-4">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </Card>
                );
              })}
            </div>

            <Card className="p-8 md:p-12 bg-gradient-primary">
              <h2 className="text-3xl font-bold text-primary-foreground mb-6 text-center">
                Start Your Journey With Us
              </h2>
              <p className="text-lg text-primary-foreground/90 text-center mb-8 max-w-3xl mx-auto">
                Experience a partnership built on trust, expertise, and a commitment to your success.
              </p>
              <div className="text-center">
                <Button variant="cta" size="lg">
                  Begin Your Journey
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomerJourney;
