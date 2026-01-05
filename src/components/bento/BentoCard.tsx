'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function BentoCard({ children, className = '', hover = true }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.61, 1, 0.88, 1] }}
      className={`bento-card ${hover ? '' : 'hover:transform-none'} ${className}`}
    >
      {children}
    </motion.div>
  );
}
