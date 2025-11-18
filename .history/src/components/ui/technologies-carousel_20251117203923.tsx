import React from 'react';
import { Marquee } from "@/components/ui/marquee";
import SmartImage from "@/components/ui/smart-image";

// Logos de tecnologías desde archivos SVG locales
const TechLogos = {
  react: () => (
    <div className="flex items-center gap-3">
      <SmartImage src="/assets/React.svg" alt="React" className="h-10 w-10" />
      <span className="font-semibold text-gray-800">React</span>
    </div>
  ),
  nextjs: () => (
    <div className="flex items-center gap-3">
      <SmartImage src="/assets/Next.svg" alt="Next.js" className="h-10 w-10" />
      <span className="font-semibold text-gray-800">Next.js</span>
    </div>
  ),
  typescript: () => (
    <div className="flex items-center gap-3">
      <SmartImage src="/assets/TypeScript.svg" alt="TypeScript" className="h-10 w-10" />
      <span className="font-semibold text-gray-800">TypeScript</span>
    </div>
  ),
  python: () => (
    <div className="flex items-center gap-3">
      <SmartImage src="/assets/Python.svg" alt="Python" className="h-10 w-10" />
      <span className="font-semibold text-gray-800">Python</span>
    </div>
  ),
  nodejs: () => (
    <div className="flex items-center gap-3">
      <SmartImage src="/assets/NodeJS.svg" alt="Node.js" className="h-10 w-10" />
      <span className="font-semibold text-gray-800">Node.js</span>
    </div>
  ),
  tailwind: () => (
    <div className="flex items-center gap-3">
      <SmartImage src="/assets/TailwindCSS.svg" alt="Tailwind CSS" className="h-10 w-10" />
      <span className="font-semibold text-gray-800">Tailwind CSS</span>
    </div>
  ),
  aws: () => (
    <div className="flex items-center gap-3">
      <SmartImage src="/assets/AWS.svg" alt="AWS" className="h-10 w-10" />
      <span className="font-semibold text-gray-800">AWS</span>
    </div>
  ),
  docker: () => (
    <div className="flex items-center gap-3">
      <img src="/assets/Docker.png" alt="Docker" className="h-10 w-10" />
      <span className="font-semibold text-gray-800">Docker</span>
    </div>
  ),
  mongodb: () => (
    <div className="flex items-center gap-3">
      <SmartImage src="/assets/MongoDB.svg" alt="MongoDB" className="h-10 w-10" />
      <span className="font-semibold text-gray-800">MongoDB</span>
    </div>
  ),
};

export default function TechnologiesCarousel() {
  const technologies = [
    TechLogos.react,
    TechLogos.nextjs,
    TechLogos.typescript,
    TechLogos.python,
    TechLogos.nodejs,
    TechLogos.tailwind,
    TechLogos.aws,
    TechLogos.docker,
    TechLogos.mongodb,
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
  <div className="text-center mb-4 lg:mb-6">
          <h2 className="text-3xl font-extrabold tracking-tight drop-shadow-lg sm:text-4xl lg:text-5xl mb-4">
            <span className="text-slate-900">Tecnologías que </span><span style={{ color: '#2F64FF' }}>Dominamos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Utilizamos las tecnologías más avanzadas y confiables del mercado para construir soluciones robustas, escalables y futuro-compatibles.
          </p>
        </div>
      </div>

      {/* Marquee Container - Full width */}
      <div className="w-full overflow-hidden">
        <Marquee pauseOnHover className="[--duration:60s]">
          {technologies.map((TechComponent, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-10 lg:mx-16"
            >
              <div className="transition-all duration-300 hover:scale-110 hover:-translate-y-2">
                <TechComponent />
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bottom text */}
        <div className="text-center mt-6 lg:mt-8">
          <p className="text-sm text-gray-500 font-medium">
            Y muchas tecnologías más que se adaptan a las necesidades específicas de cada proyecto
          </p>
        </div>
      </div>
    </section>
  );
}