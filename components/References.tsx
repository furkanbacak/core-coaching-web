'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Reference {
  name: string;
  logo?: string;
}

const references: Reference[] = [
  { name: 'MERCEDES BENZ OTOMOTİV (MBO), MERCEDES BENZ FİNANSAL HİZMETLER (MBFH)', logo: 'mercedes-benz.png' },
  { name: 'KOÇZER', logo: 'koczer.png' },
  { name: 'NİSSAN', logo: 'nissan.png' },
  { name: 'VOLVO', logo: 'volvo.png' },
  { name: 'SONY', logo: 'sony.png' },
  { name: 'ROCHE', logo: 'roche.png' },
  { name: 'ENTEK', logo: 'entek.png' },
  { name: 'ISS', logo: 'iss.png' },
  { name: 'OMRON', logo: 'omron.png' },
  { name: 'IQVIA', logo: 'iqvia.png' },
  { name: 'BOYNER', logo: 'boyner.png' },
  { name: 'MERCK İLAÇ', logo: 'merck.png' },
  { name: 'MICHELIN', logo: 'michelin.png' },
  { name: 'NETAŞ', logo: 'netas.png' },
  { name: 'VAILLANT', logo: 'vaillant.png' },
  { name: 'YÖRSAN', logo: 'yorsan.png' },
  { name: 'HAYAT KİMYA', logo: 'hayat-kimya.png' },
  { name: 'KASTAMONU ENTEGRE', logo: 'kastamonu.png' },
  { name: 'HİTİT BİLGİSAYAR', logo: 'hitit.png' },
  { name: 'ASSECO SEE', logo: 'asseco.png' },
  { name: 'VESTEL', logo: 'vestel.png' },
  { name: 'MEDİPOL HASTANE', logo: 'medipol.png' },
  { name: 'BİRUNİ LABORATUVAR', logo: 'biruni.png' },
  { name: 'CENGİZ MAKİNA', logo: 'cengiz.png' },
  { name: 'ATASUN OPTİK', logo: 'atasun.png' },
  { name: 'HD İSKENDER', logo: 'hd-iskender.png' },
  { name: 'NURUS', logo: 'nurus.png' },
  { name: 'ENERYA', logo: 'enerya.png' },
  { name: 'YEŞİM TEKSTİL', logo: 'yesim.png' },
  { name: 'TJK', logo: 'tjk.png' },
  { name: 'ABC DETERJAN', logo: 'abc.png' },
  { name: 'TURKUAZ YACHTING', logo: 'turkuaz.png' },
  { name: 'ABALIOĞLU HOLDİNG', logo: 'abalioglu.png' },
  { name: 'YAŞAR FACTORİNG', logo: 'yasar.png' },
  { name: 'ENERJİSA', logo: 'enerjisa.png' },
];

// Duplicate references for infinite scroll effect
const duplicatedReferences = [...references, ...references, ...references];

export default function References() {
  const t = useTranslations('references');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemsPerView = 5; // Number of logos visible at once

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        // Reset to start when we reach the end of original array
        return next >= references.length ? 0 : next;
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + itemsPerView) % references.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - itemsPerView + references.length) % references.length);
  };

  // Get visible items based on current index
  const getVisibleItems = () => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % references.length;
      visible.push({ ...references[index], originalIndex: index });
    }
    return visible;
  };

  return (
    <section 
      id="references" 
      className="py-24 md:py-32 bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
            {t('title')}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all border border-neutral-200 hover:border-primary-500 hover:bg-primary-50 group"
            aria-label="Previous logos"
          >
            <ChevronLeft className="w-6 h-6 text-neutral-600 group-hover:text-primary-600 transition-colors" />
          </button>

          {/* Carousel Container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-hidden"
          >
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8"
            >
              {getVisibleItems().map((ref, index) => (
                <div
                  key={`${ref.originalIndex}-${index}`}
                  className="bg-white rounded-lg p-6 md:p-8 flex items-center justify-center hover:bg-neutral-50 transition-all border border-neutral-200 hover:border-primary-300 hover:shadow-md group aspect-square"
                >
                  {ref.logo ? (
                    <div className="relative w-full h-16 md:h-20 flex items-center justify-center">
                      <Image
                        src={`/images/references/${ref.logo}`}
                        alt={ref.name}
                        fill
                        className="object-contain opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        onError={(e) => {
                          // Hide image if it fails to load, show text instead
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  ) : (
                    <p className="text-xs md:text-sm font-medium text-neutral-600 text-center leading-tight">
                      {ref.name}
                    </p>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all border border-neutral-200 hover:border-primary-500 hover:bg-primary-50 group"
            aria-label="Next logos"
          >
            <ChevronRight className="w-6 h-6 text-neutral-600 group-hover:text-primary-600 transition-colors" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(references.length / itemsPerView) }).map((_, index) => {
            const pageIndex = index * itemsPerView;
            const isActive = currentIndex >= pageIndex && currentIndex < pageIndex + itemsPerView;
            return (
              <button
                key={index}
                onClick={() => setCurrentIndex(pageIndex)}
                className={`w-2 h-2 rounded-full transition-all ${
                  isActive
                    ? 'bg-primary-500 w-8'
                    : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
