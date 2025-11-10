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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-3xl border-b border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)]' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? 'h-16' : 'h-22'
          }`}>
            {/* Logo */}
            <div 
              className="flex items-center gap-2 cursor-pointer group" 
              onClick={() => scrollToSection("hero")}
            >
              <img 
                src={isScrolled ? "/assets/ElarisLogo.png" : "/assets/ElarisLogoWhite.png"}
                alt="Elaris Logo" 
                className="transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg h-16 w-auto"
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
                  className={`relative font-semibold text-sm tracking-tight transition-all duration-400 hover:text-[#2F64FF] hover:drop-shadow-sm group ${
                    isScrolled ? 'text-slate-700 hover:text-[#2F64FF]' : 'text-white hover:text-blue-200'
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2F64FF] to-[#5F8CFF] transition-all duration-400 group-hover:w-full rounded-full"></span>
                </button>
              ))}
            </div>

            {/* CTA Button + Mobile Menu */}
            <div className="flex items-center gap-4">
              <Button
                onClick={() => scrollToSection("contacto")}
                className={`hidden sm:flex bg-gradient-to-r from-[#2F64FF] to-[#5F8CFF] hover:from-[#1E40AF] hover:to-[#3B82F6] text-white font-bold tracking-tight px-8 py-2.5 rounded-full transition-all duration-500 shadow-[0_8px_30px_rgba(47,100,255,0.3)] hover:shadow-[0_12px_40px_rgba(47,100,255,0.4)] hover:scale-105 hover:-translate-y-0.5 ${
                  isScrolled ? 'text-sm h-10' : 'text-base h-12'
                }`}
              >
                Contáctanos
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-3 rounded-xl transition-all duration-400 hover:scale-110 ${
                  isScrolled 
                    ? 'text-slate-700 hover:bg-slate-100 hover:shadow-lg' 
                    : 'text-white hover:bg-white/15 hover:backdrop-blur-sm'
                }`}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/98 backdrop-blur-3xl border-t border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
            <div className="container mx-auto px-6 py-8">
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
                    className="group text-left text-slate-700 hover:text-[#2F64FF] font-semibold py-3 px-2 transition-all duration-400 hover:bg-blue-50/70 hover:pl-4 rounded-lg"
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection("contacto")}
                  className="mt-6 w-full bg-gradient-to-r from-[#2F64FF] to-[#5F8CFF] hover:from-[#1E40AF] hover:to-[#3B82F6] text-white font-bold tracking-tight px-8 py-4 rounded-full transition-all duration-500 shadow-[0_8px_30px_rgba(47,100,255,0.3)] hover:shadow-[0_12px_40px_rgba(47,100,255,0.4)] hover:scale-105"
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
