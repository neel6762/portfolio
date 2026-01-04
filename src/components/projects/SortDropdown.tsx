'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, scaleUp } from '@/utils/animations';

interface SortDropdownProps {
  value: 'newest' | 'oldest';
  onChange: (value: 'newest' | 'oldest') => void;
}

const sortOptions = [
  { value: 'newest' as const, label: 'Newest First' },
  { value: 'oldest' as const, label: 'Oldest First' },
];

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const selectedOption = sortOptions.find((opt) => opt.value === value);

  return (
    <motion.div
      ref={dropdownRef}
      variants={fadeInUp}
      initial="hidden"
      animate="show"
      className="relative"
    >
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 backdrop-blur-glass-md border border-white/20 rounded-full font-body text-sm font-medium text-white transition-all duration-300 shadow-glass-sm whitespace-nowrap"
      >
        <span>{selectedOption?.label}</span>
        <FaChevronDown
          className={`w-3 h-3 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={scaleUp}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="absolute top-full right-0 mt-2 min-w-full bg-white/10 backdrop-blur-glass-md border border-white/20 rounded-glass shadow-glass-md overflow-hidden z-10"
          >
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full px-6 py-3 text-left font-body text-sm transition-colors duration-200 ${
                  value === option.value
                    ? 'bg-white/20 text-white font-medium'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
