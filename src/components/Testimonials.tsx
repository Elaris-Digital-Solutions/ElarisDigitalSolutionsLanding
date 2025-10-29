import React from 'react'
import CircularTestimonials from '@/components/ui/circular-testimonials'

const testimonials = [
  {
    quote:
      "I was impressed by the food! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive. I'll definitely be back for more!",
    name: "Tamar Mendelson",
    designation: "Restaurant Critic",
    src:
      "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This place exceeded all expectations! The atmosphere is inviting, and the staff truly goes above and beyond. I'll keep returning for more exceptional dining experience.",
    name: "Joe Charlescraft",
    designation: "Frequent Visitor",
    src:
      "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: '#2F64FF' }}>Clientes</h2>
          <p className="text-lg text-black max-w-2xl mx-auto mt-4">
            Empresas y organizaciones que han confiado en nosotros para soluciones digitales y proyectos con IA.
          </p>
        </div>
        <div className="p-16 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative bg-white text-black">
          <div className="items-center justify-center relative flex" style={{ maxWidth: '1024px' }}>
            <CircularTestimonials
              testimonials={testimonials}
              autoplay={true}
              fontSizes={{ name: '28px', designation: '20px', quote: '20px' }}
              colors={{ 
                arrowBackground: '#ffffff',
                arrowForeground: '#2F64FF',
                arrowHoverBackground: '#f1f5f9'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
