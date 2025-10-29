import React from "react";

export default function Contact() {
  return (
  <section id="contacto" className="py-20 sm:py-32 site-dark-section text-white" style={{ backgroundColor: '#030E2C' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Comencemos una Conversación</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mt-4">
            ¿Listo para transformar su práctica legal? Contáctenos hoy para una demostración personalizada.
          </p>
        </div>

        <div className="mt-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: form */}
            <div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">Nombre Completo *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Juan Pérez"
                      className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#2F64FF]/40"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">Email Corporativo *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="juan@estudio.com"
                      className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#2F64FF]/40"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">Estudio/Empresa *</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Estudio Legal Pérez & Asociados"
                      className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#2F64FF]/40"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">Mensaje *</label>
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Cuéntenos sobre sus necesidades..."
                      className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#2F64FF]/40"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-[#2F64FF] px-6 py-3 text-white font-semibold shadow-sm hover:bg-[#2553e6] transition-colors"
                    >
                      Enviar Mensaje
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right: contact info + map */}
            <div className="space-y-6">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h3 className="text-lg font-semibold text-white">Información de Contacto</h3>
                <ul className="mt-4 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#2F64FF]/20 text-[#2F64FF]">✉️</span>
                    <div>
                      <div className="text-white/90">Email</div>
                      <div className="font-semibold">solutions.elaris@gmail.com</div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#2F64FF]/20 text-[#2F64FF]">📞</span>
                    <div>
                      <div className="text-white/90">Teléfono</div>
                      <div className="font-semibold">+51 987 450 340</div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#2F64FF]/20 text-[#2F64FF]">📍</span>
                    <div>
                      <div className="text-white/90">Oficina</div>
                      <div className="font-semibold">Av. Primavera 2390<br/>Santiago de Surco 15023</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                <iframe
                  title="mapa"
                  src="https://www.google.com/maps?q=Av.+Primavera+2390+Santiago+de+Surco&output=embed"
                  className="w-full h-64 border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
