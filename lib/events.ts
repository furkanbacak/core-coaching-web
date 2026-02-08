export type EventType = 'course' | 'webinar' | 'masterclass';

export interface CalendarEvent {
  id: string;
  date: string; // YYYY-MM-DD
  timeStart: string;
  timeEnd: string;
  titleTr: string;
  titleEn: string;
  type: EventType;
  link?: string;
  /** Görsel yolu, örn. /images/events/webinar-1.jpg */
  image?: string;
  descriptionTr?: string;
  descriptionEn?: string;
}

export function getEventsByMonth(events: CalendarEvent[], year: number, month: number): CalendarEvent[] {
  return events.filter((e) => {
    const [y, m] = e.date.split('-').map(Number);
    return y === year && m === month;
  });
}

export function getEventsByDate(events: CalendarEvent[], dateStr: string): CalendarEvent[] {
  return events.filter((e) => e.date === dateStr).sort((a, b) => a.timeStart.localeCompare(b.timeStart));
}

