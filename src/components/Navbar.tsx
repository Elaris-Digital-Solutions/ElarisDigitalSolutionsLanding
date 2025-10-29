import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200/20 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-14' : 'h-20'
          }`}>
            {/* Logo */}
            <div 
              className="flex items-center gap-2 cursor-pointer group" 
              onClick={() => scrollToSection("hero")}
            >
              <img 
                src={isScrolled ? "/assets/ElarisLogo.png" : "/assets/ElarisLogoWhite.png"}
                alt="Elaris Logo" 
                className="transition-all duration-300 group-hover:scale-110 h-14 w-auto"
              />
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              {[
                { label: "Servicios", id: "servicios" },
                { label: "Portafolio", id: "portafolio" },
                { label: "Proceso", id: "proceso" },
                { label: "Clientes", id: "clientes" },
                { label: "Equipo", id: "nosotros" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative font-medium transition-all duration-300 hover:text-[#2F64FF] group ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2F64FF] to-[#00BFFF] transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* CTA Button + Mobile Menu */}
            <div className="flex items-center gap-4">
              <Button
                onClick={() => scrollToSection("contacto")}
                className={`hidden sm:flex bg-gradient-to-r from-[#2F64FF] to-[#00BFFF] hover:from-[#2553e6] hover:to-[#0099cc] text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${
                  isScrolled ? 'text-sm' : 'text-base'
                }`}
              >
                Contáctanos
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/20 shadow-lg">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {[
                  { label: "Servicios", id: "servicios" },
                  { label: "Portafolio", id: "portafolio" },
                  { label: "Proceso", id: "proceso" },
                  { label: "Clientes", id: "clientes" },
                  { label: "Equipo", id: "nosotros" }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-gray-700 hover:text-[#2F64FF] font-medium py-2 transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection("contacto")}
                  className="mt-4 bg-gradient-to-r from-[#2F64FF] to-[#00BFFF] hover:from-[#2553e6] hover:to-[#0099cc] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
                >
                  Contáctanos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
