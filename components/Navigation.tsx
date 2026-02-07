'use client';

import { useState, useEffect, useMemo } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Navigation() {
  const t = useTranslations('nav');
  const tCoaching = useTranslations('coaching');
  const tPrograms = useTranslations('programs');
  const tFAQ = useTranslations('faq');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);
  const [isCoachingDropdownOpen, setIsCoachingDropdownOpen] = useState(false);
  const [isCoachingSchoolDropdownOpen, setIsCoachingSchoolDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

  // Route context
  const isHomePage = pathname === `/${locale}` || pathname === '/';
  const isNonHomePage = !isHomePage;

  useEffect(() => {
    // On non-home pages (contact, blog, legal, etc.), always use dark text (light background)
    if (isNonHomePage) {
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
  }, [isNonHomePage]);

  const toggleLanguage = () => {
    const newLocale = locale === 'tr' ? 'en' : 'tr';
    
    // Extract path without locale prefix
    // pathname can be: '/en/training', '/tr/training', '/training' (default locale), '/en', '/tr', '/'
    let pathWithoutLocale = pathname;
    
    // Remove current locale prefix if it exists
    if (pathname.startsWith(`/${locale}/`)) {
      pathWithoutLocale = pathname.slice(`/${locale}`.length);
    } else if (pathname === `/${locale}`) {
      pathWithoutLocale = '/';
    }
    // If pathname doesn't start with locale, it might be default locale (tr) without prefix
    // or it's already without locale prefix
    
    // Ensure path starts with /
    if (!pathWithoutLocale.startsWith('/')) {
      pathWithoutLocale = `/${pathWithoutLocale}`;
    }
    
    // Build new path with new locale
    const newPath = pathWithoutLocale === '/' ? `/${newLocale}` : `/${newLocale}${pathWithoutLocale}`;
    
    router.push(newPath);
  };

  const navItems: Array<{ key: string; href: string; hasDropdown?: boolean; comingSoon?: boolean }> = [
    { key: 'about', href: '#about' },
    { key: 'coachingFocus', href: '#coaching', hasDropdown: true },
    { key: 'coachingSchool', href: '#', hasDropdown: true },
    { key: 'resources', href: '#', hasDropdown: true },
    { key: 'references', href: `/${locale}/references` },
    { key: 'contact', href: `/${locale}/contact` },
  ];

  const coachingDropdownItems = useMemo(() => {
    const base = `/${locale}`;
    return [
      { key: 'coachingPrograms', href: `${base}/coaching`, label: tPrograms('coachingPrograms') },
      { key: 'trainingPrograms', href: `${base}/training`, label: tPrograms('trainingPrograms') },
      { key: 'workshopPrograms', href: `${base}/workshop`, label: tPrograms('workshopPrograms'), comingSoon: true },
      { key: 'keynoteSpeeches', href: `${base}/keynote`, label: tPrograms('keynoteSpeeches'), comingSoon: true },
    ];
  }, [locale, tPrograms]);

  const coachingSchoolDropdownItems = useMemo(() => {
    const base = `/${locale}/coaching-school`;
    return [
      { key: 'level1', href: `${base}/level-1`, label: t('level1'), comingSoon: true },
      { key: 'level2', href: `${base}/level-2`, label: t('level2'), comingSoon: true },
      { key: 'level3', href: `${base}/level-3`, label: t('level3'), comingSoon: true },
    ];
  }, [locale, t]);

  const resourcesDropdownItems = useMemo(() => [
    { 
      key: 'blog', 
      href: `/${locale}/blog`,
      label: t('blog')
    },
    { 
      key: 'faq', 
      href: `/${locale}/faq`,
      label: tFAQ('title')
    },
  ], [locale, t, tFAQ]);

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
        smoothScrollTo(href);
      } else {
        router.push(`/${locale}${href}`);
      }
    } else {
      router.push(href);
    }
    setIsOpen(false);
  };

  // Determine text color based on section (for header + desktop nav)
  const isLightBackground = !isHeroSection || scrolled;
  const textColor = isLightBackground 
    ? 'text-neutral-700 hover:text-primary-500' 
    : 'text-white hover:text-primary-200';
  const logoTextColor = isLightBackground ? 'text-neutral-800' : 'text-white';
  const hamburgerColor = isLightBackground ? 'bg-neutral-700' : 'bg-white';
  // Mobile menu panel is always white, so always use dark text inside it
  const mobileMenuTextColor = 'text-neutral-700 hover:text-primary-500';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isNonHomePage || scrolled || !isHeroSection
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href={`/${locale}`} className="flex items-center">
            <div className="relative w-12 h-12">
              <Image
                src="/images/core-logo.png"
                alt="Core Coaching"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              if (item.hasDropdown) {
                const isOpen = item.key === 'coachingFocus' ? isCoachingDropdownOpen : item.key === 'coachingSchool' ? isCoachingSchoolDropdownOpen : isResourcesDropdownOpen;
                const setIsOpen = item.key === 'coachingFocus' ? setIsCoachingDropdownOpen : item.key === 'coachingSchool' ? setIsCoachingSchoolDropdownOpen : setIsResourcesDropdownOpen;
                const dropdownItems = item.key === 'coachingFocus' ? coachingDropdownItems : item.key === 'coachingSchool' ? coachingSchoolDropdownItems : resourcesDropdownItems;
                
                return (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                  >
                    <button
                      className={`${textColor} transition-colors text-sm font-medium cursor-pointer flex items-center gap-1.5`}
                    >
                      {item.key === 'coachingSchool' && <GraduationCap className="w-4 h-4 shrink-0" />}
                      {t(item.key)}
                      <svg
                        className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-neutral-200 py-2 z-50"
                        >
                          {dropdownItems.map((dropdownItem) =>
                            (dropdownItem as { comingSoon?: boolean }).comingSoon ? (
                              <div
                                key={dropdownItem.key}
                                className="flex items-center justify-between px-4 py-3 text-sm text-neutral-400 cursor-not-allowed"
                              >
                                <span>{dropdownItem.label}</span>
                                <span className="text-xs bg-neutral-200 text-neutral-500 px-2 py-0.5 rounded">
                                  {t('comingSoon')}
                                </span>
                              </div>
                            ) : (
                              <button
                                key={dropdownItem.key}
                                onClick={() => {
                                  router.push(dropdownItem.href);
                                  setIsOpen(false);
                                }}
                                className="w-full text-left block px-4 py-3 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                              >
                                {dropdownItem.label}
                              </button>
                            )
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
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
              );
            })}
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
              {navItems.map((item) => {
                if (item.hasDropdown) {
                  const isDropdownOpen = item.key === 'coachingFocus' ? isCoachingDropdownOpen : item.key === 'coachingSchool' ? isCoachingSchoolDropdownOpen : isResourcesDropdownOpen;
                  const setIsDropdownOpen = item.key === 'coachingFocus' ? setIsCoachingDropdownOpen : item.key === 'coachingSchool' ? setIsCoachingSchoolDropdownOpen : setIsResourcesDropdownOpen;
                  const dropdownItems = item.key === 'coachingFocus' ? coachingDropdownItems : item.key === 'coachingSchool' ? coachingSchoolDropdownItems : resourcesDropdownItems;
                  
                  return (
                    <div key={item.key} className="space-y-2">
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full text-left ${mobileMenuTextColor} transition-colors text-base font-medium py-2 cursor-pointer flex items-center justify-between`}
                      >
                        <span className="flex items-center gap-2">
                          {item.key === 'coachingSchool' && <GraduationCap className="w-5 h-5 flex-shrink-0" />}
                          {t(item.key)}
                        </span>
                        <svg
                          className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-2 border-l-2 border-neutral-200"
                          >
                            {dropdownItems.map((dropdownItem) =>
                              (dropdownItem as { comingSoon?: boolean }).comingSoon ? (
                                <div
                                  key={dropdownItem.key}
                                  className="flex items-center justify-between py-2 text-sm text-neutral-400 cursor-not-allowed"
                                >
                                  <span>{dropdownItem.label}</span>
                                  <span className="text-xs bg-neutral-200 text-neutral-500 px-2 py-0.5 rounded">
                                    {t('comingSoon')}
                                  </span>
                                </div>
                              ) : (
                                <button
                                  key={dropdownItem.key}
                                  onClick={() => {
                                    router.push(dropdownItem.href);
                                    setIsOpen(false);
                                    setIsDropdownOpen(false);
                                  }}
                                  className="w-full text-left block text-sm text-neutral-600 hover:text-primary-600 transition-colors py-1"
                                >
                                  {dropdownItem.label}
                                </button>
                              )
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
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
                    className={`block ${mobileMenuTextColor} transition-colors text-base font-medium py-2 cursor-pointer`}
                  >
                    {t(item.key)}
                  </a>
                );
              })}
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
