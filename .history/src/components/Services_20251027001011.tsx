import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Globe, Code, Brain, ChevronRight } from "lucide-react";

interface Service {
  icon: any;
  title: string;
  description: string;
  features: string[];
  accent?: string;
  highlight?: boolean;
  image?: string;
}

const services: Service[] = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description:
      "Aplicaciones web modernas, responsivas y optimizadas para SEO que convierten visitantes en clientes.",
    features: ["Diseño UI/UX profesional", "Progressive Web Apps", "E-commerce avanzado", "CMS personalizado"],
    accent: "primary",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Code,
    title: "Desarrollo de Software",
    description: "Software a medida que automatiza procesos y optimiza operaciones empresariales.",
    features: ["Arquitectura escalable", "APIs robustas", "Integraciones empresariales", "DevOps & CI/CD"],
    accent: "secondary",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Brain,
    title: "Soluciones de IA",
    description: "Implementación estratégica de Inteligencia Artificial para impulsar la innovación en tu negocio.",
    features: ["Machine Learning", "Procesamiento de lenguaje natural", "Computer Vision", "Automatización inteligente"],
    accent: "accent",
    highlight: true,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  },
];

export default function Services() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  // Local light theme override to ensure a white background like the Hero
  const lightTheme: React.CSSProperties = {
    ["--background" as any]: "0 0% 100%",
    ["--foreground" as any]: "222 47% 11%",
    ["--card" as any]: "0 0% 100%",
    ["--card-foreground" as any]: "222 47% 11%",
    ["--popover" as any]: "0 0% 100%",
    ["--popover-foreground" as any]: "222 47% 11%",
    ["--muted" as any]: "0 0% 96%",
    ["--muted-foreground" as any]: "215 16% 47%",
    ["--border" as any]: "0 0% 90%",
    ["--input" as any]: "0 0% 90%",
    // Keep brand accent for focus rings/interactions
    ["--ring" as any]: "217 91% 60%",
  };

  useEffect(() => {
    const autoPlayInterval = 4000;
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((p) => p + 100 / (autoPlayInterval / 100));
      } else {
        setCurrent((c) => (c + 1) % services.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress]);

  return (
    <section id="servicios" className="py-20 sm:py-32 relative bg-background text-foreground" style={lightTheme}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ color: '#2F64FF' }}>
            Nuestros <span className="">Servicios</span>
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Soluciones digitales integrales diseñadas para impulsar tu transformación tecnológica
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 min-h-[40rem]">
          {/* Panel de Servicios (Izquierda) */}
          <div className="order-2 md:order-1 w-full space-y-8 py-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={cn(
                  "flex items-start gap-4 md:gap-6 p-6 rounded-xl transition-all duration-300 border border-transparent",
                  index === current 
                    ? "bg-cyan-50/40 backdrop-blur-sm border-cyan-200/30" 
                    : "hover:bg-cyan-50/20 hover:border-cyan-200/20"
                )}
                initial={{ opacity: 0.3, y: 20 }}
                animate={{ 
                  opacity: index === current ? 1 : 0.5,
                  y: 0 
                }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setCurrent(index)}
              >
                <div
                  className={cn(
                    "w-14 h-14 rounded-lg flex items-center justify-center p-3 shrink-0 transition-all duration-300",
                    index === current 
                      ? "bg-background text-foreground scale-110 ring-1 ring-border shadow-sm" 
                      : "bg-muted"
                  )}
                >
                  <service.icon className="w-full h-full text-[#2F64FF]" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold truncate mb-2" style={{ color: '#2F64FF' }}>
                    {service.title}
                  </h3>
                  <p className="text-black text-base md:text-lg line-clamp-2">
                    {service.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {service.features.map((f, i) => (
                      <li 
                        key={i} 
                        className={cn(
                          "flex items-center gap-3 transition-opacity duration-300",
                          index === current ? "opacity-100" : "opacity-70"
                        )}
                      >
                        <ChevronRight className="w-4 h-4 text-black shrink-0" />
                        <span className="text-sm md:text-base text-black truncate">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Panel Visual Sticky (Derecha) */}
          <div className="order-1 md:order-2 md:sticky md:top-32 h-fit w-full">
            <div className="relative w-full aspect-[16/10] rounded-xl bg-card/30 backdrop-blur-sm overflow-hidden shadow-md border border-border/60">
              <AnimatePresence mode="wait">
                {services.map((service, index) =>
                  index === current && (
                    <motion.div
                      key={service.title}
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.95, opacity: 0 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 100,
                        damping: 20
                      }}
                    >
                      <div className="absolute inset-0 z-0">
                        <motion.img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover"
                          initial={{ scale: 1 }}
                          animate={{ scale: 1.1 }}
                          transition={{
                            duration: 10,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear"
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                      </div>
                      
                      <div className="relative z-10 p-8 text-center max-w-lg mx-auto">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h4 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            {service.title}
                          </h4>
                          <p className="text-base md:text-lg text-muted-foreground/90">
                            {service.description}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
