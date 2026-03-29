'use client';

import { motion } from 'framer-motion';
import { processSteps } from '@/lib/constants';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

export function Process() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">La Experiencia Sonría</h2>
          <p className="text-text-muted max-w-2xl mx-auto">Un proceso diseñado para tu comodidad, transparencia y resultados predecibles.</p>
        </div>

        <StaggerContainer staggerChildren={0.2} className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-primary/10">
            <motion.div 
              className="h-full bg-secondary origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {processSteps.map((step, idx) => (
              <StaggerItem key={step.id} className="relative flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-white border border-secondary shadow-lg flex items-center justify-center text-2xl font-serif text-primary mb-6 relative group">
                  {/* Pulse effect */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2, delay: idx * 0.5 }}
                    className="absolute inset-0 rounded-full bg-secondary opacity-20"
                  />
                  0{step.id}
                </div>
                <h3 className="font-serif text-xl text-primary mb-3">{step.title}</h3>
                <p className="text-sm text-text-muted">{step.description}</p>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
