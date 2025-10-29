import { Linkedin, Twitter, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Servicios: ["Desarrollo Web", "Desarrollo de Software", "Soluciones de IA", "Consultoría"],
    Empresa: ["Sobre Nosotros", "Casos de Éxito", "Blog", "Contacto"],
    Legal: ["Términos y Condiciones", "Política de Privacidad", "Aviso Legal"],
  };

  return (
    <footer className="bg-[#030E2C] border-t border-white/10 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/assets/ElarisLogo.png" 
                alt="Elaris Logo" 
                className="h-20 w-auto"
              />
            </div>
            <p className="text-white/80 text-sm mb-6 max-w-sm">
              Transformamos negocios con soluciones digitales innovadoras e Inteligencia Artificial.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-white/6 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/6 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/6 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:hola@elaris.com"
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
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm">
              © {currentYear} Elaris. Todos los derechos reservados.
            </p>
            <p className="text-white/80 text-sm">
              E.L.A.R.I.S - Empowering Solutions with AI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
