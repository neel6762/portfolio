'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
export default function ProfileCard() {
  return (
    <motion.div variants={fadeInUp} initial="hidden" animate="show">
      <div className="flex justify-center">
        <div className="relative w-full aspect-square max-w-xs rounded-full overflow-hidden ring-2 ring-white/20">
          <Image
            src="/images/profile.jpg"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
}
