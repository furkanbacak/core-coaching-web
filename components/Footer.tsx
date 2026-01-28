'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image
                src="/images/core-logo.png"
                alt="Core Coaching"
                fill
                className="object-contain opacity-80"
              />
            </div>
            <span className="text-lg font-semibold text-white">CORE</span>
          </div>
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Core Coaching & Training Solutions. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
