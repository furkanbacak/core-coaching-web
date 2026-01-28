'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const references = [
  'MERCEDES BENZ OTOMOTİV (MBO), MERCEDES BENZ FİNANSAL HİZMETLER (MBFH)',
  'KOÇZER',
  'NİSSAN',
  'VOLVO',
  'SONY',
  'ROCHE',
  'ENTEK',
  'ISS',
  'OMRON',
  'IQVIA',
  'BOYNER',
  'MERCK İLAÇ',
  'MICHELIN',
  'NETAŞ',
  'VAILLANT',
  'YÖRSAN',
  'HAYAT KİMYA',
  'KASTAMONU ENTEGRE',
  'HİTİT BİLGİSAYAR',
  'ASSECO SEE',
  'VESTEL',
  'MEDİPOL HASTANE',
  'BİRUNİ LABORATUVAR',
  'CENGİZ MAKİNA',
  'ATASUN OPTİK',
  'HD İSKENDER',
  'NURUS',
  'ENERYA',
  'YEŞİM TEKSTİL',
  'TJK',
  'ABC DETERJAN',
  'TURKUAZ YACHTING',
  'ABALIOĞLU HOLDİNG',
  'YAŞAR FACTORİNG',
  'ENERJİSA',
];

export default function References() {
  const t = useTranslations('references');

  return (
    <section id="references" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
            {t('title')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {references.map((ref, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03, duration: 0.4 }}
              className="bg-neutral-50 rounded-lg p-6 text-center hover:bg-primary-50 transition-colors border border-neutral-200 hover:border-primary-300"
            >
              <p className="text-sm md:text-base font-medium text-neutral-700">
                {ref}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
