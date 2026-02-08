import { getTranslations, setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LevelRequestForm from '@/components/LevelRequestForm';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata() {
  const t = await getTranslations('coachingSchool.level3');
  const tSub = await getTranslations('coachingSchool');
  return {
    title: `${t('title')} | ${tSub('subtitle')} | Core Coaching`,
    description: tSub('subtitle'),
  };
}

export default async function Level3Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('coachingSchool');
  const tLevel = await getTranslations('coachingSchool.level3');

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-neutral-50">
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400" />
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr,400px] lg:gap-12 items-start">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/40 text-sm font-semibold text-white/80">
                    1
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/40 text-sm font-semibold text-white/80">
                    2
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-lg font-bold text-white shadow-inner">
                    3
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white drop-shadow-lg">
                  {tLevel('title')}
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
                  {t('subtitle')}
                </p>
                <p className="text-base text-white/80 max-w-xl leading-relaxed">
                  {t('heroIntro')}
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-xl shadow-neutral-200/50 md:p-8">
                <h2 className="text-xl font-semibold text-neutral-900 mb-6">
                  {t('levelRequest.formTitle')} – {tLevel('title')}
                </h2>
                <LevelRequestForm programSlug="level-3" programName={tLevel('title')} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
