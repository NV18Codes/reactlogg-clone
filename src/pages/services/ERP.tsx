import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, TrendingUp, Users, Package, DollarSign, BarChart } from "lucide-react";

const ERP = () => {
  const modules = [
    {
      icon: DollarSign,
      title: "Financial Management",
      description: "Complete financial operations including accounting, budgeting, and reporting.",
    },
    {
      icon: Users,
      title: "Human Resources",
      description: "HR management, payroll, employee records, and performance tracking.",
    },
    {
      icon: Package,
      title: "Supply Chain Management",
      description: "Inventory, procurement, warehouse management, and logistics.",
    },
    {
      icon: TrendingUp,
      title: "Sales & CRM",
      description: "Sales automation, customer relationship management, and pipeline tracking.",
    },
    {
      icon: BarChart,
      title: "Business Intelligence",
      description: "Real-time analytics, dashboards, and data-driven decision making.",
    },
    {
      icon: Database,
      title: "Manufacturing",
      description: "Production planning, quality control, and shop floor management.",
    },
  ];

  const benefits = [
    "Integrated business processes across departments",
    "Real-time visibility into operations",
    "Improved efficiency and productivity",
    "Better decision making with accurate data",
    "Reduced operational costs",
    "Scalable solutions that grow with your business",
    "Compliance with regulatory requirements",
    "Enhanced customer satisfaction",
  ];

  const solutions = [
    "SAP Business One",
    "Microsoft Dynamics 365",
    "Oracle NetSuite",
    "Odoo ERP",
    "Custom ERP Solutions",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Enterprise Resource Planning (ERP)
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Streamline your business operations with integrated ERP solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">ERP Modules & Capabilities</h2>
              <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {modules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300">
                    <div className="p-3 bg-gradient-primary rounded-lg inline-block mb-4">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {module.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {module.description}
                    </p>
                  </Card>
                );
              })}
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="p-8 bg-muted/50">
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Benefits</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-8 bg-muted/50">
                <h3 className="text-2xl font-bold text-foreground mb-6">ERP Solutions We Implement</h3>
                <ul className="space-y-4">
                  {solutions.map((solution, index) => (
                    <li key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg">
                      <Database className="h-5 w-5 text-accent" />
                      <span className="text-foreground font-medium">{solution}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <Card className="p-8 md:p-12 bg-gradient-primary">
              <h2 className="text-3xl font-bold text-primary-foreground mb-6 text-center">
                Transform Your Business with ERP
              </h2>
              <p className="text-lg text-primary-foreground/90 text-center mb-8 max-w-3xl mx-auto">
                Our ERP experts will help you select, implement, and optimize the right solution for your business needs.
              </p>
              <div className="text-center">
                <Button variant="cta" size="lg">
                  Schedule ERP Consultation
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

export default ERP;
