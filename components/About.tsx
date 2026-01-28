'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  const t = useTranslations('about');
  const tFounder = useTranslations('founder');

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
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

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-neutral-700 leading-relaxed"
          >
            <p className="text-lg">{t('description')}</p>
            <p className="text-lg">{t('description2')}</p>
            <p className="text-lg">{t('description3')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/nurhan-yazganel.jpg"
              alt="Nurhan Yazganel"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-neutral-50 rounded-3xl p-8 md:p-12 space-y-8"
        >
          <div className="text-center space-y-4">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900">
              {tFounder('title')}
            </h3>
            <p className="text-lg text-primary-600 font-medium">
              {tFounder('credentials')}
            </p>
            <blockquote className="text-xl md:text-2xl font-serif text-neutral-700 italic pt-4">
              {tFounder('quote')}
            </blockquote>
          </div>

          <div className="space-y-6 text-neutral-700 leading-relaxed max-w-4xl mx-auto">
            <p className="text-lg">{tFounder('bio')}</p>
            <p className="text-lg">{tFounder('bio2')}</p>
            <p className="text-lg">{tFounder('bio3')}</p>
            <p className="text-lg">{tFounder('bio4')}</p>
            <p className="text-lg">{tFounder('bio5')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
