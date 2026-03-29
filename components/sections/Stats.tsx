'use client';

import { stats } from '@/lib/constants';
import { CounterAnimation } from '@/components/animations/CounterAnimation';
import { FadeIn } from '@/components/animations/FadeIn';

export function Stats() {
  return (
    <section className="bg-primary py-20 text-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 divide-x-0 md:divide-x divide-secondary/30">
          {stats.map((stat, idx) => (
            <FadeIn key={stat.id} delay={idx * 0.1} className="text-center px-4">
              <div className="font-serif text-5xl md:text-6xl text-secondary mb-4">
                <CounterAnimation 
                  value={stat.value} 
                  prefix={stat.prefix} 
                  suffix={stat.suffix} 
                />
              </div>
              <p className="text-sm md:text-base font-medium text-white/80 uppercase tracking-widest">
                {stat.label}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
