'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import GlassCard from '@/components/ui/GlassCard';

interface AboutTextProps {
  text: string;
}

export default function AboutText({ text }: AboutTextProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="show"
      transition={{ delay: 0.2 }}
    >
      <GlassCard className="p-8">
        <p className="font-body text-lg leading-relaxed text-white/80">{text}</p>
      </GlassCard>
    </motion.div>
  );
}
