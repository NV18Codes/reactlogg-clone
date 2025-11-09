import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Wifi, Phone, Users, Calendar, Smartphone } from "lucide-react";

const DigitalCollaboration = () => {
  const services = [
    {
      icon: Video,
      title: "Microsoft Teams Rooms",
      description: "Fully integrated Teams meeting rooms with advanced AV equipment and seamless collaboration.",
    },
    {
      icon: Video,
      title: "Zoom Rooms",
      description: "Professional Zoom conference rooms with HD video, audio, and screen sharing capabilities.",
    },
    {
      icon: Phone,
      title: "PABX Systems",
      description: "Modern IP-based phone systems for efficient internal and external communications.",
    },
    {
      icon: Wifi,
      title: "Enterprise Wi-Fi",
      description: "High-performance wireless networks with controllers, access points, and guest management.",
    },
    {
      icon: Calendar,
      title: "Smart Room Booking",
      description: "Intelligent room scheduling and resource management systems.",
    },
    {
      icon: Smartphone,
      title: "Mobile & Remote Enablement",
      description: "Solutions for mobile workforce and remote collaboration capabilities.",
    },
  ];

  const features = [
    "Enterprise-grade Wi-Fi with high availability design",
    "Access Points and Controllers for optimal coverage",
    "Managed switches for network reliability",
    "Guest user management and security",
    "Unified Communications platforms",
    "Video conferencing solutions",
    "Smart meeting room technology",
    "Remote workforce enablement tools",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Digital Collaboration Solutions
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Empower your teams with modern unified communications and collaboration tools.
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
                Complete Unified Communications
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 md:p-12 bg-gradient-primary">
              <h2 className="text-3xl font-bold text-primary-foreground mb-6 text-center">
                Transform Your Workplace Communication
              </h2>
              <p className="text-lg text-primary-foreground/90 text-center mb-8 max-w-3xl mx-auto">
                Enable seamless collaboration across your organization with our integrated communication solutions.
              </p>
              <div className="text-center">
                <Button variant="cta" size="lg">
                  Request Demo
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

export default DigitalCollaboration;
