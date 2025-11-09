import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Server, HardDrive, Network, Cable, Database, Layers } from "lucide-react";

const ITInfrastructure = () => {
  const services = [
    {
      icon: Server,
      title: "Servers",
      description: "Enterprise-grade server solutions designed for reliability and performance.",
    },
    {
      icon: HardDrive,
      title: "Storage",
      description: "Scalable storage solutions with high availability and data protection.",
    },
    {
      icon: Network,
      title: "Networking",
      description: "Robust network infrastructure with switches, routers, and security appliances.",
    },
    {
      icon: Cable,
      title: "Structured Cabling",
      description: "Professional cabling infrastructure for seamless connectivity.",
    },
    {
      icon: Database,
      title: "Data Center Building",
      description: "Complete data center design and implementation including racks, UPS, cooling, and monitoring.",
    },
    {
      icon: Layers,
      title: "Virtualization",
      description: "Hypervisors, business applications, and licensing management.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              IT Infrastructure & Cloud Solutions
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Complete infrastructure solutions from design to implementation, ensuring business continuity and optimal performance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

            <Card className="mt-16 p-8 md:p-12 bg-gradient-primary">
              <h2 className="text-3xl font-bold text-primary-foreground mb-6 text-center">
                Why Choose Our IT Infrastructure Services?
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-primary-foreground/90">
                <div>
                  <h3 className="font-semibold mb-2">✓ IT Infrastructure Design & Implementation</h3>
                  <p className="text-sm">Tailored solutions that align with your business goals</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">✓ Cloud Solutions</h3>
                  <p className="text-sm">Azure, AWS, Oracle, Google - with cost optimization & scalability</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">✓ Disaster Recovery & Backup</h3>
                  <p className="text-sm">Comprehensive business continuity planning</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">✓ IT Monitoring</h3>
                  <p className="text-sm">24/7 proactive monitoring and maintenance</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <Button variant="cta" size="lg">
                  Request a Consultation
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

export default ITInfrastructure;
