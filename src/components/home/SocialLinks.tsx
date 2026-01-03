'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/utils/animations';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface SocialLinksProps {
  links: SocialLink[];
}

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <motion.div
      className="flex justify-center gap-6"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      {links.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          variants={fadeInUp}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="glass-card glass-card-hover p-4 rounded-full">
            <div className="text-white/80 group-hover:text-white transition-colors duration-300">
              {link.icon}
            </div>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
}
