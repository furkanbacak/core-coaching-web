'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function CoachingFocus() {
  const t = useTranslations('coaching');

  return (
    <section id="coaching" className="py-24 md:py-32 bg-neutral-50">
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

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Coaching Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-sm"
          >
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 mb-8 pb-4 border-b border-neutral-200">
              {t('coachingArea.title')}
            </h3>
            <ul className="space-y-4">
              {t.raw('coachingArea.items').map((item: string, index: number) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start space-x-3 text-neutral-700"
                >
                  <span className="text-primary-600 mt-1.5">•</span>
                  <span className="text-lg leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Training Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-sm"
          >
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 mb-8 pb-4 border-b border-neutral-200">
              {t('trainingArea.title')}
            </h3>
            <ul className="space-y-4">
              {t.raw('trainingArea.items').map((item: string, index: number) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="flex items-start space-x-3 text-neutral-700"
                >
                  <span className="text-primary-600 mt-1.5">•</span>
                  <span className="text-lg leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
