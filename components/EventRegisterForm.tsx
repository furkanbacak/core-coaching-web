'use client';

import { FormEvent, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { User, Mail, Phone, MessageCircle, Send, ArrowLeft } from 'lucide-react';

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_LEVEL_REQUEST_ID;
const MONTHS_TR = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

type Props = {
  eventName: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm-HH:mm
  locale: string;
};

function formatDate(dateStr: string, isTr: boolean): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  const months = isTr ? MONTHS_TR : MONTHS_EN;
  return `${d} ${months[m - 1]} ${y}`;
}

function formatTime(timeStr: string): string {
  return timeStr.replace('-', ' – ');
}

export default function EventRegisterForm({ eventName, date, time, locale }: Props) {
  const t = useTranslations('coachingSchool.register');
  const isTr = locale === 'tr';
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`${isTr ? 'Etkinlik Kaydı' : 'Event Registration'}: ${eventName}`);
      const body = encodeURIComponent(
        `Etkinlik: ${eventName}\nTarih: ${formatDate(date, isTr)}\nSaat: ${formatTime(time)}\n\nAd: ${name}\nSoyad: ${surname}\nE-posta: ${email}\nTelefon: ${phone}\n\nMesaj:\n${message}`
      );
      window.location.href = `mailto:info@corecoachingtraining.com?subject=${subject}&body=${body}`;
      return;
    }
    setStatus('sending');
    try {
      const fd = new FormData();
      fd.append('_subject', `${isTr ? 'Etkinlik Kaydı' : 'Event Registration'}: ${eventName}`);
      fd.append('event', eventName);
      fd.append('eventDate', date);
      fd.append('eventTime', time);
      fd.append('name', name);
      fd.append('surname', surname);
      fd.append('email', email);
      fd.append('phone', phone);
      fd.append('message', message);
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: fd,
      });
      // res.ok veya CORS/opaque (status 0) – localhost'ta Formspree yine de gönderir, yanıt bazen okunamaz
      if (res.ok || res.status === 0) {
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
      <div className="rounded-2xl border-2 border-primary-200 bg-primary-50 p-8 text-center text-left">
        <p className="text-lg font-medium text-primary-800">{t('successMessage')}</p>
        <Link
          href={`/${locale}/coaching-school/calendar`}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary-500 px-6 py-3 font-semibold text-white transition hover:bg-primary-600"
        >
          <ArrowLeft className="h-5 w-5" />
          {t('backToCalendar')}
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8 rounded-xl border border-neutral-200 bg-neutral-50 p-6 text-left">
        <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
          {t('eventLabel')}
        </p>
        <p className="mt-1 text-lg font-semibold text-neutral-900">{eventName}</p>
        <p className="mt-2 text-sm text-neutral-600">
          <span className="font-medium text-neutral-700">{t('dateLabel')}:</span>{' '}
          {formatDate(date, isTr)}
        </p>
        <p className="text-sm text-neutral-600">
          <span className="font-medium text-neutral-700">{t('timeLabel')}:</span>{' '}
          {formatTime(time)}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 text-left">
        <input type="hidden" name="event" value={eventName} />
        <input type="hidden" name="eventDate" value={date} />
        <input type="hidden" name="eventTime" value={time} />

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="reg-name" className="block text-sm font-medium text-neutral-700">
              {t('name')} *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input
                id="reg-name"
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
            <label htmlFor="reg-surname" className="block text-sm font-medium text-neutral-700">
              {t('surname')} *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input
                id="reg-surname"
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
          <label htmlFor="reg-email" className="block text-sm font-medium text-neutral-700">
            {t('email')} *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input
              id="reg-email"
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
          <label htmlFor="reg-phone" className="block text-sm font-medium text-neutral-700">
            {t('phone')} *
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input
              id="reg-phone"
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
          <label htmlFor="reg-message" className="block text-sm font-medium text-neutral-700">
            {t('message')}
          </label>
          <div className="relative">
            <MessageCircle className="absolute left-3 top-4 h-4 w-4 text-neutral-400" />
            <textarea
              id="reg-message"
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

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-500 px-6 py-4 font-semibold text-white shadow-lg transition hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 disabled:opacity-70"
          >
            {status === 'sending' ? (
              t('sending')
            ) : (
              <>
                <Send className="h-5 w-5" />
                {t('submit')}
              </>
            )}
          </button>
          <Link
            href={`/${locale}/coaching-school/calendar`}
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('backToCalendar')}
          </Link>
        </div>
      </form>
    </div>
  );
}
