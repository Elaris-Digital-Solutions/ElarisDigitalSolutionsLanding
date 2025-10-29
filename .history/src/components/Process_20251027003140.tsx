import React from 'react'
import { Timeline } from '@/components/ui/timeline'
import { Bot, Code2, FileCode2, LineChart, Network, Stars } from 'lucide-react'

export default function Process() {
  const processData = [
    {
      title: "01. Análisis",
      content: (
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-blue-500/10">
              <Network className="w-6 h-6 text-[#2F64FF]" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2" style={{ color: '#2F64FF' }}>
                Evaluación de Necesidades
              </h4>
              <p className="text-black text-sm md:text-base">
                Analizamos a fondo tus necesidades y objetivos empresariales para identificar las mejores oportunidades de implementación de IA.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "02. Diseño",
      content: (
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-blue-500/10">
              <FileCode2 className="w-6 h-6 text-[#2F64FF]" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2" style={{ color: '#2F64FF' }}>
                Arquitectura de Solución
              </h4>
              <p className="text-black text-sm md:text-base">
                Diseñamos una arquitectura personalizada que integra los modelos de IA más adecuados para tu caso de uso específico.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "03. Desarrollo",
      content: (
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-blue-500/10">
              <Code2 className="w-6 h-6 text-[#2F64FF]" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2" style={{ color: '#2F64FF' }}>
                Implementación & Entrenamiento
              </h4>
              <p className="text-black text-sm md:text-base">
                Desarrollamos e implementamos la solución, entrenando los modelos con tus datos específicos para maximizar la precisión y relevancia.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "04. Pruebas",
      content: (
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-blue-500/10">
              <LineChart className="w-6 h-6 text-[#2F64FF]" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2" style={{ color: '#2F64FF' }}>
                Validación & Optimización
              </h4>
              <p className="text-black text-sm md:text-base">
                Realizamos pruebas exhaustivas y ajustes finos para asegurar el rendimiento óptimo de la solución en tu entorno real.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "05. Despliegue",
      content: (
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-blue-500/10">
              <Bot className="w-6 h-6 text-[#2F64FF]" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2" style={{ color: '#2F64FF' }}>
                Implementación & Monitoreo
              </h4>
              <p className="text-black text-sm md:text-base">
                Desplegamos la solución en producción y establecemos sistemas de monitoreo continuo para garantizar su rendimiento.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "06. Soporte",
      content: (
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-blue-500/10">
              <Stars className="w-6 h-6 text-[#2F64FF]" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2" style={{ color: '#2F64FF' }}>
                Mejora Continua
              </h4>
              <p className="text-black text-sm md:text-base">
                Proporcionamos soporte continuo y actualizaciones periódicas para mantener tu solución de IA al día con las últimas tecnologías.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="proceso" className="py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: '#2F64FF' }}>Nuestro Proceso</h2>
          <p className="text-lg text-black max-w-2xl mx-auto mt-4">
            Un flujo probado desde la idea hasta la producción, combinando metodología ágil y modelos de IA.
          </p>
        </div>
        <Timeline data={processData} />
      </div>
    </section>
  );
}
