'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  BookOpen,
  Compass,
  Users,
  Zap,
  MessageSquare,
  Brain,
  Clock,
  ClipboardList,
  UserCog,
  Target,
  ArrowRight,
} from 'lucide-react';
import { trainingSlugs } from '@/lib/program-slugs';

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

export default function TrainingAreaList() {
  const t = useTranslations('coaching');
  const locale = useLocale();
  const trainingItems = t.raw('trainingArea.items') as string[];
  const descriptions = t.raw('trainingArea.descriptions') as string[];

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-neutral-200/50 border border-neutral-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainingItems.map((item: string, index: number) => {
          const Icon = trainingIcons[index] || Target;
          const slug = trainingSlugs[index];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03, duration: 0.8, ease: 'easeOut' }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <Link
                href={`/${locale}/training/${slug}`}
                className="block h-full bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-100 hover:border-primary-300 hover:bg-gradient-to-br hover:from-primary-50 hover:to-white group"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-neutral-50 group-hover:bg-primary-500 flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-medium text-neutral-700 leading-relaxed group-hover:text-primary-700 transition-colors text-left">
                      {item}
                    </p>
                    {descriptions[index] && (
                      <p className="text-xs text-neutral-400 mt-1 leading-relaxed text-left line-clamp-2 group-hover:text-primary-500/70 transition-colors">
                        {descriptions[index]}
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
