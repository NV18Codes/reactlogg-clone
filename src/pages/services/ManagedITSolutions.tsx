import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Headphones, Clock, Shield, TrendingUp, Users, CheckCircle2 } from "lucide-react";

const ManagedITSolutions = () => {
  const services = [
    {
      icon: Headphones,
      title: "Remote & Onsite Support",
      description: "24/7 technical support with quick response times from our local UAE team.",
    },
    {
      icon: Clock,
      title: "Proactive Maintenance",
      description: "Regular system maintenance and patching to prevent issues before they impact your business.",
    },
    {
      icon: Shield,
      title: "Backup & DR Management",
      description: "Comprehensive backup solutions and disaster recovery planning for business continuity.",
    },
    {
      icon: TrendingUp,
      title: "IT Asset Management",
      description: "Complete IT asset and license management to control costs and ensure compliance.",
    },
    {
      icon: Users,
      title: "Expert Engineers",
      description: "Certified resident and in-house engineers with multi-technology expertise.",
    },
    {
      icon: CheckCircle2,
      title: "Annual Maintenance Contracts",
      description: "Flexible AMC options for completed IT systems with predictable costs and SLAs.",
    },
  ];

  const benefits = [
    "Predictable IT costs with flexible SLAs",
    "Minimized downtime through proactive monitoring",
    "Improved user productivity with faster issue resolution",
    "Access to certified experts without increasing headcount",
    "Scalable services to match business growth",
    "Local UAE presence with quick response times",
    "Multi-technology expertise (servers, cloud, security, AV, ELV)",
    "Experience supporting 50+ enterprise clients",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Managed IT Solutions
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Focus on your business while we manage your IT infrastructure with expert care.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

            <Card className="p-8 md:p-12 bg-muted/50 mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Benefits to Your Business
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 md:p-12 bg-gradient-primary">
              <h2 className="text-3xl font-bold text-primary-foreground mb-6 text-center">
                Ready to Optimize Your IT Operations?
              </h2>
              <p className="text-lg text-primary-foreground/90 text-center mb-8 max-w-3xl mx-auto">
                Let our expert team handle your IT infrastructure so you can focus on growing your business.
              </p>
              <div className="text-center">
                <Button variant="cta" size="lg">
                  Request AMC Proposal
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

export default ManagedITSolutions;
