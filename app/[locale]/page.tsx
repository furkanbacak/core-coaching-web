import Navigation from '@/components/Navigation';
import HashScrollHandler from '@/components/HashScrollHandler';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CoachingFocus from '@/components/CoachingFocus';
import References from '@/components/References';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <HashScrollHandler />
      <main>
        <Hero />
        <About />
        <References />
        <CoachingFocus />
      </main>
      <Footer />
    </>
  );
}
