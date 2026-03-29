import { trustBadges } from '@/lib/constants';

export function TrustBar() {
  return (
    <section className="bg-surface py-8 overflow-hidden flex items-center">
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {trustBadges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2 text-primary/60 font-serif text-xl whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              {badge}
            </div>
          ))}
          {/* Duplicate for infinite effect */}
          {trustBadges.map((badge, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-2 text-primary/60 font-serif text-xl whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              {badge}
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInlineStyle={{
        __html: `
          @keyframes infinite-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 25s linear infinite;
          }
        `
      }} />
    </section>
  );
}
