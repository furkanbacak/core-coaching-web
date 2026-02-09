'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Crown,
  Users,
  Briefcase,
  TrendingUp,
  Activity,
  Star,
  ClipboardCheck,
  Award,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';
import { coachingSlugs } from '@/lib/program-slugs';

const coachingIcons = [
  Crown,           // C Level Lider Koçluğu
  Users,           // Takım Koçluğu
  Briefcase,       // Yönetici / Executive Koçluğu
  TrendingUp,      // Kariyer Koçluğu
  Activity,        // Yetkinlik Gelişim Koçluğu
  Star,            // Yükselen Yıldızlara Koçluk
  ClipboardCheck,  // Assesment Hazırlık Koçluğu
  Award,           // Unvanlanma Koçluğu/Mentorluğu
];

interface CardItem {
  type: 'coaching' | 'special';
  title: string;
  description: string;
  href: string;
  icon: typeof Crown;
}

export default function CoachingAreaList() {
  const t = useTranslations('coaching');
  const tTeam = useTranslations('teamCoaching');
  const locale = useLocale();
  const coachingItems = t.raw('coachingArea.items') as string[];
  const descriptions = t.raw('coachingArea.descriptions') as string[];

  // Build flat card array with special card inserted at position 4
  const cards: CardItem[] = [];
  coachingItems.forEach((item, index) => {
    if (index === 4) {
      cards.push({
        type: 'special',
        title: tTeam('title'),
        description: tTeam('subtitle'),
        href: `/${locale}/coaching/team-coaching`,
        icon: GraduationCap,
      });
    }
    cards.push({
      type: 'coaching',
      title: item,
      description: descriptions[index] || '',
      href: `/${locale}/coaching/${coachingSlugs[index]}`,
      icon: coachingIcons[index] || Crown,
    });
  });

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-neutral-200/50 border border-neutral-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={`${card.type}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.8, ease: 'easeOut' }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Link
                href={card.href}
                className="flex h-full bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-100 hover:border-primary-300 hover:bg-gradient-to-br hover:from-primary-50 hover:to-white group"
              >
                <div className="flex items-center space-x-4 w-full">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-neutral-50 group-hover:bg-primary-500 flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-medium text-neutral-700 leading-relaxed group-hover:text-primary-700 transition-colors text-left">
                      {card.title}
                    </p>
                    {card.description && (
                      <p className="text-xs text-neutral-400 mt-1 leading-relaxed text-left line-clamp-2 group-hover:text-primary-500/70 transition-colors">
                        {card.description}
                      </p>
                    )}
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
