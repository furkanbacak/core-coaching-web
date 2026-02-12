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

        {/* C-shape: image floats right, text wraps around circle */}
        <div className="overflow-hidden mb-24">
          {/* Mobilde fotoğrafı ortalamak için wrapper */}
          <div className="flex justify-center md:block md:contents">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="float-none md:float-right ml-0 md:ml-8 mb-6 w-80 h-80 md:w-[22rem] md:h-[22rem] shrink-0 relative rounded-full"
              style={{ shapeOutside: 'circle(50% at 50% 50%)' }}
            >
              {/* Circle frame (circle.svg) */}
              <Image
                src="/images/circle.svg"
                alt=""
                fill
                className="object-contain pointer-events-none"
                sizes="(max-width: 768px) 320px, 352px"
                priority
              />
              <div className="absolute inset-[14%] rounded-full overflow-hidden bg-white shadow-inner">
                <Image
                  src="/images/nurhan-yazganel.jpg"
                  alt="Nurhan Yazganel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 640px, 704px"
                  quality={90}
                  priority
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-neutral-700 leading-relaxed text-lg"
          >
            <blockquote className="text-xl md:text-2xl font-serif font-bold text-primary-600 italic border-l-4 border-primary-400 pl-4">
              {t('quote1')}
            </blockquote>
            <p>{t('intro')}</p>
            <p>{t('focus')}</p>
            <p>{t('today')}</p>
            <p className="font-semibold text-neutral-900">{t('real')}</p>
            <p>{t('holistic')}</p>
            <p className="font-semibold text-neutral-900">{t('noShelf')}</p>
            <p>{t('everyProgram')}</p>
            <p>{t('because')}</p>

            <h3 className="text-2xl font-serif font-bold text-neutral-900 pt-2">
              {t('missionTitle')}
            </h3>
            <p>{t('mission')}</p>
            <p className="font-medium text-neutral-800">{t('journeysIntro')}</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>{t('journey1')}</li>
              <li>{t('journey2')}</li>
              <li>{t('journey3')}</li>
              <li>{t('journey4')}</li>
              <li>{t('journey5')}</li>
            </ul>

            <blockquote className="text-xl font-serif font-bold text-primary-600 italic border-l-4 border-primary-400 pl-4 py-2">
              {t('quote2')}
            </blockquote>
            <p>{t('different')}</p>
            <p>{t('founderIntro')}</p>

            <h3 className="text-2xl font-serif font-bold text-neutral-900 pt-2">
              {t('whyTitle')}
            </h3>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>{t('why1')}</li>
              <li>{t('why2')}</li>
              <li>{t('why3')}</li>
              <li className="font-semibold text-neutral-900">{t('why4')}</li>
            </ul>
          </motion.div>

          <div className="clear-both" />
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
            <p className="text-lg">{tFounder.rich('bio', { b: (chunks) => <strong className="font-semibold text-neutral-800">{chunks}</strong> })}</p>
            <p className="text-lg">{tFounder.rich('bio2', { b: (chunks) => <strong className="font-semibold text-neutral-800">{chunks}</strong> })}</p>
            <p className="text-lg">{tFounder.rich('bio3', { b: (chunks) => <strong className="font-semibold text-neutral-800">{chunks}</strong> })}</p>
            <p className="text-lg">{tFounder.rich('bio4', { b: (chunks) => <strong className="font-semibold text-neutral-800">{chunks}</strong> })}</p>
            <p className="text-lg">{tFounder.rich('bio5', { b: (chunks) => <strong className="font-semibold text-neutral-800">{chunks}</strong> })}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
