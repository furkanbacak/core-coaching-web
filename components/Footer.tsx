'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { Instagram, Linkedin, Mail, Youtube } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const email = 'info@corecoachingtraining.com';
  const socials = [
    {
      key: 'linkedin',
      label: t('linkedin'),
      href: 'https://www.linkedin.com/in/nurhan-yazganel?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      Icon: Linkedin,
    },
    { key: 'instagram', label: t('instagram'), href: '#', Icon: Instagram },
    { key: 'youtube', label: t('youtube'), href: '#', Icon: Youtube },
  ] as const;

  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center">
            <span className="text-lg font-semibold text-white tracking-wide">
              CORE
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6 md:justify-end">
            <div className="flex items-center gap-3">
              {socials.map(({ key, href, label, Icon }) => (
                <a
                  key={key}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-all"
                  aria-label={label}
                  title={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <Link
                href={`/${locale}/terms`}
                className="text-neutral-400 hover:text-white transition-colors underline underline-offset-4 decoration-neutral-600 hover:decoration-neutral-300"
              >
                {t('terms')}
              </Link>
              <Link
                href={`/${locale}/privacy`}
                className="text-neutral-400 hover:text-white transition-colors underline underline-offset-4 decoration-neutral-600 hover:decoration-neutral-300"
              >
                {t('privacy')}
              </Link>
              <Link
                href={`/${locale}/pricing-policy`}
                className="text-neutral-400 hover:text-white transition-colors underline underline-offset-4 decoration-neutral-600 hover:decoration-neutral-300"
              >
                {t('pricing')}
              </Link>
              <Link
                href={`/${locale}/cancellation-policy`}
                className="text-neutral-400 hover:text-white transition-colors underline underline-offset-4 decoration-neutral-600 hover:decoration-neutral-300"
              >
                {t('cancellation')}
              </Link>
              <Link
                href={`/${locale}/refund-policy`}
                className="text-neutral-400 hover:text-white transition-colors underline underline-offset-4 decoration-neutral-600 hover:decoration-neutral-300"
              >
                {t('refund')}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-xs text-neutral-500 text-center">
            © {new Date().getFullYear()} Core Coaching & Training Solutions. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
