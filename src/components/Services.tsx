import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
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

type MobileSequenceItem = { type: "visual" } | { type: "card"; index: number };

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
    image: "https://images.unsplash.com/photo-1592659762303-90081d34b277?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1373",
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
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const sectionRef = useRef<HTMLElement | null>(null);
  const visualRef = useRef<HTMLDivElement | null>(null);
  const [visualY, setVisualY] = useState(0);
  const isMobile = useIsMobile();

  const currentIndex = Math.min(Math.max(current, 0), services.length - 1);
  const currentService = services[currentIndex];

  const mobileSequence = useMemo<MobileSequenceItem[]>(() => {
    if (!isMobile) return [];
    return services.flatMap((_, index) => {
      const entries: MobileSequenceItem[] = [];
      if (index === currentIndex) {
        entries.push({ type: "visual" });
      }
      entries.push({ type: "card", index });
      return entries;
    });
  }, [currentIndex, isMobile]);

  // Preload images to ensure smooth transitions: insert <link rel="preload"> and
  // create Image objects to warm the browser cache. Remove link tags on cleanup.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const createdLinks: HTMLLinkElement[] = [];
    const preloadedImgs: HTMLImageElement[] = [];

    services.forEach((s) => {
      if (!s.image) return;
      try {
        const href = s.image;
        // Avoid duplicating existing preload links
        if (!document.querySelector(`link[rel=\"preload\"][href=\"${href}\"]`)) {
          const link = document.createElement("link");
          link.rel = "preload";
          link.as = "image";
          link.href = href;
          // Some browsers support fetchpriority; set if available
          // @ts-ignore
          link.setAttribute("importance", "high");
          document.head.appendChild(link);
          createdLinks.push(link);
        }

        const img = new Image();
        img.decoding = "async";
        img.src = href;
        preloadedImgs.push(img);
      } catch (e) {
        // ignore preload errors
      }
    });

    return () => {
      createdLinks.forEach((l) => l.parentNode && l.parentNode.removeChild(l));
      // allow Image objects to be GC'd
      preloadedImgs.length = 0;
    };
    // services is static in this file; keep empty deps to run once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  // Calculate alignment offset inside the section for sticky panel
  const alignVisualToCard = useCallback((index: number) => {
    if (typeof window === "undefined" || isMobile) return;
    const card = itemRefs.current[index];
    const visual = visualRef.current;
    const section = sectionRef.current;
    if (!card || !visual || !section) return;

    // Get card position relative to the section
    const cardRect = card.getBoundingClientRect();
    const sectionRect = section.getBoundingClientRect();
    // Compensar el offset sticky del panel visual (top-28/top-32)
    // md:top-28 = 112px, lg:top-32 = 128px. Usar el valor actual del visualRef
    // Usar offset fijo según breakpoint para sticky
    let stickyOffset = 0;
    const width = window.innerWidth;
    if (width >= 1024) {
      stickyOffset = 310; // lg:top-32
    } else if (width >= 768) {
      stickyOffset = 112; // md:top-28
    }
    // Alinear el panel visual al tope de la tarjeta activa, compensando el sticky
    const relativeY = cardRect.top - sectionRect.top;
    const target = relativeY - stickyOffset;
    // Constrain target so que no se salga del section
    const visualHeight = visual.offsetHeight;
    const max = section.offsetHeight - visualHeight;
    const clamped = Math.max(0, Math.min(target, max));
    setVisualY(clamped);
  }, [isMobile]);

  // Recalculate on resize for responsiveness
  useEffect(() => {
    if (typeof window === "undefined" || isMobile) return;
    const onResize = () => alignVisualToCard(current);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [alignVisualToCard, current, isMobile]);

  // IntersectionObserver: observe each card and activate it when it
  // enters the centered virtual area. Configuration required by spec:
  // root: null, threshold: 0.25, rootMargin: "-30% 0px -30% 0px"
  useEffect(() => {
    if (typeof window === "undefined") return;

    const callback: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLDivElement;
          const index = itemRefs.current.findIndex((el) => el === target);
          if (index !== -1) {
            // Per instructions: call setCurrent then alignVisualToCard
            setCurrent(index);
            alignVisualToCard(index);
          }
        }
      }
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      threshold: 0.25,
      rootMargin: "-30% 0px -30% 0px",
    });

    // Observe elements once refs are attached
    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [services.length, isMobile]);

  // Initial alignment after mount
  useEffect(() => {
    alignVisualToCard(current);
  }, [alignVisualToCard, current]);

  const renderVisualModule = () => {
    if (!currentService) return null;
    return (
      <div className="relative w-full aspect-[16/10] rounded-xl bg-cyan-50/30 backdrop-blur-sm overflow-hidden shadow-md border border-cyan-200/40 will-change-transform">
        <ServiceVisual service={currentService} />
      </div>
    );
  };

  const renderServiceCard = (service: Service, index: number) => (
    <motion.div
      key={service.title}
      ref={(el) => {
        itemRefs.current[index] = el;
      }}
      viewport={{ amount: 0.35, once: false }}
      className={cn(
        "flex items-start gap-4 md:gap-6 p-6 rounded-xl transition-all duration-300 border border-transparent",
        index === current
          ? "bg-cyan-50/40 backdrop-blur-sm border-cyan-200/30"
          : "hover:bg-cyan-50/20 hover:border-cyan-200/20"
      )}
      initial={{ opacity: 0.3, y: 20 }}
      animate={{
        opacity: index === current ? 1 : 0.5,
        y: 0,
      }}
      transition={{ duration: 0.4 }}
      tabIndex={0}
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
        <h3 className="text-xl md:text-2xl font-bold truncate mb-2" style={{ color: "#2F64FF" }}>
          {service.title}
        </h3>
        <p className="text-black text-base md:text-lg line-clamp-2">{service.description}</p>

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
              <span className="text-sm md:text-base text-black truncate">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="py-20 sm:py-32 relative bg-background text-foreground"
      style={lightTheme}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-extrabold tracking-tight drop-shadow-lg sm:text-4xl lg:text-5xl mb-4">
            <span className="text-slate-900">Nuestros </span><span style={{ color: '#2F64FF' }}>Servicios</span>
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Soluciones digitales integrales diseñadas para impulsar tu transformación tecnológica
          </p>
        </div>

        <div className="relative">
          {isMobile ? (
            <div className="flex flex-col gap-8 py-8">
              {mobileSequence.map((item) => {
                if (item.type === "visual") {
                  return (
                    <motion.div
                      key="mobile-visual-panel"
                      layout
                      transition={{ type: "spring", stiffness: 220, damping: 32 }}
                    >
                      {renderVisualModule()}
                    </motion.div>
                  );
                }

                const service = services[item.index];
                return renderServiceCard(service, item.index);
              })}
            </div>
          ) : (
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 min-h-[40rem] items-start">
              <div className="order-2 md:order-1 w-full space-y-8 py-8">
                {services.map((service, index) => renderServiceCard(service, index))}
              </div>

              <div
                ref={visualRef}
                className="relative order-1 md:order-2 md:sticky md:top-28 lg:top-32 md:self-start h-fit w-full"
                style={{
                  transform: `translateY(${visualY}px)`,
                  transition: "transform 0.6s cubic-bezier(0.25,0.8,0.3,1)",
                }}
              >
                {renderVisualModule()}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ServiceVisual({ service }: { service: Service }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={service.title}
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="absolute inset-0 z-0">
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            initial={{ scale: 1.1, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: -20 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="relative z-10 p-8 text-center max-w-lg mx-auto">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <h4 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-white text-shadow-lg">
              {service.title}
            </h4>
            <p className="text-base md:text-lg text-muted-foreground/90 text-white text-shadow-md">
              {service.description}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
