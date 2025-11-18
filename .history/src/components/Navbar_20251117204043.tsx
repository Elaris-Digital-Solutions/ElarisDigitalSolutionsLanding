import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NeuralNoise } from "@/components/ui/neural-noise-cursor";
import SmartImage from "@/components/ui/smart-image";

type NavItem = {
  id: string;
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { id: "servicios", label: "Servicios", href: "/servicios" },
  { id: "portafolio", label: "Portafolio", href: "/portafolio" },
  { id: "proceso", label: "Procesos", href: "/proceso" },
  { id: "clientes", label: "Clientes", href: "/clientes" },
  { id: "contacto", label: "Contacto", href: "/contacto" },
];

const MobileAnimatedBackdrop = () => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div className="absolute inset-[-25%] blur-[60px] opacity-[0.85]">
      <NeuralNoise opacity={0.85} pointerStrength={0.8} timeScale={0.6} />
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-[#010616]/70 via-[#071237]/65 to-[#0b1d3f]/60" />
    <div className="absolute inset-0 bg-[#010a1d]/65 backdrop-blur-[26px]" />
  </div>
);

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    return window.innerWidth >= 768;
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const brandAssets = {
    default: "/assets/ElarisLogoWhite.webp",
  } as const;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      if (!desktop) {
        setIsCollapsed(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (!isDesktop) {
        setIsCollapsed(false);
        return;
      }

      const collapseThreshold = window.innerHeight * 0.25;
      setIsCollapsed(window.scrollY > collapseThreshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  const scrollHome = () => {
    if (typeof window === "undefined") return;

    if (window.location.pathname !== "/") {
      navigate("/", { replace: false });
    }

    setIsMobileMenuOpen(false);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    requestAnimationFrame(() => {
      scrollToTop();
      setTimeout(scrollToTop, 160);
    });
  };

  const navigateTo = (item: NavItem) => {
    if (typeof window === "undefined") return;

    if (window.location.pathname !== item.href) {
      navigate(item.href, { replace: false });
    }

    setIsMobileMenuOpen(false);

    const scrollToTarget = () => {
      const target = document.getElementById(item.id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return true;
      }
      return false;
    };

    requestAnimationFrame(() => {
      if (!scrollToTarget()) {
        setTimeout(scrollToTarget, 180);
      }
    });
  };

  if (!isDesktop) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="relative overflow-hidden shadow-[0_16px_45px_rgba(30,64,175,0.45)]">
          <MobileAnimatedBackdrop />
          <nav className="relative border-b border-white/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <button
                  className="flex items-center gap-3"
                  onClick={scrollHome}
                >
                  <SmartImage
                    src={brandAssets.default}
                    alt="Elaris Logo"
                    priority
                    className="h-10 w-auto drop-shadow-lg"
                  />
                </button>

                <button
                  onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                  className="rounded-full border border-blue-400/40 bg-blue-500/15 p-3 text-blue-100 shadow-[0_12px_35px_rgba(29,78,216,0.4)] transition-transform duration-300 hover:scale-110"
                >
                  {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </nav>

          <div
            className={`relative overflow-hidden border-t border-white/10 transition-all duration-500 ${
              isMobileMenuOpen ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => navigateTo(item)}
                    className="rounded-xl border border-blue-400/25 bg-blue-500/10 px-4 py-3 text-left text-blue-100 shadow-[0_12px_35px_rgba(29,78,216,0.35)] transition-all duration-300 hover:bg-blue-500/20"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  const navVariants = {
    expanded: {
      width: "min(92vw, 1100px)",
      height: 96,
      borderRadius: 32,
      padding: "18px 32px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    compact: {
      width: "min(82vw, 640px)",
      height: 72,
      borderRadius: 999,
      padding: "14px 28px",
      marginLeft: "auto",
      marginRight: "auto",
    },
  } as const;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="pointer-events-none flex justify-center px-4 pt-6 lg:px-8">
        <motion.nav
          variants={navVariants}
          initial={false}
          animate={isCollapsed ? "compact" : "expanded"}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative flex items-center justify-center overflow-hidden"
          style={
            isCollapsed
              ? {
                  pointerEvents: "auto",
                  background:
                    "linear-gradient(135deg, rgba(37,99,235,0.55), rgba(30,64,175,0.6), rgba(15,23,42,0.55))",
                  border: "1px solid rgba(96, 165, 250, 0.45)",
                  boxShadow: "0 30px 90px rgba(30, 64, 175, 0.45)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                }
              : {
                  pointerEvents: "auto",
                  background: "transparent",
                  border: "none",
                  boxShadow: "none",
                  backdropFilter: "none",
                  WebkitBackdropFilter: "none",
                }
          }
        >
          <AnimatePresence mode="wait">
            {isCollapsed ? (
              <motion.div
                key="compact"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex h-full w-full items-center justify-center gap-8 px-4"
              >
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => navigateTo(item)}
                    whileHover={{ scale: 1.04, opacity: 1 }}
                    whileTap={{ scale: 0.96 }}
                    className="bg-transparent px-0 text-base font-semibold tracking-[0.08em] text-blue-100 transition-colors duration-300 hover:text-white focus:outline-none"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex w-full items-center justify-between gap-10"
              >
                <motion.button
                  onClick={scrollHome}
                  className="flex items-center text-left"
                  whileHover={{ scale: 1.08 }}
                >
                  <SmartImage
                    src={brandAssets.default}
                    alt="Elaris Logo"
                    priority
                    className="h-16 w-auto drop-shadow-[0_6px_28px_rgba(96,165,250,0.65)] transition-all duration-300"
                  />
                </motion.button>

                <div className="flex items-center gap-6">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => navigateTo(item)}
                      className="group relative flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-5 py-2 text-sm font-medium tracking-tight text-blue-50 backdrop-blur-xl transition-all duration-500 hover:border-blue-200/60 hover:text-white hover:shadow-[0_20px_45px_rgba(29,78,216,0.4)]"
                    >
                      {item.label}
                      <span className="absolute inset-x-2 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 transition-transform duration-500 group-hover:scale-x-100" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </header>
  );
};

export default Navbar;
