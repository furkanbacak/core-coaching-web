import { setRequestLocale } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import HashScrollHandler from '@/components/HashScrollHandler';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CoachingFocus from '@/components/CoachingFocus';
import References from '@/components/References';
import Footer from '@/components/Footer';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

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
