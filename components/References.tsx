'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Reference {
  name: string;
  logo?: string;
}

const references: Reference[] = [
  // Mercedes - iki ayrı şirket
  { name: 'Mercedes-Benz Otomotiv', logo: 'mercedes-benz.png' },
  { name: 'Mercedes-Benz Finansal Hizmetler', logo: 'mercedes-benz-finansal.png' },
  
  // Diğer referanslar
  { name: 'Koçzer', logo: 'koczer.png' },
  { name: 'Nissan', logo: 'nissan.png' },
  { name: 'Volvo', logo: 'volvo.svg' },
  { name: 'Sony', logo: 'sony.png' },
  { name: 'Roche', logo: 'roche.png' },
  { name: 'Entek', logo: 'entek.png' },
  { name: 'ISS', logo: 'iss.png' },
  { name: 'Omron', logo: 'omron.png' },
  { name: 'IQVIA', logo: 'iqvia.png' },
  { name: 'Boyner', logo: 'boyner.png' },
  { name: 'Merck İlaç', logo: 'merck.png' },
  { name: 'Michelin', logo: 'michelin.png' },
  { name: 'Netaş', logo: 'netas.png' },
  { name: 'Vaillant', logo: 'vaillant.png' },
  { name: 'Yörsan', logo: 'yorsan.png' },
  { name: 'Hayat Kimya', logo: 'hayat.png' },
  { name: 'Kastamonu Entegre', logo: 'kastamonu.webp' },
  { name: 'Hitit Bilgisayar', logo: 'hitit.svg' },
  { name: 'Asseco SEE', logo: 'asseco.png' },
  { name: 'Vestel', logo: 'vestel.png' },
  { name: 'Medipol Hastane', logo: 'medipol.svg' },
  { name: 'Biruni Laboratuvar', logo: 'biruni.webp' },
  { name: 'Cengiz Makina', logo: 'cengiz-makina.png' },
  { name: 'Atasun Optik', logo: 'atasun.svg' },
  { name: 'HD İskender', logo: 'hdiskender.png' },
  { name: 'Nurus', logo: 'nurus.png' },
  { name: 'Enerya', logo: 'enerya.png' },
  { name: 'Yeşim Tekstil', logo: 'yesim.png' },
  { name: 'TJK', logo: 'tjk.png' },
  { name: 'ABC Deterjan', logo: 'abc.png' },
  { name: 'Turkuaz Yachting', logo: 'turkuaz.png' },
  { name: 'Abalıoğlu Holding', logo: 'abalioglu.png' },
  { name: 'Yaşar Faktoring', logo: 'yasar.webp' },
  { name: 'Enerjisa', logo: 'enerjisa.png' },
];

// Duplicate once for seamless marquee (track width ~200%)
const marqueeItems: Reference[] = [...references, ...references];

export default function References() {
  const t = useTranslations('references');

  return (
    <section 
      id="references" 
      className="pt-8 pb-20 md:pt-10 md:pb-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-4">
            {t('title')}
          </h2>
        </motion.div>

        <div className="marquee">
          {/* soft edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-white/0 z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-white/0 z-10" />

          <div className="marquee-track gap-4 md:gap-6 py-2">
            {marqueeItems.map((ref, idx) => (
              <div
                key={`${ref.name}-${idx}`}
                className="shrink-0 w-44 md:w-52 h-20 md:h-24 rounded-2xl border border-neutral-200 bg-white flex items-center justify-center px-5 hover:border-primary-200 hover:shadow-sm transition-all group"
                title={ref.name}
              >
                {ref.logo ? (
                  <div className="relative w-full h-10 md:h-12">
                    <Image
                      src={`/images/references/${ref.logo}`}
                      alt={ref.name}
                      fill
                      className="object-contain opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                      sizes="208px"
                    />
                  </div>
                ) : (
                  <span className="text-[11px] md:text-xs font-semibold text-neutral-600 text-center leading-tight">
                    {ref.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
