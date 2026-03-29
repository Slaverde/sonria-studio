import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { Services } from '@/components/sections/Services';
import { Stats } from '@/components/sections/Stats';
import { About } from '@/components/sections/About';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { Gallery } from '@/components/sections/Gallery';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Stats />
      <About />
      <Process />
      <Testimonials />
      <Gallery />
      <CTA />
      <Footer />
    </main>
  );
}
