import { setRequestLocale } from 'next-intl/server';
import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import HashScrollHandler from '@/components/HashScrollHandler';
import Hero from '@/components/Hero';

// Lazy load below-the-fold components
const About = dynamic(() => import('@/components/About'));
const CoachingFocus = dynamic(() => import('@/components/CoachingFocus'));
const References = dynamic(() => import('@/components/References'));
const Footer = dynamic(() => import('@/components/Footer'));

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
