'use client';

import React from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="show"
      className="relative w-full"
    >
      <div className="relative flex items-center bg-white/5 backdrop-blur-glass-md border border-white/10 rounded-full px-4 py-3 shadow-glass-sm">
        {/* Search Icon */}
        <FaSearch className="text-white/70 w-4 h-4 mr-3" />

        {/* Input */}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search by tags..."
          className="flex-1 bg-transparent text-white placeholder:text-white/50 font-body text-sm focus:outline-none"
        />

        {/* Clear Button */}
        {value && (
          <button
            onClick={() => onChange('')}
            className="ml-2 text-white/70 hover:text-white transition-colors duration-200"
            aria-label="Clear search"
          >
            <FaTimes className="w-4 h-4" />
          </button>
        )}
      </div>
    </motion.div>
  );
}
