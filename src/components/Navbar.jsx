import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight, Plus, Minus } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  // State for mobile nested dropdowns (stores the name of the open item)
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState("");

  const mainLinks = [
    { name: "Partnerships", path: "/customers" },
    { name: "Blogs", path: "/blogs" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  // DATA STRUCTURE: Added 'subItems' to Cybersecurity
  const serviceCategories = [
    {
      title: "Solutions",
      items: [
        { name: "ERP", path: "/services/erp" },
        { name: "Cloud Solutions", path: "/services/cloud-solutions" },
        { name: "Digital Collaboration", path: "/services/digital-collaboration" },
      ]
    },
    {
      title: "Services",
      items: [
        { name: "Managed IT Solutions", path: "/services/managed-it-solutions" },
        { name: "IT Infrastructure", path: "/services/it-infrastructure" },
        { 
          name: "Cybersecurity", 
          path: "/services/cybersecurity",
          // NEW: Nested Dropdown Items
          subItems: [
            { name: "VAPT", path: "/services/cybersecurity/vapt" },
            { name: "VCISO", path: "/services/cybersecurity/vciso" },
            { name: "Risk Assessment", path: "/services/cybersecurity/risk-assessment" },
          ]
        },
      ]
    },
    {
      title: "Consulting",
      items: [
        { name: "GRC", path: "/services/grc" },
        { name: "Customer Journey", path: "/services/customer-journey" },
      ]
    }
  ];

  // Helper to toggle mobile sub-menus
  const toggleMobileSubMenu = (itemName) => {
    setMobileSubMenuOpen(mobileSubMenuOpen === itemName ? "" : itemName);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              Octalpha
            </div>
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? "text-accent" : "text-foreground hover:text-accent"}`
              }
            >
              Home
            </NavLink>

            {/* Solutions & Services MEGA MENU */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1 py-4"
              >
                Solutions & Services
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[750px] bg-card border border-border rounded-lg shadow-strong z-50 p-6">
                  <div className="grid grid-cols-3 gap-8">
                    {serviceCategories.map((category) => (
                      <div key={category.title} className="space-y-3">
                        <h4 className="font-semibold text-foreground text-sm border-b border-border pb-2">
                          {category.title}
                        </h4>
                        
                        <ul className="space-y-2">
                          {category.items.map((item) => (
                            <li key={item.name} className="relative group/item">
                              {/* If item has subItems (like Cybersecurity), render differently */}
                              {item.subItems ? (
                                <>
                                  <div className="flex items-center justify-between w-full text-sm text-muted-foreground hover:text-accent cursor-pointer transition-colors">
                                    <NavLink 
                                      to={item.path} 
                                      className={({ isActive }) => isActive ? "text-accent font-medium" : ""}
                                    >
                                      {item.name}
                                    </NavLink>
                                    <ChevronRight className="h-3 w-3 opacity-50 group-hover/item:opacity-100" />
                                  </div>

                                  {/* NESTED HOVER MENU (Flyout to the right) */}
                                  <div className="absolute left-[95%] top-0 ml-2 w-48 bg-card border border-border rounded-lg shadow-lg p-2 invisible opacity-0 group-hover/item:visible group-hover/item:opacity-100 transition-all duration-200 z-50">
                                    {item.subItems.map((sub) => (
                                      <NavLink
                                        key={sub.name}
                                        to={sub.path}
                                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-accent/5 rounded-md transition-colors"
                                      >
                                        {sub.name}
                                      </NavLink>
                                    ))}
                                  </div>
                                </>
                              ) : (
                                // Standard Link
                                <NavLink
                                  to={item.path}
                                  className={({ isActive }) =>
                                    `block text-sm transition-colors ${isActive ? "text-accent font-medium" : "text-muted-foreground hover:text-accent"}`
                                  }
                                >
                                  {item.name}
                                </NavLink>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {mainLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${isActive ? "text-accent" : "text-foreground hover:text-accent"}`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>

          {/* --- MOBILE MENU BUTTON --- */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* --- MOBILE NAVIGATION --- */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4 pt-4">
              
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground hover:text-accent"
              >
                Home
              </NavLink>

              {/* Mobile Mega Menu Accordion */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1 w-full justify-between"
                >
                  Solutions & Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="mt-2 ml-4 space-y-4 border-l border-border pl-4">
                    {serviceCategories.map((category) => (
                      <div key={category.title} className="space-y-2">
                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                          {category.title}
                        </div>
                        
                        {category.items.map((item) => (
                          <div key={item.name}>
                            {item.subItems ? (
                              // Mobile Nested Accordion (Cybersecurity)
                              <div className="flex flex-col">
                                <div className="flex items-center justify-between py-1">
                                  <NavLink
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm text-muted-foreground hover:text-accent"
                                  >
                                    {item.name}
                                  </NavLink>
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      toggleMobileSubMenu(item.name);
                                    }}
                                    className="p-1"
                                  >
                                    {mobileSubMenuOpen === item.name ? (
                                      <Minus className="h-3 w-3 text-muted-foreground" />
                                    ) : (
                                      <Plus className="h-3 w-3 text-muted-foreground" />
                                    )}
                                  </button>
                                </div>
                                
                                {/* The Sub-items */}
                                {mobileSubMenuOpen === item.name && (
                                  <div className="pl-4 border-l border-border/50 ml-1 mt-1 space-y-2">
                                    {item.subItems.map((sub) => (
                                      <NavLink
                                        key={sub.name}
                                        to={sub.path}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-sm text-muted-foreground hover:text-accent py-1"
                                      >
                                        {sub.name}
                                      </NavLink>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ) : (
                              // Standard Mobile Link
                              <NavLink
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className="block text-sm text-muted-foreground hover:text-accent py-1"
                              >
                                {item.name}
                              </NavLink>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {mainLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-accent"
                >
                  {link.name}
                </NavLink>
              ))}
              
              <Button variant="hero" size="sm" className="w-full mt-4">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};