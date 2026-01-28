'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Reference {
  name: string;
  logo?: string;
}

const references: Reference[] = [
  // Logos that currently exist under /public/images/references/
  { name: 'MERCEDES BENZ OTOMOTİV (MBO), MERCEDES BENZ FİNANSAL HİZMETLER (MBFH)' },
  { name: 'KOÇZER', logo: 'koczer.png' },
  { name: 'NİSSAN', logo: 'nissan.png' },
  { name: 'VOLVO', logo: 'volvo.svg' },
  { name: 'SONY', logo: 'sony.png' },
  { name: 'ROCHE', logo: 'roche.png' },
  { name: 'ENTEK', logo: 'entek.png' },
  { name: 'ISS', logo: 'iss.png' },
  { name: 'OMRON', logo: 'omron.png' },
  { name: 'IQVIA', logo: 'iqvia.png' },
  { name: 'BOYNER', logo: 'boyner.png' },

  // The rest will render as text until their logos are added
  { name: 'MERCK İLAÇ' },
  { name: 'MICHELIN' },
  { name: 'NETAŞ' },
  { name: 'VAILLANT' },
  { name: 'YÖRSAN' },
  { name: 'HAYAT KİMYA' },
  { name: 'KASTAMONU ENTEGRE' },
  { name: 'HİTİT BİLGİSAYAR' },
  { name: 'ASSECO SEE' },
  { name: 'VESTEL' },
  { name: 'MEDİPOL HASTANE' },
  { name: 'BİRUNİ LABORATUVAR' },
  { name: 'CENGİZ MAKİNA' },
  { name: 'ATASUN OPTİK' },
  { name: 'HD İSKENDER' },
  { name: 'NURUS' },
  { name: 'ENERYA' },
  { name: 'YEŞİM TEKSTİL' },
  { name: 'TJK' },
  { name: 'ABC DETERJAN' },
  { name: 'TURKUAZ YACHTING' },
  { name: 'ABALIOĞLU HOLDİNG' },
  { name: 'YAŞAR FACTORİNG' },
  { name: 'ENERJİSA' },
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
