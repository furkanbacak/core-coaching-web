import { getTranslations, setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { PricingContent } from '@/components/LegalContent';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata() {
  const t = await getTranslations('legal');
  return {
    title: `${t('pricingTitle')} | Core Coaching`,
  };
}

export default async function PricingPolicyPage({
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
            {t('pricingTitle')}
          </h1>

          <div className="prose prose-neutral max-w-none">
            <PricingContent />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
