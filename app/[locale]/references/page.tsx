import { getTranslations, setRequestLocale } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ReferencesGrid from '@/components/ReferencesGrid';

interface Reference {
  key: string;
  logo?: string;
}

export async function generateMetadata() {
  const t = await getTranslations('references');
  return {
    title: `${t('title')} | Core Coaching`,
    description: t('subtitle'),
  };
}

const references: Reference[] = [
  // Mercedes - tek logo, iki şirket
  { key: 'mercedesBenzAutomotiveAndFinancial', logo: 'mercedes-benz.png' },
  // Diğer referanslar
  { key: 'koczer', logo: 'koczer.png' },
  { key: 'nissan', logo: 'nissan.png' },
  { key: 'volvo', logo: 'volvo.svg' },
  { key: 'sony', logo: 'sony.png' },
  { key: 'roche', logo: 'roche.png' },
  { key: 'entek', logo: 'entek.png' },
  { key: 'iss', logo: 'iss.png' },
  { key: 'omron', logo: 'omron.png' },
  { key: 'iqvia', logo: 'iqvia.png' },
  { key: 'boyner', logo: 'boyner.png' },
  { key: 'merck', logo: 'merck.png' },
  { key: 'michelin', logo: 'michelin.png' },
  { key: 'netas', logo: 'netas.png' },
  { key: 'vaillant', logo: 'vaillant.png' },
  { key: 'yorsan', logo: 'yorsan.png' },
  { key: 'hayat', logo: 'hayat.png' },
  { key: 'kastamonu', logo: 'kastamonu.webp' },
  { key: 'hitit', logo: 'hitit.svg' },
  { key: 'asseco', logo: 'asseco.png' },
  { key: 'vestel', logo: 'vestel.png' },
  { key: 'medipol', logo: 'medipol.svg' },
  { key: 'biruni', logo: 'biruni.webp' },
  { key: 'cengizMakina', logo: 'cengiz-makina.png' },
  { key: 'atasun', logo: 'atasun.svg' },
  { key: 'hdIskender', logo: 'hdiskender.png' },
  { key: 'nurus', logo: 'nurus.png' },
  { key: 'enerya', logo: 'enerya.png' },
  { key: 'yesim', logo: 'yesim.png' },
  { key: 'tjk', logo: 'tjk.png' },
  { key: 'abc', logo: 'abc.png' },
  { key: 'turquoiseYachts', logo: 'turquoise-yachts.png' },
  { key: 'abalioglu', logo: 'abalioglu.png?v=2' },
  { key: 'yasar', logo: 'yasar.webp' },
  { key: 'enerjisa', logo: 'enerjisa.png' },
  { key: 'yeditepe', logo: 'yeditepe.png' },
  { key: 'medicana', logo: 'medicana.png' },
  { key: 'isBankasi', logo: 'is-bankasi.png' },
  { key: 'lukoil', logo: 'lukoil.png' },
  { key: 'omsan', logo: 'omsan.png' },
  { key: 'akzoNobel', logo: 'akzo-nobel.png' },
  { key: 'bungeGida', logo: 'bunge-gida.png' },
  { key: 'teksan', logo: 'teksan.png' },
  { key: 'executas', logo: 'executas.png' },
  { key: 'entes', logo: 'entes.png' },
  { key: 'aktifBank', logo: 'aktif-bank.png' },
  { key: 'dapYapi', logo: 'dap-yapi.png' },
  { key: 'sutas', logo: 'sutas.png' },
  { key: 'ravago', logo: 'ravago.png' },
];

export default async function ReferencesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('references');
  const tCompanies = await getTranslations('references.companies');

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

        {/* References Grid Section */}
        <section className="relative -mt-16 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-neutral-200/50 border border-neutral-100">
              <ReferencesGrid
                references={references.map((ref) => ({
                  ...ref,
                  name: tCompanies(ref.key),
                }))}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
