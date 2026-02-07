'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
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
} from 'lucide-react';

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

const getIcon = (index: number, category: 'coaching' | 'training') => {
  const icons = category === 'coaching' ? coachingIcons : trainingIcons;
  return icons[index] || Target;
};

export default function CoachingFocus() {
  const t = useTranslations('coaching');

  const coachingItems = t.raw('coachingArea.items') as string[];
  const trainingItems = t.raw('trainingArea.items') as string[];

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
            {coachingItems.map((item: string, index: number) => {
              const Icon = getIcon(index, 'coaching');
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.8, ease: 'easeOut' }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-100 hover:border-primary-200 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 group-hover:bg-primary-100 flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <p className="text-base font-medium text-neutral-700 leading-relaxed group-hover:text-neutral-900 transition-colors">
                      {item}
                    </p>
                  </div>
                </motion.div>
              );
            })}
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
            {trainingItems.map((item: string, index: number) => {
              const Icon = getIcon(index, 'training');
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03, duration: 0.8, ease: 'easeOut' }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-100 hover:border-primary-200 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 group-hover:bg-primary-100 flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <p className="text-base font-medium text-neutral-700 leading-relaxed group-hover:text-neutral-900 transition-colors">
                      {item}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
