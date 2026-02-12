import { getTranslations, setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n';
import { trainingSlugs } from '@/lib/program-slugs';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const slug of trainingSlugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const idx = trainingSlugs.indexOf(slug as (typeof trainingSlugs)[number]);
  if (idx === -1) return {};
  const t = await getTranslations('coaching');
  const items = t.raw('trainingArea.items') as string[];
  return {
    title: `${items[idx]} | Core Coaching`,
    description: (t.raw('trainingArea.descriptions') as string[])[idx],
  };
}

export default async function TrainingDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const idx = trainingSlugs.indexOf(slug as (typeof trainingSlugs)[number]);
  if (idx === -1) notFound();

  const t = await getTranslations('coaching');
  const tCommon = await getTranslations('teamCoaching');
  const items = t.raw('trainingArea.items') as string[];
  const descriptions = t.raw('trainingArea.descriptions') as string[];
  const details = t.raw('trainingArea.details') as {
    duration: string;
    participants: string;
    intro: string;
    bullets: string[];
  }[];

  const title = items[idx];
  const description = descriptions[idx];
  const detail = details[idx];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-neutral-50">
        {/* Hero */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400" />
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed italic">
              {description}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="relative -mt-16 pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-neutral-200/50 border border-neutral-100">
              {/* Duration & Participants badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 bg-primary-50 px-4 py-2 rounded-full border border-primary-100">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {detail.duration}
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 bg-primary-50 px-4 py-2 rounded-full border border-primary-100">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {detail.participants}
                </span>
              </div>

              <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed space-y-6 text-justify">
                <p>{detail.intro}</p>

                <h2 className="text-2xl font-serif font-bold text-neutral-900 mt-10 mb-4">
                  {locale === 'tr' ? 'Odak Alanları' : 'Focus Areas'}
                </h2>
                <ul className="list-none space-y-4 my-4">
                  {detail.bullets.map((bullet, bIdx) => {
                    const colonIdx = bullet.indexOf(':');
                    const hasTitle = colonIdx > 0 && colonIdx < 60;
                    return (
                      <li key={bIdx} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary-500 mt-2.5 flex-shrink-0" />
                        <span>
                          {hasTitle ? (
                            <>
                              <strong className="text-neutral-900">{bullet.slice(0, colonIdx)}:</strong>
                              {bullet.slice(colonIdx + 1)}
                            </>
                          ) : (
                            bullet
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-12 pt-8 border-t border-neutral-200">
                <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-1">
                      <p className="text-lg font-semibold text-neutral-900 mb-2">
                        {tCommon('ctaTitle')}
                      </p>
                      <p className="text-neutral-600">
                        {tCommon('ctaDescription')}
                      </p>
                    </div>
                    <Link
                      href={`/${locale}/contact`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors"
                    >
                      {tCommon('ctaButton')}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
