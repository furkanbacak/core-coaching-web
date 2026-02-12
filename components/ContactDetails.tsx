'use client';

import { useTranslations } from 'next-intl';
import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

export default function ContactDetails() {
  const t = useTranslations('contact');
  const email = 'info@corecoachingtraining.com';

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/nurhan-yazganel?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      color: 'hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/corecoachingtraining/',
      color: 'hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:text-white hover:border-transparent',
    },
  ] as const;

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-10 xl:p-12 shadow-lg shadow-neutral-200/50 border border-neutral-100 w-full">
      {/* Email Section */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center flex-shrink-0">
          <Mail className="w-5 h-5 text-primary-600" />
        </div>
        <div className="flex-1 min-w-0 pr-6">
          <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">
            {t('email')}
          </p>
          <a 
            href={`mailto:${email}`} 
            className="text-neutral-900 font-semibold hover:text-primary-600 transition-colors"
          >
            {email}
          </a>
        </div>
      </div>

      {/* Location Section */}
      <div className="flex items-start gap-4 mt-6 pt-6 border-t border-neutral-100">
        <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center flex-shrink-0">
          <MapPin className="w-5 h-5 text-neutral-600" />
        </div>
        <div>
          <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">
            {t('location') || 'Konum'}
          </p>
          <p className="text-neutral-900 font-medium">
            İstanbul, Türkiye
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-6 pt-6 border-t border-neutral-100">
        <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-4">
          {t('socialTitle') || 'Sosyal Medya'}
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
                className={`w-11 h-11 rounded-xl border-2 border-neutral-200 bg-white text-neutral-600 transition-all duration-300 flex items-center justify-center ${s.color}`}
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
