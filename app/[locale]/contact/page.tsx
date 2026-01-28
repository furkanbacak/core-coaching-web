import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactMailtoForm from '@/components/ContactMailtoForm';
import ContactDetails from '@/components/ContactDetails';

export async function generateMetadata() {
  const t = await getTranslations('contactPage');
  return {
    title: `${t('title')} | Core Coaching`,
    description: t('subtitle'),
  };
}

export default async function ContactPage() {
  const t = await getTranslations('contactPage');

  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-4">
              {t('title')}
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-5">
            <div className="md:col-span-3 bg-neutral-50 rounded-3xl p-6 md:p-10 border border-neutral-200">
              <ContactMailtoForm />
            </div>
            <div className="md:col-span-2">
              <ContactDetails />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

