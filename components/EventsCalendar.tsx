'use client';

import { useMemo, useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { CalendarEvent } from '@/lib/events';
import { getEventsByDate } from '@/lib/events';

const WEEKDAYS_TR = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
const WEEKDAYS_EN = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const MONTHS_TR = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

type Props = {
  events: CalendarEvent[];
  locale: string;
  translations: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    findEvents: string;
    month: string;
    events: string;
    thisMonth: string;
    course: string;
    webinar: string;
    masterclass: string;
    noEvents: string;
    modalClose: string;
    modalDate: string;
    modalTime: string;
    modalRegister: string;
    modalRegisterHint: string;
  };
};

function getDaysInMonth(year: number, month: number): { date: Date; dateStr: string; isCurrentMonth: boolean }[] {
  const first = new Date(year, month - 1, 1);
  const last = new Date(year, month, 0);
  const startWeekday = first.getDay();
  const startOffset = startWeekday === 0 ? 6 : startWeekday - 1;
  const daysInMonth = last.getDate();
  const prevMonth = month === 1 ? 12 : month - 1;
  const prevYear = month === 1 ? year - 1 : year;
  const prevLast = new Date(prevYear, prevMonth, 0).getDate();
  const cells: { date: Date; dateStr: string; isCurrentMonth: boolean }[] = [];
  for (let i = 0; i < startOffset; i++) {
    const d = prevLast - startOffset + i + 1;
    const date = new Date(prevYear, prevMonth - 1, d);
    cells.push({
      date,
      dateStr: `${prevYear}-${String(prevMonth).padStart(2, '0')}-${String(d).padStart(2, '0')}`,
      isCurrentMonth: false,
    });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month - 1, d);
    cells.push({
      date,
      dateStr: `${year}-${String(month).padStart(2, '0')}-${String(d).padStart(2, '0')}`,
      isCurrentMonth: true,
    });
  }
  const remaining = 42 - cells.length;
  for (let i = 0; i < remaining; i++) {
    const d = i + 1;
    const nextMonth = month === 12 ? 1 : month + 1;
    const nextYear = month === 12 ? year + 1 : year;
    const date = new Date(nextYear, nextMonth - 1, d);
    cells.push({
      date,
      dateStr: `${nextYear}-${String(nextMonth).padStart(2, '0')}-${String(d).padStart(2, '0')}`,
      isCurrentMonth: false,
    });
  }
  return cells;
}

function formatDateStr(dateStr: string, isTr: boolean): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  const monthNames = isTr ? MONTHS_TR : MONTHS_EN;
  return `${d} ${monthNames[m - 1]} ${y}`;
}

