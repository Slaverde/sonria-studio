'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { StaggeredText } from '@/components/animations/StaggeredText';
import { FadeIn } from '@/components/animations/FadeIn';
import { ChevronDown, Star } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen pt-32 pb-20 flex items-center">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 items-center">
        
        {/* Left Content (60%) */}
        <div className="md:col-span-7 z-10">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-primary mb-6">
            <StaggeredText text="Tu sonrisa merece el mejor cuidado" />
          </h1>
          
          <FadeIn delay={0.8}>
            <p className="text-lg md:text-xl text-text-muted mb-10 max-w-xl leading-relaxed">
              Odontología de precisión con tecnología de última generación y un equipo que realmente se preocupa por ti.
            </p>
          </FadeIn>

          <FadeIn delay={1} className="flex flex-wrap gap-4">
            <Button magnetic size="lg" variant="default">
              Agendar Consulta
            </Button>
            <Button magnetic size="lg" variant="outline" className="border-primary text-primary">
              Conocer más
            </Button>
          </FadeIn>
        </div>

        {/* Right Content (40%) */}
        <div className="md:col-span-5 relative">
          <motion.div
            initial={{ clipPath: 'circle(0% at 50% 50%)' }}
            animate={{ clipPath: 'circle(100% at 50% 50%)' }}
            transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="aspect-[3/4] relative rounded-[24px] overflow-hidden bg-surface flex items-center justify-center"
          >
            {/* Elegant Placeholder */}
            <img 
              src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop" 
              alt="Paciente sonriendo"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 1.2 }}
            className="absolute -bottom-6 -left-6 md:-left-12 bg-white rounded-2xl p-4 shadow-xl border border-surface flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-surface overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-secondary">
                <Star size={16} fill="currentColor" />
                <span className="font-bold text-text-main">4.9</span>
              </div>
              <p className="text-xs text-text-muted font-medium">Google Reviews</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
