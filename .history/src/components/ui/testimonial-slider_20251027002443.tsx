import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'


interface Project {
  id: number
  title: string
  imageUrl: string
  logoUrl: string
  description: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-learning Inteligente',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop',
    logoUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=60&w=300',
    description: 'Plataforma de aprendizaje inteligente para capacitación empresarial.'
  },
  {
    id: 2,
    title: 'Marketplace B2B',
    imageUrl: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=2070&auto=format&fit=crop',
    logoUrl: 'https://images.unsplash.com/photo-1520975914340-2f6b3b9d3f1b?q=60&w=300',
    description: 'Plataforma B2B para optimización de cadena de suministro.'
  },
  {
    id: 3,
    title: 'SaaS Analítico',
    imageUrl: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=2070&auto=format&fit=crop',
    logoUrl: 'https://images.unsplash.com/photo-1518081461900-4c0d2b8f0b5e?q=60&w=300',
    description: 'Solución SaaS para análisis avanzado de datos empresariales.'
  },
  {
    id: 4,
    title: 'Visión & Detección',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    logoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=60&w=300',
    description: 'Sistema de visión artificial para detección automatizada.'
  },
  {
    id: 5,
    title: 'Migración Legacy',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2070&auto=format&fit=crop',
    logoUrl: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=60&w=300',
    description: 'Migración de sistemas legacy a infraestructura cloud.'
  },
  {
    id: 6,
    title: 'Landing Corporativa',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop',
    logoUrl: 'https://images.unsplash.com/photo-1508385082359-f9d7b14d3b5a?q=60&w=300',
    description: 'Landing page corporativa con integración de branding digital.'
  },
]

const getVisibleCount = (width: number): number => {
  if (width >= 1280) return 3
  if (width >= 768) return 2
  return 1
}

export default function TestimonialSlider(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<number | null>(null)
  const [direction, setDirection] = useState(1)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleResize = () => {
      const newWidth = window.innerWidth
      const oldVisibleCount = getVisibleCount(windowWidth)
      const newVisibleCount = getVisibleCount(newWidth)
      setWindowWidth(newWidth)

      if (oldVisibleCount !== newVisibleCount) {
        const maxIndexForNewWidth = projects.length - newVisibleCount
        if (currentIndex > maxIndexForNewWidth) {
          setCurrentIndex(Math.max(0, maxIndexForNewWidth))
        }
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [windowWidth, currentIndex])

  useEffect(() => {
    if (!isAutoPlaying) return

    const startAutoPlay = () => {
      if (autoPlayRef.current) window.clearInterval(autoPlayRef.current)
      autoPlayRef.current = window.setInterval(() => {
        setDirection(1)
        setCurrentIndex((prev) => {
          const visibleCount = getVisibleCount(windowWidth)
          const maxIndex = projects.length - visibleCount
          return prev >= maxIndex ? 0 : prev + 1
        })
      }, 4000)
    }

    startAutoPlay()

    return () => {
      if (autoPlayRef.current) {
        window.clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, currentIndex, windowWidth, direction])

  const visibleCount = getVisibleCount(windowWidth)
  const maxIndex = projects.length - visibleCount
  const canGoNext = currentIndex < maxIndex
  const canGoPrev = currentIndex > 0

  const goNext = () => {
    if (canGoNext) {
      setDirection(1)
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
      pauseAutoPlay()
    }
  }

  const goPrev = () => {
    if (canGoPrev) {
      setDirection(-1)
      setCurrentIndex((prev) => Math.max(prev - 1, 0))
      pauseAutoPlay()
    }
  }

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const handleDragEnd = (event: any, info: any) => {
    const { offset } = info
    const swipeThreshold = 30

    if (offset.x < -swipeThreshold && canGoNext) {
      goNext()
    } else if (offset.x > swipeThreshold && canGoPrev) {
      goPrev()
    }
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    pauseAutoPlay()
  }

  return (
    <div className="px-4 py-8 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-xs sm:text-sm uppercase tracking-wider">
            PORTAFOLIO
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 px-4" style={{ color: '#2F64FF' }}>
            Proyectos que impulsan tu negocio
          </h3>
          <p className="text-lg text-black max-w-2xl mx-auto mt-4">
            Muestra de proyectos donde aplicamos tecnología, diseño y datos para lograr resultados medibles.
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-primary/70 mx-auto mt-4 sm:mt-6"></div>
        </motion.div>

        <div className="relative" ref={containerRef}>
          <div className="flex justify-center sm:justify-end sm:absolute sm:-top-16 right-0 space-x-2 mb-4 sm:mb-0 z-20">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={goPrev}
              disabled={!canGoPrev}
              className={`p-2 rounded-full ${canGoPrev ? 'bg-card/80 shadow-md text-primary' : 'bg-muted text-gray-500 cursor-not-allowed'} transition-all duration-300`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={goNext}
              disabled={!canGoNext}
              className={`p-2 rounded-full ${canGoNext ? 'bg-card/80 shadow-md text-primary' : 'bg-muted text-gray-500 cursor-not-allowed'} transition-all duration-300`}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>

          <div className="overflow-hidden relative px-2 sm:px-0">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
              transition={{
                type: 'spring',
                stiffness: 70,
                damping: 20,
              }}
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className={`flex-shrink-0 w-full ${
                    visibleCount === 3 ? 'md:w-1/3' : visibleCount === 2 ? 'md:w-1/2' : 'w-full'
                  } p-2`}
                  initial={{ opacity: 0.6, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98, cursor: 'grabbing' }}
                  style={{ cursor: 'grab' }}
                >
                  <motion.div 
                    className="relative overflow-hidden rounded-xl sm:rounded-2xl p-0 sm:p-0 h-full bg-card/90 border border-border shadow-lg"
                    whileHover={{
                      boxShadow: '0 10px 20px -6px rgba(2,6,23,0.45)'
                    }}
                  >
                    {/* Watermark grid-pattern background (restored) */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                      <svg width="100%" height="100%" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-10">
                        <defs>
                          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="40" height="40" fill="none" />
                            <path d="M 40 0 L 0 0 0 40" stroke="#64748b" strokeWidth="0.5" />
                          </pattern>
                        </defs>
                        <rect width="400" height="120" fill="url(#grid)" />
                      </svg>
                    </div>
                    {/* Main project image - banner style with superimposed watermark */}
                    <div className="w-full h-40 sm:h-48 md:h-52 lg:h-36 relative z-10 overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Footer area: logo + project title + description */}
                    <div className="mt-0 relative z-20 p-4 bg-transparent">
                      <div className="flex items-center gap-3">
                        <img
                          src={project.logoUrl}
                          alt={`${project.title} logo`}
                          className="w-10 h-10 object-contain rounded"
                        />
                        <div>
                          <h4 className="font-bold text-sm sm:text-base text-primary-foreground">{project.title}</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground mt-1">{project.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-6 sm:mt-8">
            {Array.from({ length: Math.max(1, projects.length - visibleCount + 1) }, (_: any, index: any) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative mx-1 focus:outline-none"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <motion.div
                  className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-primary' : 'bg-muted'}`}
                  animate={{
                    scale: index === currentIndex ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: index === currentIndex ? Infinity : 0,
                    repeatDelay: 1,
                  }}
                />
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/20"
                    animate={{
                      scale: [1, 1.8],
                      opacity: [1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
