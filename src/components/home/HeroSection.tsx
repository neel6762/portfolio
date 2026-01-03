'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, floatAnimation } from '@/utils/animations';
import GlassButton from '@/components/ui/GlassButton';

interface HeroSectionProps {
  name: string;
  jobTitle: string;
  showPhoto?: boolean;
}

export default function HeroSection({ name, jobTitle, showPhoto = false }: HeroSectionProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-12">
      {/* Name */}
      <motion.h1
        className="text-6xl md:text-7xl lg:text-8xl font-bold text-center font-heading text-white"
        variants={fadeInUp}
        initial="hidden"
        animate="show"
      >
        {name}
      </motion.h1>

      {/* Job Title */}
      <motion.p
        className="text-lg md:text-xl text-white/70 uppercase tracking-[0.3em] text-center font-body"
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.2 }}
      >
        {jobTitle}
      </motion.p>

      {/* Profile Photo (Optional) */}
      {showPhoto && (
        <motion.div
          variants={floatAnimation}
          animate="animate"
          className="relative"
        >
          <div className="relative w-48 h-48 rounded-full overflow-hidden ring-2 ring-white/20 shadow-liquid">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      )}

      {/* CTA Button */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.4 }}
      >
        <GlassButton href="/projects" variant="primary">
          View My Work
        </GlassButton>
      </motion.div>
    </div>
  );
}
