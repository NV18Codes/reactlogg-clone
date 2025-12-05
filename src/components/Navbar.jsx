import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, Plus, Minus } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  const [desktopSubMenu, setDesktopSubMenu] = useState(null); 
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState("");

  const mainLinks = [
    { name: "Partnerships", path: "/customers" },
    { name: "Blogs", path: "/blogs" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const serviceCategories = [
    {
      title: "Solutions",
      items: [
        /* { name: "ERP", path: "/services/erp" } */,
        { name: "Cloud Solutions", path: "/services/cloud-solutions" },
        { name: "Digital Collaboration", path: "/services/digital-collaboration" },
        { name: "Customer Journey", path: "/services/customer-journey" },
      ]
    },
    {
      title: "Services",
      items: [
        { name: "Managed IT Services", path: "/services/managed-it-solutions" },
        // RENAMED: IT Infrastructure -> IT Infrastructure Services
        { name: "IT Infrastructure Services", path: "/services/it-infrastructure" },
        { name: "Backup & Disaster Recovery Services", path: "/services/backup-and-disaster-recovery" },
        { 
          name: "Governance, Risk & Compliance", 
          path: "/services/grc", 
          subItems: [
            { name: "Frameworks & Standards", path: "/services/grc" },
            { name: "Automation", path: "/services/grc/automation" },
          ]
        },
        { 
          name: "Cybersecurity", 
          path: "/services/cybersecurity",
          subItems: [
            { name: "VAPT", path: "/services/cybersecurity/vapt" },
            { name: "VCISO", path: "/services/cybersecurity/vciso" },
            { name: "Due Diligence", path: "/services/cybersecurity/due-diligence" },
          ]
        },
      ]
    }
  ];

  const toggleMobileSubMenu = (itemName) => {
    setMobileSubMenuOpen(mobileSubMenuOpen === itemName ? "" : itemName);
  };

  const toggleDesktopSubMenu = (e, itemName) => {
    e.preventDefault();
    e.stopPropagation();
    setDesktopSubMenu(desktopSubMenu === itemName ? null : itemName);
  };

  const handleMainMenuLeave = () => {
    setIsServicesOpen(false);
    setDesktopSubMenu(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* --- LOGO SECTION --- */}
          <Link to="/" className="flex items-center gap-2 shrink-0 mr-4">
            <img 
              src="/octalpha-logo-Photoroom.png" 
              alt="Octalpha Logo" 
              className="h-10 w-auto object-contain" 
            />
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden lg:flex items-center space-x-6">
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
              onMouseLeave={handleMainMenuLeave}
            >
              <button
                className="text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1 py-4"
              >
                Solutions & Services
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[650px] bg-card border border-border rounded-lg shadow-strong z-50 p-6">
                  <div className="grid grid-cols-2 gap-8 items-start">
                    {serviceCategories.map((category) => (
                      <div key={category.title} className="space-y-3">
                        <h4 className="font-semibold text-foreground text-sm border-b border-border pb-2">
                          {category.title}
                        </h4>
                        
                        <ul className="space-y-2">
                          {category.items.map((item) => (
                            <li key={item.name} className="relative">
                              <div className="flex items-center w-full text-sm">
                                {/* The Name is a Link */}
                                <NavLink 
                                  to={item.path} 
                                  className={({ isActive }) => 
                                    `block transition-colors shrink-0 ${isActive ? "text-accent font-medium" : "text-muted-foreground hover:text-accent"}`
                                  }
                                >
                                  {item.name}
                                </NavLink>
                                
                                {/* Button fills the remaining space (flex-1) */}
                                {item.subItems && (
                                  <button
                                    onClick={(e) => toggleDesktopSubMenu(e, item.name)}
                                    className="flex-1 flex items-center justify-end p-1 ml-2 text-muted-foreground hover:text-accent focus:outline-none"
                                  >
                                    <ChevronDown 
                                      className={`h-3 w-3 transition-transform duration-200 ${
                                        desktopSubMenu === item.name ? "rotate-180 text-accent" : ""
                                      }`} 
                                    />
                                  </button>
                                )}
                              </div>

                              {/* Submenu Dropdown */}
                              {item.subItems && desktopSubMenu === item.name && (
                                <div className="pt-1 animate-in fade-in slide-in-from-top-1 duration-200">
                                  <div className="border-l border-border/50 ml-1 pl-3 space-y-1">
                                    {item.subItems.map((sub) => (
                                      <NavLink
                                        key={sub.name}
                                        to={sub.path}
                                        className="block py-1 text-xs text-muted-foreground/80 hover:text-accent transition-colors"
                                      >
                                        {sub.name}
                                      </NavLink>
                                    ))}
                                  </div>
                                </div>
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

          </div>

          {/* --- MOBILE/TABLET MENU BUTTON --- */}
          <button
            className="lg:hidden p-2 text-foreground hover:bg-accent/10 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* --- MOBILE NAVIGATION --- */}
        {isOpen && (
          <div className="lg:hidden pb-4 max-h-[80vh] overflow-y-auto">
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
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsServicesOpen(!isServicesOpen);
                  }}
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
                                      e.stopPropagation();
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
              
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};