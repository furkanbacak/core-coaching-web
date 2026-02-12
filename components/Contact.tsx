'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Mail } from 'lucide-react';

export default function Contact() {
  const t = useTranslations('contact');

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/nurhan-yazganel?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      color: 'hover:text-[#0077b5]',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/corecoachingtraining/',
      color: 'hover:text-[#E4405F]',
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="space-y-8">
            <div className="flex items-center justify-center space-x-4 text-neutral-700">
              <Mail className="w-6 h-6 text-primary-500" />
              <a
                href="mailto:info@corecoachingtraining.com"
                className="text-lg md:text-xl hover:text-primary-500 transition-colors"
              >
                info@corecoachingtraining.com
              </a>
            </div>

            <div className="pt-8 border-t border-neutral-200">
              <p className="text-center text-neutral-600 mb-6 font-medium">
                {t('linkedin')} • {t('instagram')}
              </p>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-full bg-neutral-100 text-neutral-600 transition-all ${social.color} hover:bg-neutral-200 transform hover:scale-110`}
                      aria-label={social.name}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
