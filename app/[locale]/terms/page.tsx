import { getTranslations, setRequestLocale } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { TermsContent } from '@/components/LegalContent';

export async function generateMetadata() {
  const t = await getTranslations('legal');
  return {
    title: `${t('termsTitle')} | Core Coaching`,
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('legal');

  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-8">
            {t('termsTitle')}
          </h1>

          <div className="prose prose-neutral max-w-none">
            <TermsContent />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

