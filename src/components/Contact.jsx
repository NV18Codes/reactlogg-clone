import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Business Central Tower, Tower B, Office No. 2408, Dubai Internet City, Dubai, UAE",
    },
    {
      icon: Phone,
      title: "Phone & Fax",
      content: "Tel: +971 4 242 49201 | Fax: +971 4 242 4917",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info.dxb@octalpha.com",
    },
    {
      icon: Globe,
      title: "Website",
      content: "www.octalpha.com",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can help transform your business
          </p>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mt-6"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={index * 0.05}>
                  <Card className="p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.content}</p>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>

          {/* CTA Card */}
          {/* <AnimatedSection delay={0.2}>
            <Card className="mt-12 p-8 md:p-12 bg-gradient-hero shadow-strong text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white,transparent_65%)]" />
              <div className="relative">
                <h3 className="text-3xl font-bold text-primary-foreground mb-4">
                  Ready to Transform Your IT Infrastructure?
                </h3>
                <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                  Contact us today for a consultation and discover how Octalpha can help your business grow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="cta" size="lg">
                    Schedule a Consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-card/50 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-card/70"
                  >
                    Request a Quote
                  </Button>
                </div>
              </div>
            </Card>
          </AnimatedSection> */}
        </div>
      </div>
    </section>
  );
};
