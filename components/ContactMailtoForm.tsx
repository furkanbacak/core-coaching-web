'use client';

import { FormEvent, useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Mail, Send } from 'lucide-react';
import Link from 'next/link';

const DEFAULT_TO = 'info@corecoaching.com';

function buildMailtoUrl(params: { to: string; subject: string; body: string }) {
  const { to, subject, body } = params;
  const qs = new URLSearchParams({
    subject,
    body,
  });
  return `mailto:${encodeURIComponent(to)}?${qs.toString()}`;
}

export default function ContactMailtoForm() {
  const t = useTranslations('contactPage');
  const locale = useLocale();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  const subject = useMemo(() => {
    return locale === 'tr' ? 'İletişim Formu' : 'Contact Form';
  }, [locale]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!consent) return;

    const bodyLines = [
      `${locale === 'tr' ? 'Ad Soyad' : 'Name'}: ${name}`,
      `${locale === 'tr' ? 'E-posta' : 'Email'}: ${email}`,
      '',
      `${locale === 'tr' ? 'Mesaj' : 'Message'}:`,
      message,
    ];

    const url = buildMailtoUrl({
      to: DEFAULT_TO,
      subject,
      body: bodyLines.join('\n'),
    });

    window.location.href = url;
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-neutral-700">{t('name')}</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-300 transition"
            placeholder={locale === 'tr' ? 'Ad Soyad' : 'Full name'}
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-neutral-700">{t('email')}</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-300 transition"
            placeholder="name@company.com"
          />
        </label>
      </div>

      <label className="space-y-2 block">
        <span className="text-sm font-medium text-neutral-700">{t('message')}</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={6}
          className="w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-300 transition"
          placeholder={locale === 'tr' ? 'Kısa bir not…' : 'A short note…'}
        />
      </label>

      <div className="rounded-2xl border border-neutral-200 bg-white p-4">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-200"
          />
          <span className="text-sm text-neutral-700 leading-relaxed">
            {t.rich('consent', {
              terms: (chunks) => (
                <Link
                  href={`/${locale}/terms`}
                  className="text-primary-600 hover:text-primary-700 underline underline-offset-4"
                >
                  {chunks}
                </Link>
              ),
              privacy: (chunks) => (
                <Link
                  href={`/${locale}/privacy`}
                  className="text-primary-600 hover:text-primary-700 underline underline-offset-4"
                >
                  {chunks}
                </Link>
              ),
            })}
          </span>
        </label>
        {!consent && (
          <p className="mt-2 text-xs text-neutral-500">{t('consentCta')}</p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xs text-neutral-500 leading-relaxed">{t('hint')}</p>

        <button
          type="submit"
          disabled={!consent}
          className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-white font-semibold shadow-sm transition ${
            consent
              ? 'bg-primary-500 hover:bg-primary-600'
              : 'bg-neutral-400 cursor-not-allowed'
          }`}
        >
          <Send className="w-4 h-4" />
          {t('submit')}
        </button>
      </div>

      <div className="pt-4 border-t border-neutral-200/70">
        <a
          href={`mailto:${DEFAULT_TO}`}
          className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-primary-600 transition-colors"
        >
          <Mail className="w-4 h-4" />
          {DEFAULT_TO}
        </a>
      </div>
    </form>
  );
}

