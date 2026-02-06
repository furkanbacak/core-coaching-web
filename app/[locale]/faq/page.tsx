import { getTranslations, setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQContent from '@/components/FAQContent';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata() {
  const t = await getTranslations('faq');
  return {
    title: `${t('title')} | Core Coaching`,
    description: t('subtitle'),
  };
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('faq');

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-neutral-50">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400" />
          
          {/* Decorative circles */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-300/20 rounded-full blur-3xl" />
          
          {/* Grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">
              {t('title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        </section>

        {/* FAQ Content Section */}
        <section className="relative -mt-16 pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQContent />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
