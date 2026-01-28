'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const router = useRouter();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => setVideoLoaded(true);
      const handleError = () => setVideoError(true);
      
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      
      // Try to play the video
      video.play().catch(() => setVideoError(true));

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  // Ultra-smooth scroll using native behavior with offset
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

  const scrollToContent = () => {
    smoothScrollTo('#about');
  };

  const goToContactPage = () => {
    router.push(`/${locale}/contact`);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{ display: videoError ? 'none' : 'block' }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback Gradient Background (shown when video fails or doesn't exist) */}
        {videoError && (
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700"></div>
        )}
        
        {/* Dark Overlay - lighter if no video */}
        <div className={`absolute inset-0 ${videoLoaded && !videoError ? 'bg-black/50' : 'bg-black/30'}`}></div>
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: 'easeOut' }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight drop-shadow-lg"
          >
            {t('title')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.2, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1.2, ease: 'easeOut' }}
            className="pt-4"
          >
            <motion.a
              href={`/${locale}/contact`}
              onClick={(e) => {
                e.preventDefault();
                goToContactPage();
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-4 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            >
              {t('cta')}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Down Button - positioned outside content div to avoid overlap */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.2, ease: 'easeOut' }}
        onClick={scrollToContent}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 group cursor-pointer"
        aria-label={t('scroll')}
      >
        <span className="text-white/70 group-hover:text-white text-sm font-medium transition-colors">
          {t('scroll')}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="bg-white/20 backdrop-blur-sm rounded-full p-2 group-hover:bg-white/30 transition-colors"
        >
          <ChevronDown className="w-5 h-5 text-white" />
        </motion.div>
      </motion.button>
    </section>
  );
}
