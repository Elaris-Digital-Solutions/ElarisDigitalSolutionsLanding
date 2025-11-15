import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectsCarousel: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      name: 'Salcedo Jewels',
      description: 'E-commerce de joyería de lujo con catálogo interactivo y pagos en línea.',
      image: '/assets/salcedo.png',
      stack: ['Next.js', 'React', 'Stripe', 'Vercel'],
      metrics: 'Lanzamiento 2024, ventas internacionales',
      category: 'E-commerce',
      url: 'https://salcedo-jewels.vercel.app/'
    },
    {
      name: 'Diego Joyero',
      description: 'Landing page profesional para joyería con diseño elegante y moderno.',
      image: '/assets/diego-joyero.png',
      stack: ['React', 'Tailwind', 'Netlify'],
      metrics: 'Más clientes, mejor catálogo, más ventas',
      category: 'Landing Page',
      url: 'https://diego-joyero.netlify.app/'
    },
    {
      name: 'Nuestro Barrio, Nuestra Historia',
      description: 'Plataforma social que conecta comunidades y preserva historias locales.',
      image: '/assets/nuestro-barrio-nuestra-historia.png',
      stack: ['React', 'Node.js', 'MongoDB'],
      metrics: 'Impacto social positivo',
      category: 'Plataforma Social',
      url: 'https://nuestro-barrio-nuestra-historia.netlify.app/'
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section ref={sectionRef} className="relative bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight drop-shadow-lg sm:text-5xl mb-4">
              <span className="text-slate-900">Nuestro </span>
              <span style={{ color: '#2F64FF' }}>Portafolio</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Casos reales donde combinamos diseño, tecnología y automatización para crear experiencias memorables.
            </p>
          </div>

          {/* Mobile Carousel */}
          <div className="relative max-w-sm mx-auto">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <div className="relative h-56">
                <img 
                  src={projects[currentProject].image} 
                  alt={projects[currentProject].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                  {projects[currentProject].category}
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {projects[currentProject].name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {projects[currentProject].description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {projects[currentProject].stack.map((tech, i) => (
                    <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-100">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <p className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                    {projects[currentProject].metrics}
                  </p>
                  
                  <button
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium shadow-sm"
                    onClick={() => projects[currentProject].url && window.open(projects[currentProject].url, '_blank')}
                    aria-label="Ver proyecto"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver proyecto
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevProject}
              className="absolute -left-2 top-1/2 transform -translate-y-1/2 bg-white/95 backdrop-blur-sm shadow-xl rounded-full p-3 hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-105 border border-gray-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={nextProject}
              className="absolute -right-2 top-1/2 transform -translate-y-1/2 bg-white/95 backdrop-blur-sm shadow-xl rounded-full p-3 hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-105 border border-gray-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`transition-all duration-300 ${
                  index === currentProject 
                    ? 'w-8 h-2 bg-blue-600 rounded-full' 
                    : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;