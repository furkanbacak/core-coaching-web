'use client';

import { FormEvent, useState } from 'react';
import { useTranslations } from 'next-intl';
import { User, Mail, Phone, MessageCircle, Send } from 'lucide-react';

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_LEVEL_REQUEST_ID;

type ProgramSlug = 'level-1' | 'level-2' | 'level-3';

type Props = {
  programSlug: ProgramSlug;
  programName: string;
};

export default function LevelRequestForm({ programSlug, programName }: Props) {
  const t = useTranslations('coachingSchool.levelRequest');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!FORMSPREE_ID) {
      // Fallback: mailto so they still get requests without Formspree
      const subject = encodeURIComponent(`${programName} - ${t('requestSubject')}`);
      const body = encodeURIComponent(
        `Program: ${programName}\nAd: ${name}\nSoyad: ${surname}\nE-posta: ${email}\nTelefon: ${phone}\n\nMesaj:\n${message}`
      );
      window.location.href = `mailto:info@corecoachingtraining.com?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      const fd = new FormData();
      fd.append('_subject', `${programName} - Koçluk Okulu Başvurusu`);
      fd.append('program', programName);
      fd.append('programSlug', programSlug);
      fd.append('name', name);
      fd.append('surname', surname);
      fd.append('email', email);
      fd.append('phone', phone);
      fd.append('message', message);
      const res = await fetch('/api/formspree', {
        method: 'POST',
        body: fd,
      });
      if (res.ok) {
        setStatus('success');
        setName('');
        setSurname('');
        setEmail('');
        setPhone('');
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
      <div className="rounded-2xl border-2 border-primary-200 bg-primary-50 p-8 text-center">
        <p className="text-lg font-medium text-primary-800">{t('successMessage')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="program" value={programName} />
      <input type="hidden" name="programSlug" value={programSlug} />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="level-name" className="block text-sm font-medium text-neutral-700">
            {t('name')} *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input
              id="level-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border-2 border-neutral-200 bg-white py-3 pl-10 pr-4 text-neutral-900 placeholder:text-neutral-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
              placeholder={t('namePlaceholder')}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="level-surname" className="block text-sm font-medium text-neutral-700">
            {t('surname')} *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input
              id="level-surname"
              type="text"
              required
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className="w-full rounded-xl border-2 border-neutral-200 bg-white py-3 pl-10 pr-4 text-neutral-900 placeholder:text-neutral-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
              placeholder={t('surnamePlaceholder')}
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="level-email" className="block text-sm font-medium text-neutral-700">
          {t('email')} *
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          <input
            id="level-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border-2 border-neutral-200 bg-white py-3 pl-10 pr-4 text-neutral-900 placeholder:text-neutral-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
            placeholder="email@ornek.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="level-phone" className="block text-sm font-medium text-neutral-700">
          {t('phone')} *
        </label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          <input
            id="level-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-xl border-2 border-neutral-200 bg-white py-3 pl-10 pr-4 text-neutral-900 placeholder:text-neutral-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
            placeholder="05XX XXX XX XX"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="level-message" className="block text-sm font-medium text-neutral-700">
          {t('message')}
        </label>
        <div className="relative">
          <MessageCircle className="absolute left-3 top-4 h-4 w-4 text-neutral-400" />
          <textarea
            id="level-message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full resize-none rounded-xl border-2 border-neutral-200 bg-white py-3 pl-10 pr-4 text-neutral-900 placeholder:text-neutral-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
            placeholder={t('messagePlaceholder')}
          />
        </div>
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600">{t('errorMessage')}</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-xl bg-primary-500 px-6 py-4 font-semibold text-white shadow-lg transition-all hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 disabled:opacity-70"
      >
        {status === 'sending' ? t('sending') : (
          <>
            <Send className="inline-block h-5 w-5 -translate-y-0.5 align-middle mr-2" />
            {t('submit')}
          </>
        )}
      </button>
    </form>
  );
}
