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
  BookOpen,
  Compass,
  Zap,
  MessageSquare,
  Brain,
  Clock,
  ClipboardList,
  UserCog,
  Target,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';
import { coachingSlugs, trainingSlugs } from '@/lib/program-slugs';

// Icon mapping for coaching area items (8)
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

// Icon mapping for training area items (10)
const trainingIcons = [
  BookOpen,        // Liderin Seyir Defteri
  Compass,         // Koçvari Liderliğe Yolculuk
  Users,           // Yüksek Performanslı Takım Pusulası
  Zap,             // Motivasyon Kodları
  MessageSquare,   // İletişimin DNA'sı
  Brain,           // Kurumsal Duygusal Zekâ
  Clock,           // Zaman Mimarı
  ClipboardList,   // Performans Görüşmelerinde Ustalık
  UserCog,         // Yetkinlik Gelişim Odaklı Mentorluk
  Target,          // Geribildirim Alma ve Vermede Ustalaşmak
];

interface CardItem {
  title: string;
  description: string;
  href: string;
  icon: typeof Crown;
}

export default function CoachingFocus() {
  const t = useTranslations('coaching');
  const tTeam = useTranslations('teamCoaching');
  const locale = useLocale();

  const coachingItems = t.raw('coachingArea.items') as string[];
  const coachingDescriptions = t.raw('coachingArea.descriptions') as string[];
  const trainingItems = t.raw('trainingArea.items') as string[];
  const trainingDescriptions = t.raw('trainingArea.descriptions') as string[];

  // Build flat coaching cards with special card at position 4
  const coachingCards: CardItem[] = [];
  coachingItems.forEach((item, index) => {
    if (index === 4) {
      coachingCards.push({
        title: tTeam('title'),
        description: tTeam('subtitle'),
        href: `/${locale}/coaching/team-coaching`,
        icon: GraduationCap,
      });
    }
    coachingCards.push({
      title: item,
      description: coachingDescriptions[index] || '',
      href: `/${locale}/coaching/${coachingSlugs[index]}`,
      icon: coachingIcons[index] || Crown,
    });
  });

  // Build flat training cards
  const trainingCards: CardItem[] = trainingItems.map((item, index) => ({
    title: item,
    description: trainingDescriptions[index] || '',
    href: `/${locale}/training/${trainingSlugs[index]}`,
    icon: trainingIcons[index] || Target,
  }));

  const renderCard = (card: CardItem, i: number) => {
    const Icon = card.icon;
    return (
      <motion.div
        key={`${card.href}-${i}`}
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
  };

  return (
    <section id="coaching" className="py-24 md:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
            {t('title')}
          </h2>
        </motion.div>

        {/* Coaching Area Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-600 mb-8 text-center">
            {t('coachingArea.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coachingCards.map((card, i) => renderCard(card, i))}
          </div>
        </motion.div>

        {/* Training Area Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-600 mb-8 text-center">
            {t('trainingArea.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingCards.map((card, i) => renderCard(card, i))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
