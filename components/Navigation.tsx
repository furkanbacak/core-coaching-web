'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);

  // Check if we're on blog page or home page
  const isBlogPage = pathname.includes('/blog');
  const isHomePage = pathname === `/${locale}` || pathname === '/';

  useEffect(() => {
    // On blog pages, always use dark text (light background)
    if (isBlogPage) {
      setIsHeroSection(false);
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);
      
      // Check if we're in the hero section (first 80vh)
      const heroHeight = window.innerHeight;
      setIsHeroSection(scrollY < heroHeight * 0.8);
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isBlogPage]);

  const toggleLanguage = () => {
    const newLocale = locale === 'tr' ? 'en' : 'tr';
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  const navItems = [
    { key: 'about', href: '#about' },
    { key: 'coachingFocus', href: '#coaching' },
    { key: 'references', href: '#references' },
    { key: 'contact', href: '#contact' },
    { key: 'blog', href: `/${locale}/blog` },
  ];

  // Ultra-smooth scroll using native behavior
  const smoothScrollTo = (targetId: string) => {
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    const navHeight = 80;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navHeight;

    // Use native smooth scroll for best performance
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      // Check if we're on the home page
      const isHomePage = pathname === `/${locale}` || pathname === '/';
      
      if (isHomePage) {
        // If on home page, use smooth scroll
        smoothScrollTo(href);
      } else {
        // If not on home page, navigate to home page with hash
        router.push(`/${locale}${href}`);
      }
    }
    setIsOpen(false);
  };

  // Determine text color based on section
  const isLightBackground = !isHeroSection || scrolled;
  const textColor = isLightBackground 
    ? 'text-neutral-700 hover:text-primary-500' 
    : 'text-white hover:text-primary-200';
  const logoTextColor = isLightBackground ? 'text-neutral-800' : 'text-white';
  const hamburgerColor = isLightBackground ? 'bg-neutral-700' : 'bg-white';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isBlogPage || scrolled || !isHeroSection
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href={`/${locale}`} className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src="/images/core-logo.png"
                alt="Core Coaching"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className={`text-xl font-semibold transition-colors ${logoTextColor}`}>CORE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href.startsWith('#') ? `/${locale}${item.href}` : item.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.href.startsWith('#')) {
                    handleNavClick(item.href);
                  } else {
                    router.push(item.href);
                  }
                }}
                className={`${textColor} transition-colors text-sm font-medium cursor-pointer`}
              >
                {t(item.key)}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="relative px-4 py-2 text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 transition-all duration-200 rounded-lg shadow-sm hover:shadow-md transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 group min-w-[70px]"
              aria-label={`Switch to ${locale === 'tr' ? 'English' : 'Türkçe'}`}
            >
              <svg 
                className="w-4 h-4 transition-transform group-hover:scale-110" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span>{locale === 'tr' ? 'EN' : 'TR'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 ${isLightBackground ? 'text-neutral-700' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className={`block h-0.5 w-6 ${hamburgerColor} transition-all`}
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`block h-0.5 w-6 ${hamburgerColor} transition-all`}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className={`block h-0.5 w-6 ${hamburgerColor} transition-all`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-neutral-200"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href.startsWith('#') ? `/${locale}${item.href}` : item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.href.startsWith('#')) {
                      handleNavClick(item.href);
                    } else {
                      router.push(item.href);
                    }
                  }}
                  className={`block ${textColor} transition-colors text-base font-medium py-2 cursor-pointer`}
                >
                  {t(item.key)}
                </a>
              ))}
              <button
                onClick={toggleLanguage}
                className="w-full text-left px-4 py-3 text-base font-semibold text-white bg-primary-500 hover:bg-primary-600 transition-all duration-200 rounded-lg shadow-sm mt-2 flex items-center space-x-2"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span>{locale === 'tr' ? 'English' : 'Türkçe'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