export default function EventsCalendar({ events, locale, translations }: Props) {
  const today = useMemo(() => new Date(), []);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth() + 1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  const closeModal = useCallback(() => setSelectedEvent(null), []);
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    },
    [closeModal]
  );
  useEffect(() => {
    if (selectedEvent) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedEvent, handleKeyDown]);

  const isTr = locale === 'tr';
  const weekdays = isTr ? WEEKDAYS_TR : WEEKDAYS_EN;
  const monthNames = isTr ? MONTHS_TR : MONTHS_EN;

  const days = useMemo(
    () => getDaysInMonth(viewYear, viewMonth),
    [viewYear, viewMonth]
  );

  const filteredEvents = useMemo(() => {
    if (!searchQuery.trim()) return events;
    const q = searchQuery.toLowerCase();
    return events.filter(
      (e) =>
        (isTr ? e.titleTr : e.titleEn).toLowerCase().includes(q) ||
        e.date.includes(q)
    );
  }, [events, searchQuery, isTr]);

  const eventsInViewMonth = useMemo(() => {
    return filteredEvents.filter((e) => {
      const [y, m] = e.date.split('-').map(Number);
      return y === viewYear && m === viewMonth;
    });
  }, [filteredEvents, viewYear, viewMonth]);

  const goPrev = () => {
    if (viewMonth === 1) {
      setViewMonth(12);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };
  const goNext = () => {
    if (viewMonth === 12) {
      setViewMonth(1);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };
  const goThisMonth = () => {
    setViewYear(today.getFullYear());
    setViewMonth(today.getMonth() + 1);
  };

  const typeLabel = (type: string) => {
    if (type === 'course') return translations.course;
    if (type === 'webinar') return translations.webinar;
    return translations.masterclass;
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={translations.searchPlaceholder}
            className="w-full rounded-xl border-2 border-neutral-200 bg-white py-3 pl-11 pr-4 text-neutral-900 placeholder:text-neutral-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
          />
          <svg
            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <button
          type="button"
          className="rounded-xl bg-primary-500 px-6 py-3 font-medium text-white shadow-md transition hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
        >
          {translations.findEvents}
        </button>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-neutral-900">{translations.events}</h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            className="rounded-lg p-2 text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900"
            aria-label="Previous month"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goThisMonth}
            className="rounded-lg px-3 py-2 text-sm font-medium text-primary-600 transition hover:bg-primary-50"
          >
            {translations.thisMonth}
          </button>
          <button
            type="button"
            onClick={goNext}
            className="rounded-lg p-2 text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900"
            aria-label="Next month"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <span className="min-w-[140px] text-center font-semibold text-neutral-900">
            {monthNames[viewMonth - 1]} {viewYear}
          </span>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
        <div className="grid grid-cols-7 border-b border-neutral-200 bg-neutral-50">
          {weekdays.map((day) => (
            <div
              key={day}
              className="border-r border-neutral-200 py-3 text-center text-xs font-semibold uppercase tracking-wide text-neutral-600 last:border-r-0"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {days.map((cell) => {
            const dayEvents = getEventsByDate(eventsInViewMonth, cell.dateStr);
            const isToday =
              cell.isCurrentMonth &&
              cell.date.getDate() === today.getDate() &&
              cell.date.getMonth() === today.getMonth() &&
              cell.date.getFullYear() === today.getFullYear();
            return (
              <div
                key={cell.dateStr}
                className={`min-h-[100px] border-r border-b border-neutral-100 p-2 last:border-r-0 ${
                  cell.isCurrentMonth ? 'bg-white' : 'bg-neutral-50/50'
                }`}
              >
                <div
                  className={`mb-1 text-sm font-medium ${
                    cell.isCurrentMonth ? 'text-neutral-900' : 'text-neutral-400'
                  } ${isToday ? 'flex h-7 w-7 items-center justify-center rounded-full bg-primary-500 text-white' : ''}`}
                >
                  {cell.date.getDate()}
                </div>
                <div className="space-y-1.5">
                  {dayEvents.length === 0 ? (
                    <p className="text-xs text-neutral-400">{translations.noEvents}</p>
                  ) : (
                    dayEvents.slice(0, 3).map((evt) => (
                      <button
                        key={evt.id}
                        type="button"
                        onClick={() => setSelectedEvent(evt)}
                        className="w-full rounded-lg border-l-2 border-primary-400 bg-primary-50/80 px-2 py-1.5 text-left text-xs transition hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-300"
                      >
                        <div className="font-medium text-neutral-900 line-clamp-2">
                          {isTr ? evt.titleTr : evt.titleEn}
                        </div>
                        <div className="mt-0.5 text-neutral-600">
                          {evt.timeStart} – {evt.timeEnd}
                        </div>
                        <div className="text-primary-600">{typeLabel(evt.type)}</div>
                      </button>
                    ))
                  )}
                  {dayEvents.length > 3 && (
                    <p className="text-xs text-neutral-500">+{dayEvents.length - 3}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Etkinlik detay modal */}
      <AnimatePresence>
        {selectedEvent && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={closeModal}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed inset-4 z-50 flex items-center justify-center pointer-events-none md:inset-8"
            >
              <div
                className="relative w-full max-w-lg max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedEvent.image && (
                  <div className="relative h-48 w-full bg-neutral-100 shrink-0">
                    <Image
                      src={selectedEvent.image}
                      alt={isTr ? selectedEvent.titleTr : selectedEvent.titleEn}
                      fill
                      className="object-cover"
                      sizes="(max-width: 512px) 100vw, 32rem"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6 overflow-y-auto text-left">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-serif font-bold text-neutral-900 pr-8 text-left">
                      {isTr ? selectedEvent.titleTr : selectedEvent.titleEn}
                    </h3>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="shrink-0 rounded-full p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 transition"
                      aria-label={translations.modalClose}
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-neutral-600 text-left">
                    <span>
                      <strong className="text-neutral-700">{translations.modalDate}:</strong>{' '}
                      {formatDateStr(selectedEvent.date, isTr)}
                    </span>
                    <span>
                      <strong className="text-neutral-700">{translations.modalTime}:</strong>{' '}
                      {selectedEvent.timeStart} – {selectedEvent.timeEnd}
                    </span>
                    <span className="rounded-full bg-primary-100 px-2.5 py-0.5 font-medium text-primary-700">
                      {typeLabel(selectedEvent.type)}
                    </span>
                  </div>
                  {(isTr ? selectedEvent.descriptionTr : selectedEvent.descriptionEn) && (
                    <p className="mt-4 text-neutral-700 leading-relaxed text-left">
                      {isTr ? selectedEvent.descriptionTr : selectedEvent.descriptionEn}
                    </p>
                  )}
                  <div className="mt-6 flex flex-col gap-2 text-left">
                    <p className="text-sm text-neutral-500">{translations.modalRegisterHint}</p>
                    <Link
                      href={
                        selectedEvent.link
                          ? selectedEvent.link
                          : `/${locale}/coaching-school/register?event=${encodeURIComponent(isTr ? selectedEvent.titleTr : selectedEvent.titleEn)}&date=${encodeURIComponent(selectedEvent.date)}&time=${encodeURIComponent(selectedEvent.timeStart + '-' + selectedEvent.timeEnd)}`
                      }
                      className="inline-flex justify-center rounded-xl bg-primary-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
                    >
                      {translations.modalRegister}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
