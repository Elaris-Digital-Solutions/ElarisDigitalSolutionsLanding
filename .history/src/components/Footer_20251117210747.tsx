import { Linkedin, Twitter, Github, Mail, Instagram, Facebook, Phone, MapPin } from "lucide-react";
import SmartImage from "@/components/ui/smart-image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Servicios: ["Desarrollo Web", "Desarrollo de Software", "Soluciones de IA", "Consultoría"],
  };

  const navItems = [
    "Servicios",
    "Portafolio",
    "Proceso",
    "Clientes",
    "Contacto",
  ];

  return (
    <footer className="bg-[#030E2C] border-t border-white/10 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <SmartImage
                src="/assets/ElarisLogoWhite.png"
                alt="Elaris Logo"
                priority
                className="h-20 w-auto"
              />
            </div>
            <p className="text-white/80 text-sm mb-6 max-w-sm">
              Transformamos negocios con soluciones digitales innovadoras e Inteligencia Artificial.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/elaris-digital-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/6 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/elarisdigitalsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/6 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="https://github.com/Elaris-Digital-Solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/6 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61582879186110"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/6 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="https://x.com/ElarisSolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/6 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                aria-label="X"
              >
                <Twitter className="h-5 w-5" />
              </a>

              <a
                href="mailto:contact@elarisdigitalsolutions.com"
                className="p-2 bg-white/6 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/80 text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Navegación Column (links to page sections with smooth scroll) */}
          <div key="Navegacion">
            <h3 className="font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              {navItems.map((label) => {
                const id = label.toLowerCase();
                return (
                  <li key={label}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(id);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "start" });
                        } else {
                          // Fallback: navigate to root anchor if element not present
                          window.location.href = `/#${id}`;
                        }
                      }}
                      className="text-white/80 text-sm hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Column (replaces previous "Legal") */}
          <div key="Contacto">
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@elarisdigitalsolutions.com"
                  className="flex items-center gap-2 text-white/80 text-sm hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  contact@elarisdigitalsolutions.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+51987450340"
                  className="flex items-center gap-2 text-white/80 text-sm hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +51 987 450 340
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/elarisdigitalsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 text-sm hover:text-white transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  @elarisdigitalsolutions
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <MapPin className="h-4 w-4" />
                Surco
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm">
              © {currentYear} Elaris Digital Solutions. Todos los derechos reservados.
            </p>
            <p className="text-white/80 text-sm">
              E.L.A.R.I.S - Enterprise Logic & AI Research Integrated Systems
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
