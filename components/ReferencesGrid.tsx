'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Reference {
  key: string;
  logo?: string;
  name: string;
}

interface ReferencesGridProps {
  references: Reference[];
}

export default function ReferencesGrid({ references }: ReferencesGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
      {references.map((ref, idx) => (
        <motion.div
          key={ref.key}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.03 }}
          className="group"
        >
          <div className="relative h-32 md:h-40 rounded-2xl border-2 border-neutral-200 bg-white flex items-center justify-center px-4 py-6 hover:border-primary-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            {ref.logo ? (
              <div className="relative w-full h-full">
                <Image
                  src={`/images/references/${ref.logo}`}
                  alt={ref.name}
                  fill
                  className="object-contain opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ) : (
              <span className="text-sm font-semibold text-neutral-600 text-center leading-tight group-hover:text-primary-600 transition-colors">
                {ref.name}
              </span>
            )}
          </div>
          <p className="mt-3 text-xs text-neutral-600 text-center font-medium group-hover:text-primary-600 transition-colors">
            {ref.name}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
