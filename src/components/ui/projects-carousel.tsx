import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import SmartImage from '@/components/ui/smart-image';

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
      name: 'Nuestro Barrio, Nuestra Historia',
      description: 'Plataforma social que conecta comunidades y preserva historias locales.',
      image: '/assets/nuestro-barrio-nuestra-historia.webp',
      stack: ['React', 'Node.js', 'MongoDB'],
      metrics: 'Impacto social positivo',
      category: 'Plataforma Social',
      url: 'https://nuestro-barrio-nuestra-historia.netlify.app/'
    },
    {
      name: 'Kar & Ma',
      description: 'Landing corporativa para Kar & Ma, una empresa distribuidora de sal.',
      image: '/assets/kar-ma.png',
      stack: ['React', 'Tailwind', 'Vite'],
      metrics: 'Presencia Digital, mejor portafolio, más ventas',
      category: 'Landing Page',
      url: 'https://kar-ma.netlify.app/'
    },
    {
      name: 'Papelera Latinoamericana S.A.C.',
      description: 'Landing institucional para Papelera Latinoamericana S.A.C. con catálogo y contacto digital.',
      image: '/assets/pepelera-latinoamericana.png',
      stack: ['React', 'Tailwind', 'Netlify'],
      metrics: 'Catálogo digital, contacto rápido',
      category: 'Landing Page',
      url: 'https://papelera-latinoamericana.netlify.app'
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
      name: 'Salcedo Jewels',
      description: 'E-commerce de joyería de lujo con catálogo interactivo y pagos en línea.',
      image: '/assets/salcedo.png',
      stack: ['Next.js', 'React', 'Stripe', 'Vercel'],
      metrics: 'Lanzamiento 2024, ventas internacionales',
      category: 'E-commerce',
      url: 'https://salcedo-jewels.vercel.app/'
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
          <div className="relative">
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <SmartImage 
                  src={projects[currentProject].image} 
                  alt={projects[currentProject].name}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {projects[currentProject].category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3">
                  {projects[currentProject].name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {projects[currentProject].description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {projects[currentProject].stack.map((tech, i) => (
                      <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-green-600">{projects[currentProject].metrics}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      className="p-2 bg-gray-200 hover:bg-blue-600 hover:text-white rounded-lg transition-colors"
                      onClick={() => projects[currentProject].url && window.open(projects[currentProject].url, '_blank')}
                      aria-label="Ver proyecto"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-blue-600 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-blue-600 hover:text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentProject ? 'bg-blue-600' : 'bg-gray-300'
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