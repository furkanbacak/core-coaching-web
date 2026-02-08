import { getTranslations, setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EventsCalendar from '@/components/EventsCalendar';
import eventsData from '@/data/events.json';
import type { CalendarEvent } from '@/lib/events';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata() {
  const t = await getTranslations('coachingSchool.calendar');
  const tSub = await getTranslations('coachingSchool');
  return {
    title: `${t('title')} | ${tSub('subtitle')} | Core Coaching`,
    description: t('subtitle'),
  };
}

export default async function CalendarPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('coachingSchool.calendar');
  const tSub = await getTranslations('coachingSchool');

  const events = eventsData as CalendarEvent[];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-neutral-50">
        <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400" />
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">
              {t('title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        </section>
        <section className="relative -mt-6 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <EventsCalendar
              events={events}
              locale={locale}
              translations={{
                title: t('title'),
                subtitle: t('subtitle'),
                searchPlaceholder: t('searchPlaceholder'),
                findEvents: t('findEvents'),
                month: t('month'),
                events: t('events'),
                thisMonth: t('thisMonth'),
                course: t('course'),
                webinar: t('webinar'),
                masterclass: t('masterclass'),
                noEvents: t('noEvents'),
                modalClose: t('modalClose'),
                modalDate: t('modalDate'),
                modalTime: t('modalTime'),
                modalRegister: t('modalRegister'),
                modalRegisterHint: t('modalRegisterHint'),
              }}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
