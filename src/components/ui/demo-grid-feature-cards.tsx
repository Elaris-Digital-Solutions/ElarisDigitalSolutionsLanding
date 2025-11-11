'use client';
import * as React from 'react';
import { Zap, Cpu, Fingerprint, Pencil, Settings2, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import AnimatedContainer from '@/components/ui/animated-container';
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

// Using shared AnimatedContainer for consistent in-view behavior across sections.
