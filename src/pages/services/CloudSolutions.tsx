import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, TrendingUp, Shield, Zap, Database, RefreshCw } from "lucide-react";

const CloudSolutions = () => {
  const services = [
    {
      icon: Cloud,
      title: "Multi-Cloud Support",
      description: "Expert services for Azure, AWS, Oracle, and Google Cloud platforms.",
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description: "Right-sizing and scalability strategies to optimize cloud spending.",
    },
    {
      icon: RefreshCw,
      title: "Cloud Migration",
      description: "Seamless migration of workloads from on-premises to cloud infrastructure.",
    },
    {
      icon: Shield,
      title: "Cloud Security",
      description: "Cloud-native security, backup solutions, and compliance management.",
    },
    {
      icon: Database,
      title: "Disaster Recovery",
      description: "Cloud-based backup and disaster recovery solutions for business continuity.",
    },
    {
      icon: Zap,
      title: "Containerization",
      description: "Modern application deployment using containers and orchestration.",
    },
  ];

  const cloudProviders = [
    {
      name: "Microsoft Azure",
      features: ["Enterprise Integration", "Hybrid Cloud", "AI & ML Services", "DevOps Tools"],
    },
    {
      name: "Amazon AWS",
      features: ["Global Infrastructure", "Compute Power", "Storage Solutions", "Serverless"],
    },
    {
      name: "Google Cloud",
      features: ["Data Analytics", "Machine Learning", "Kubernetes Engine", "BigQuery"],
    },
    {
      name: "Oracle Cloud",
      features: ["Database Services", "Enterprise Apps", "Autonomous DB", "Cloud@Customer"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Cloud Solutions
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Transform your business with scalable, secure, and cost-effective cloud infrastructure.
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

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Cloud Platforms We Support</h2>
              <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {cloudProviders.map((provider, index) => (
                <Card key={index} className="p-8 hover:shadow-medium transition-all duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    {provider.name}
                  </h3>
                  <ul className="space-y-3">
                    {provider.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>

            <Card className="p-8 md:p-12 bg-gradient-primary">
              <h2 className="text-3xl font-bold text-primary-foreground mb-6 text-center">
                Ready to Move to the Cloud?
              </h2>
              <p className="text-lg text-primary-foreground/90 text-center mb-8 max-w-3xl mx-auto">
                Our cloud experts will help you choose the right platform, migrate seamlessly, and optimize costs.
              </p>
              <div className="text-center">
                <Button variant="cta" size="lg">
                  Schedule Cloud Consultation
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

export default CloudSolutions;
