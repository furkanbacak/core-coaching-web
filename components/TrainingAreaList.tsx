'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
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
} from 'lucide-react';

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
  const trainingItems = t.raw('trainingArea.items') as string[];

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-neutral-200/50 border border-neutral-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainingItems.map((item: string, index: number) => {
          const Icon = trainingIcons[index] || Target;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03, duration: 0.8, ease: 'easeOut' }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-neutral-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-100 hover:border-primary-200 group"
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
    </div>
  );
}
