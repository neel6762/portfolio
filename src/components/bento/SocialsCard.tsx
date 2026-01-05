'use client';

import React from 'react';
import { motion } from 'framer-motion';
import BentoCard from './BentoCard';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface SocialsCardProps {
  className?: string;
  links: SocialLink[];
}

export default function SocialsCard({ className = '', links }: SocialsCardProps) {
  return (
    <BentoCard className={className}>
      <div className="h-full flex items-center justify-center p-6">
        <div className="flex gap-4 md:gap-6">
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-forest-olive/30 text-forest-cream hover:bg-forest-sage hover:text-white transition-all duration-300"
              aria-label={link.name}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
