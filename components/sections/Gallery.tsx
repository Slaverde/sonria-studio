'use client';

import { motion } from 'framer-motion';
import { galleryImages } from '@/lib/constants';

export function Gallery() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">Instalaciones Premium</h2>
          <p className="text-text-muted max-w-2xl mx-auto">Un ambiente diseñado para tu relajación, equipado con la tecnología más avanzada.</p>
        </div>

        {/* Masonry-like Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: (idx % 3) * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`relative overflow-hidden rounded-2xl group break-inside-avoid ${img.aspect} mb-6`}
            >
              <img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
