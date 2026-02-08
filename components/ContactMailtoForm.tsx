'use client';

import { FormEvent, useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Mail, Send, User, MessageCircle } from 'lucide-react';
import LegalModal from './LegalModal';
import { TermsContent, PrivacyContent } from './LegalContent';

const DEFAULT_TO = 'info@corecoachingtraining.com';
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_LEVEL_REQUEST_ID;

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
  const tLegal = useTranslations('legal');
  const locale = useLocale();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Modal states
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const subject = useMemo(() => {
    return locale === 'tr' ? 'İletişim Formu' : 'Contact Form';
  }, [locale]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!consent) return;

    if (!FORMSPREE_ID) {
      const bodyLines = [
        `${locale === 'tr' ? 'Ad Soyad' : 'Name'}: ${name}`,
        `${locale === 'tr' ? 'E-posta' : 'Email'}: ${email}`,
        '',
        `${locale === 'tr' ? 'Mesaj' : 'Message'}:`,
        message,
      ];
      window.location.href = buildMailtoUrl({
        to: DEFAULT_TO,
        subject,
        body: bodyLines.join('\n'),
      });
      return;
    }

    setStatus('sending');
    try {
      const fd = new FormData();
      fd.append('_subject', subject);
      fd.append('formType', 'contact');
      fd.append('name', name);
      fd.append('email', email);
      fd.append('message', message);
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: fd,
      });
      if (res.ok || res.status === 0) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <>
        <div className="rounded-2xl border-2 border-primary-200 bg-primary-50 p-8 text-center">
          <p className="text-lg font-medium text-primary-800">{t('successMessage')}</p>
        </div>
        <LegalModal isOpen={showTerms} onClose={() => setShowTerms(false)} title={tLegal('termsTitle')}>
          <TermsContent />
        </LegalModal>
        <LegalModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} title={tLegal('privacyTitle')}>
          <PrivacyContent />
        </LegalModal>
      </>
    );
  }

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid gap-5 md:grid-cols-2">
          {/* Name Field */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-neutral-700">
              <User className="w-4 h-4 text-neutral-400" />
              {t('name')}
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-xl border-2 border-neutral-200 bg-neutral-50 px-4 py-3.5 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary-400 focus:bg-white focus:ring-4 focus:ring-primary-100 transition-all duration-200"
              placeholder={locale === 'tr' ? 'Ad Soyad' : 'Full name'}
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-neutral-700">
              <Mail className="w-4 h-4 text-neutral-400" />
              {t('email')}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border-2 border-neutral-200 bg-neutral-50 px-4 py-3.5 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary-400 focus:bg-white focus:ring-4 focus:ring-primary-100 transition-all duration-200"
              placeholder="email@sirket.com"
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-neutral-700">
            <MessageCircle className="w-4 h-4 text-neutral-400" />
            {t('message')}
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="w-full resize-none rounded-xl border-2 border-neutral-200 bg-neutral-50 px-4 py-3.5 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary-400 focus:bg-white focus:ring-4 focus:ring-primary-100 transition-all duration-200"
            placeholder={locale === 'tr' ? 'Mesajınızı buraya yazın…' : 'Write your message here…'}
          />
        </div>

        {/* Consent Checkbox */}
        <div className="rounded-xl border-2 border-neutral-200 bg-neutral-50 p-4">
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative mt-0.5">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="peer sr-only"
              />
              <div className="w-5 h-5 rounded-md border-2 border-neutral-300 bg-white peer-checked:bg-primary-500 peer-checked:border-primary-500 transition-all duration-200 flex items-center justify-center">
                <svg
                  className={`w-3 h-3 text-white transition-opacity ${consent ? 'opacity-100' : 'opacity-0'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <span className="text-sm text-neutral-600 leading-relaxed group-hover:text-neutral-900 transition-colors">
              {locale === 'tr' ? (
                <>
                  <button
                    type="button"
                    onClick={() => setShowTerms(true)}
                    className="text-primary-600 hover:text-primary-700 underline underline-offset-4 font-medium"
                  >
                    Kullanım Şartları
                  </button>
                  {' ve '}
                  <button
                    type="button"
                    onClick={() => setShowPrivacy(true)}
                    className="text-primary-600 hover:text-primary-700 underline underline-offset-4 font-medium"
                  >
                    Gizlilik Politikası
                  </button>
                  {"'nı kabul ediyorum."}
                </>
              ) : (
                <>
                  {'I agree to the '}
                  <button
                    type="button"
                    onClick={() => setShowTerms(true)}
                    className="text-primary-600 hover:text-primary-700 underline underline-offset-4 font-medium"
                  >
                    Terms of Service
                  </button>
                  {' and '}
                  <button
                    type="button"
                    onClick={() => setShowPrivacy(true)}
                    className="text-primary-600 hover:text-primary-700 underline underline-offset-4 font-medium"
                  >
                    Privacy Policy
                  </button>
                  {'.'}
                </>
              )}
            </span>
          </label>
        </div>

        {status === 'error' && (
          <p className="text-sm text-red-600">{t('errorMessage')}</p>
        )}

        {/* Submit Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
          <p className="text-xs text-neutral-500 leading-relaxed max-w-sm">
            {FORMSPREE_ID ? t('hint') : t('hintMailto')}
          </p>

          <button
            type="submit"
            disabled={!consent || status === 'sending'}
            className={`inline-flex items-center justify-center gap-2.5 rounded-xl px-8 py-4 text-white font-semibold shadow-lg transition-all duration-300 ${
              consent && status !== 'sending'
                ? 'bg-primary-500 hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/25 hover:-translate-y-0.5'
                : 'bg-neutral-300 cursor-not-allowed shadow-none'
            }`}
          >
            <Send className="w-4 h-4" />
            {status === 'sending' ? t('sending') : t('submit')}
          </button>
        </div>
      </form>

      {/* Terms Modal */}
      <LegalModal
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
        title={tLegal('termsTitle')}
      >
        <TermsContent />
      </LegalModal>

      {/* Privacy Modal */}
      <LegalModal
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
        title={tLegal('privacyTitle')}
      >
        <PrivacyContent />
      </LegalModal>
    </>
  );
}
