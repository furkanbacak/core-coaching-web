import { getTranslations, setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EventRegisterForm from '@/components/EventRegisterForm';
import Link from 'next/link';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata() {
  const t = await getTranslations('coachingSchool.register');
  const tSub = await getTranslations('coachingSchool');
  return {
    title: `${t('title')} | ${tSub('subtitle')} | Core Coaching`,
    description: t('subtitle'),
  };
}

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ event?: string; date?: string; time?: string }>;
};

export default async function RegisterPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const sp = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations('coachingSchool.register');

  const eventName = sp.event ?? '';
  const date = sp.date ?? '';
  const time = sp.time ?? '';
  const hasParams = eventName && date && time;

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-neutral-50">
        <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400" />
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg">
              {t('title')}
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto text-left md:text-center">
              {hasParams ? t('subtitle') : (locale === 'tr' ? 'Etkinlik bilgisi eksik. Lütfen takvimden bir etkinlik seçip "Kaydol" butonuna tıklayın.' : 'Event details are missing. Please select an event from the calendar and click "Register".')}
            </p>
          </div>
        </section>
        <section className="relative -mt-6 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {hasParams ? (
              <EventRegisterForm
                eventName={eventName}
                date={date}
                time={time}
                locale={locale}
              />
            ) : (
              <div className="mx-auto max-w-md rounded-2xl border border-neutral-200 bg-white p-8 text-center text-left">
                <p className="text-neutral-600">
                  {locale === 'tr'
                    ? 'Kayıt yapmak için takvim sayfasından bir etkinliğe tıklayıp "Kaydol" demeniz yeterli."
                    : 'To register, click on an event on the calendar page and then click "Register".'}
                </p>
                <Link
                  href={`/${locale}/coaching-school/calendar`}
                  className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary-500 px-6 py-3 font-semibold text-white transition hover:bg-primary-600"
                >
                  {t('backToCalendar')}
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
