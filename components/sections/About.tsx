'use client';

import { motion } from 'framer-motion';
import { TextReveal } from '@/components/animations/TextReveal';
import { FadeIn } from '@/components/animations/FadeIn';
import { ParallaxImage } from '@/components/animations/ParallaxImage';

export function About() {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <div className="relative">
          <FadeIn direction="right">
            <div className="aspect-[4/5] rounded-[24px] overflow-hidden relative">
              <ParallaxImage 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" 
                alt="Nuestro consultorio"
                className="w-full h-full"
              />
            </div>
          </FadeIn>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="absolute -bottom-8 -right-8 md:-right-12 bg-surface p-6 rounded-full border border-secondary shadow-xl w-32 h-32 flex items-center justify-center text-center"
          >
            <div>
              <span className="block text-2xl font-serif text-primary">2012</span>
              <span className="block text-xs uppercase tracking-widest text-text-muted mt-1">Desde</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Text */}
        <div className="pt-8">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-secondary"></span>
            <span className="text-secondary font-medium tracking-widest uppercase text-sm">Nuestra Filosofía</span>
          </div>
          
          <div className="font-serif text-3xl md:text-5xl leading-tight text-primary">
            <TextReveal text="Creemos que cada sonrisa cuenta una historia. Nuestro compromiso va más allá del tratamiento — creamos experiencias de cuidado dental donde la tecnología se encuentra con la calidez humana." />
          </div>
        </div>
      </div>
    </section>
  );
}
