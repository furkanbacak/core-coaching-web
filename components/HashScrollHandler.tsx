'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Only handle hash scrolling on the home page
    const isHomePage = pathname === '/' || pathname.match(/^\/[a-z]{2}$/);
    
    if (isHomePage && window.location.hash) {
      // Wait for the page to fully load
      setTimeout(() => {
        const hash = window.location.hash;
        const element = document.querySelector(hash);
        if (element) {
          // Account for fixed navigation height
          const navHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  }, [pathname]);

  return null;
}
