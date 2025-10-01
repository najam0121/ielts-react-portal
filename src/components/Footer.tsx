import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-primary-foreground">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12 sm:h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">IE</span>
              </div>
              <span className="text-xl font-bold">IELTS Excellence</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner in achieving IELTS success. Expert guidance,
              proven methodology, and cutting-edge technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Courses", "Mock Tests", "About Us", "Blog", "FAQs"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-primary-foreground/80 hover:text-accent transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  123 Education Street, Learning City, LC 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@ieltsexcellence.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  info@ieltsexcellence.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Stay Updated</h3>
            <p className="text-primary-foreground/80 mb-4">
              Subscribe to get the latest IELTS tips and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="px-6 py-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-colors">
                Subscribe
              </button>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {[
                  { Icon: Facebook, href: "#" },
                  { Icon: Twitter, href: "#" },
                  { Icon: Instagram, href: "#" },
                  { Icon: Linkedin, href: "#" },
                ].map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors group"
                    aria-label={`Social media link ${index + 1}`}
                  >
                    <Icon className="w-5 h-5 text-primary-foreground/70 group-hover:text-accent-foreground" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
       <div className="border-t border-primary-foreground/20 pt-8">
  <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
    <p className="text-primary-foreground/70 text-sm">
      © {currentYear} IELTS Excellence Academy. All rights reserved.
    </p>
    
    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
      <div className="flex space-x-6">
        <a href="#privacy" className="text-primary-foreground/70 hover:text-accent transition-colors">
          Privacy Policy
        </a>
        <a href="#terms" className="text-primary-foreground/70 hover:text-accent transition-colors">
          Terms of Service
        </a>
      </div>

      <div className="hidden md:block w-px h-4 bg-primary-foreground/20"></div>
      
      <p className="text-primary-foreground/50 text-xs">
        Developed by{" "}
        <a 
          href="https://md-najam.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-accent hover:text-accent/80 font-medium transition-colors"
        >
          Md. Najam
        </a>
      </p>
    </div>
  </div>
</div>
      </div>
    </footer>
  );
};

export default Footer;
