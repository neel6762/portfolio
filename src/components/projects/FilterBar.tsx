'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/utils/animations';

interface FilterBarProps {
  selected: string;
  onSelect: (category: string) => void;
}

const categories = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI' },
  { id: 'web', label: 'Web' },
  { id: 'data', label: 'Data' },
  { id: 'other', label: 'Other' },
];

export default function FilterBar({ selected, onSelect }: FilterBarProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="flex flex-wrap gap-3 justify-center"
    >
      {categories.map((category) => {
        const isActive = selected === category.id;
        return (
          <motion.button
            key={category.id}
            variants={fadeInUp}
            onClick={() => onSelect(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              px-6 py-2 rounded-full font-body text-sm font-medium
              backdrop-blur-glass-md border transition-all duration-300
              ${
                isActive
                  ? 'bg-white/20 border-white/40 text-white shadow-glass-md'
                  : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/15 hover:text-white'
              }
            `}
          >
            {category.label}
          </motion.button>
        );
      })}
    </motion.div>
  );
}
