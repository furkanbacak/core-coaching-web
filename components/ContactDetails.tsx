'use client';

import { useTranslations } from 'next-intl';
import { Instagram, Linkedin, Mail, Youtube } from 'lucide-react';

export default function ContactDetails() {
  const t = useTranslations('contact');
  const email = 'info@corecoaching.com';

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
      href: '#',
      color: 'hover:text-[#E4405F]',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: '#',
      color: 'hover:text-[#FF0000]',
    },
  ] as const;

  return (
    <div className="rounded-3xl bg-white p-6 md:p-8 border border-neutral-200">
      <div className="flex items-center gap-3 text-neutral-800">
        <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
          <Mail className="w-5 h-5 text-primary-600" />
        </div>
        <div>
          <p className="text-sm text-neutral-500">{t('email')}</p>
          <a href={`mailto:${email}`} className="font-semibold hover:text-primary-600 transition-colors">
            {email}
          </a>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-neutral-200">
        <p className="text-sm font-medium text-neutral-700 mb-3">
          {t('linkedin')} • {t('instagram')} • {t('youtube')}
        </p>
        <div className="flex gap-3">
          {socialLinks.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.name}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`w-11 h-11 rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-all flex items-center justify-center ${s.color}`}
                aria-label={s.name}
                title={s.name}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

