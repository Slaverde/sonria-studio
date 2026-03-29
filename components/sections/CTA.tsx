'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/FadeIn';

export function CTA() {
  return (
    <section className="relative py-32 bg-primary overflow-hidden text-center">
      {/* Decorative blurred shapes */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0], 
          y: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          x: [0, -50, 0], 
          y: [0, -30, 0],
          scale: [1, 1.5, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-accent/10 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <h2 className="font-serif text-5xl md:text-7xl text-white mb-6">
            ¿Listo para transformar <br/>
            <span className="italic text-secondary">tu sonrisa?</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Agenda una consulta de valoración sin costo y descubre el plan perfecto para ti.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button magnetic size="lg" variant="default" className="text-lg px-8">
              Agendar Consulta Gratuita
            </Button>
            <Button magnetic size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
              Llamar Ahora
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
