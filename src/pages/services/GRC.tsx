import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileCheck, AlertTriangle, CheckCircle2, Shield } from "lucide-react";

const GRC = () => {
  const pillars = [
    {
      icon: FileCheck,
      title: "Governance",
      description: "Establishing corporate policies, IT governance models, and decision-making frameworks aligned with ISO/IEC best practices.",
      benefits: ["IT strategies aligned with business goals", "Clear accountability frameworks", "Structured decision-making processes"],
    },
    {
      icon: AlertTriangle,
      title: "Risk Management",
      description: "Identification, assessment, and mitigation of IT & cybersecurity risks.",
      benefits: ["Business continuity planning", "Disaster recovery strategies", "Vendor risk management", "Proactive threat mitigation"],
    },
    {
      icon: CheckCircle2,
      title: "Compliance",
      description: "Advisory & audit services to ensure adherence to mandatory local & international standards.",
      benefits: ["Regulatory compliance assurance", "Audit preparation support", "Certification assistance", "Continuous compliance monitoring"],
    },
  ];

  const frameworks = [
    "ISO 27001 (Information Security Management)",
    "ISO 27701 (Privacy Information Management)",
    "GDPR (General Data Protection Regulation)",
    "UAE PDPL (Personal Data Protection Law)",
    "NIST Cybersecurity Framework",
    "ISO 22301 (Business Continuity)",
    "PCI-DSS (Payment Card Industry)",
    "HIPAA (Healthcare)",
    "ISO 45001 & ISO 9001",
    "NESA UAE IAS (Information Assurance Standards)",
    "CBUAE Regulations",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Governance, Risk & Compliance (GRC)
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Comprehensive GRC services to ensure your organization meets regulatory requirements and manages risks effectively.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">The Three Pillars of GRC</h2>
              <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <Card key={index} className="p-8 hover:shadow-medium transition-all duration-300">
                    <div className="p-3 bg-gradient-primary rounded-lg inline-block mb-4">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {pillar.description}
                    </p>
                    <div className="space-y-2">
                      {pillar.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>

            <Card className="p-8 md:p-12 bg-muted/50 mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                GRC Frameworks & Standards We Support
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {frameworks.map((framework, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg">
                    <Shield className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{framework}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 md:p-12 bg-gradient-primary">
              <h2 className="text-3xl font-bold text-primary-foreground mb-6 text-center">
                Ready to Strengthen Your Compliance Posture?
              </h2>
              <p className="text-lg text-primary-foreground/90 text-center mb-8 max-w-3xl mx-auto">
                Our GRC experts can help you automate compliance, reduce risk, and prepare for audits.
              </p>
              <div className="text-center">
                <Button variant="cta" size="lg">
                  Request GRC Assessment
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

export default GRC;
