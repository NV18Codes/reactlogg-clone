import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gradient-primary py-12 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Updated grid to 4 columns for better organization */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Column 1: Brand Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/1000046891-removebg-preview.png" 
                alt="Octalpha Business Solutions" 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your trusted technology partner for end-to-end IT solutions in the UAE and GCC region.
            </p>
          </div>
          
          {/* Column 2: Company Links (Matches Navbar Main Links) */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/customers" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Key Solutions & Services (From Navbar Dropdown) */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Solutions & Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/erp" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  ERP Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-solutions" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/cybersecurity" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/services/it-infrastructure" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  IT Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/services/managed-it-solutions" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Managed IT Services
                </Link>
              </li>
              <li>
                <Link to="/services/grc" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  GRC Consulting
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="leading-relaxed">
                2408, 24th floor, Tower B,<br />
                Business Central Towers,<br />
                Dubai Internet City, UAE
              </li>
              <li>Tel: +971 4 242 4920</li>
              <li>info.dxb@octalpha.com</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Octalpha Business Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};