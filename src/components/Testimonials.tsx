import React from 'react'
import CircularTestimonials from '@/components/ui/circular-testimonials'

const testimonials = [
  {
    quote:
      "El trabajo que realizaron superó ampliamente mis expectativas. Su enfoque, su metodología y su capacidad de transformar mis ideas en experiencias digitales fueron clave. Estoy realmente agradecida con ellos.",
    name: "Daniela Bussalleu",
    designation: "Bióloga  y Comunicadora",
    src:
      "/assets/daniela-bussalleu.jpg",
  },
  {
    quote:
      "La web quedó intuitiva, el e-commerce fluye muy bien y la base de datos es fácil de entender y administrar. Excelente trabajo para Salcedo Jewels.",
    name: "Milagros Salcedo",
    designation: "CEO de Salcedo Jewels S.A.C.",
    src:
      "/assets/milagros-salcedo.jpg",
  },
  {
    quote:
      "Shining Yam is a hidden gem! The impeccable service and overall attention to detail created a memorable experience. I highly recommend it!",
    name: "Martina Edelweist",
    designation: "Satisfied Customer",
    src:
      "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
  },
];

export default function Testimonials() {
  return (
    <section id="clientes" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight drop-shadow-lg sm:text-4xl lg:text-5xl">
            <span className="text-slate-900">Confían en </span><span style={{ color: '#2F64FF' }}>Nosotros</span>
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto mt-4">
            Empresas y organizaciones que han confiado en nosotros para soluciones digitales y proyectos con IA.
          </p>
        </div>
        <div className="p-4 rounded-3xl min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative text-slate-900" style={{ backgroundColor: '#F0F4FF' }}>
          <div className="items-center justify-center relative flex" style={{ maxWidth: '1024px' }}>
            <CircularTestimonials
              testimonials={testimonials}
              autoplay={true}
              fontSizes={{ name: '28px', designation: '20px', quote: '20px' }}
              colors={{ 
                arrowBackground: '#f8fafc',
                arrowForeground: '#2F64FF',
                arrowHoverBackground: '#e2e8f0'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
