'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function LangSetter() {
  const pathname = usePathname();

  useEffect(() => {
    // Extract locale from pathname
    const locale = pathname.split('/')[1] || 'tr';
    if (document.documentElement) {
      document.documentElement.lang = locale === 'en' ? 'en' : 'tr';
    }
  }, [pathname]);

  return null;
}
