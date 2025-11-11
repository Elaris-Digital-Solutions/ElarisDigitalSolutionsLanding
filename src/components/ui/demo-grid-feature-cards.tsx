'use client';
import * as React from 'react';
import { Zap, Cpu, Fingerprint, Pencil, Settings2, Sparkles } from 'lucide-react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

const features = [
  {
    title: 'Velocidad',
    icon: Zap,
    description: 'Desarrollo ágil que impulsa la innovación empresarial.',
  },
  {
    title: 'Potencia',
    icon: Cpu,
    description: 'Soluciones robustas para negocios en crecimiento.',
  },
  {
    title: 'Seguridad',
    icon: Fingerprint,
    description: 'Protección integral para datos empresariales.',
  },
  {
    title: 'Personalización',
    icon: Pencil,
    description: 'Adaptado completamente a tus necesidades específicas.',
  },
  {
    title: 'Control',
    icon: Settings2,
    description: 'Gestión total sobre todos los aspectos del desarrollo.',
  },
  {
    title: 'Construido para IA',
    icon: Sparkles,
    description: 'Tecnología avanzada para el futuro empresarial.',
  },
];

export default function DemoOne() {
  return (
    <section id="power-speed-control" className="py-16 md:py-32">
      <div className="mx-auto w-full max-w-5xl space-y-8 px-4">
        <AnimatedContainer className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight drop-shadow-lg text-balance md:text-4xl lg:text-5xl xl:font-extrabold">
            <span className="text-slate-900">Innovación. Velocidad. </span><span style={{ color: '#2F64FF' }}>Excelencia.</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-sm tracking-wide text-balance md:text-base">
            Todo lo que necesitas para construir aplicaciones rápidas, seguras y escalables.
          </p>
        </AnimatedContainer>

        <AnimatedContainer delay={0.4} className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: React.ComponentProps<typeof motion.div>['className'];
  children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollRootRef = React.useRef<Element | null>(null);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    scrollRootRef.current = document.getElementById('app-scroll-container');
  }, []);

  const isInView = useInView(containerRef, {
    amount: 0.3,
    root: scrollRootRef,
  });

  const hiddenState = React.useMemo(
    () => ({ filter: 'blur(4px)', translateY: -8, opacity: 0 }),
    [],
  );

  const visibleState = React.useMemo(
    () => ({ filter: 'blur(0px)', translateY: 0, opacity: 1 }),
    [],
  );

  if (shouldReduceMotion) {
    return (
      <div ref={containerRef} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      initial={hiddenState}
      animate={isInView ? visibleState : hiddenState}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
