'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/constants';
import { FadeIn } from '@/components/animations/FadeIn';
import { ArrowUpRight, Sparkles, Smile, Microscope, Baby, Layers } from 'lucide-react';

const icons: Record<string, any> = {
  implants: Layers,
  aligner: Smile,
  smile: Sparkles,
  sparkles: Sparkles,
  microscope: Microscope,
  baby: Baby,
};

export function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-[1px] bg-secondary"></span>
              <span className="text-secondary font-medium tracking-widest uppercase text-sm">Nuestra Expertise</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary">Servicios de Clase Mundial</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          {services.map((service, idx) => {
            const Icon = icons[service.icon] || Smile;
            const isLarge = service.size === 'large';
            const isHorizontal = service.size === 'horizontal';

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover="hover"
                className={`group relative rounded-[16px] overflow-hidden bg-surface border border-primary/5 transition-all ${
                  isLarge ? 'md:col-span-2 md:row-span-2' : 
                  isHorizontal ? 'md:col-span-2 md:row-span-1' : 
                  'md:col-span-1 md:row-span-1'
                }`}
              >
                {/* Background Image for Large Card */}
                {isLarge && service.image && (
                  <>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
                  </>
                )}

                <div className={`relative h-full flex flex-col justify-between p-6 md:p-8 ${isLarge ? 'text-white' : 'text-primary'}`}>
                  <motion.div
                    variants={{
                      hover: { y: -4, transition: { type: 'spring', stiffness: 300 } }
                    }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${isLarge ? 'bg-white/20 backdrop-blur-sm' : 'bg-white shadow-sm'}`}
                  >
                    <Icon size={24} className={isLarge ? 'text-white' : 'text-secondary'} />
                  </motion.div>

                  <div>
                    <h3 className={`font-serif text-2xl mb-2 ${isLarge ? 'text-3xl' : ''}`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm ${isLarge ? 'text-white/80' : 'text-text-muted'} ${!isLarge && !isHorizontal ? 'line-clamp-3' : ''}`}>
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Icon */}
                  <div className={`absolute top-6 right-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${isLarge ? 'text-white' : 'text-secondary'}`}>
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
