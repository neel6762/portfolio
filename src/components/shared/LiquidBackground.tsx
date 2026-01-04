'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function LiquidBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Liquid blob 1 */}
      <motion.div
        className="absolute top-20 -left-20 w-96 h-96 bg-white/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          borderRadius: [
            '60% 40% 30% 70% / 60% 30% 70% 40%',
            '30% 60% 70% 40% / 50% 60% 30% 60%',
            '60% 40% 30% 70% / 60% 30% 70% 40%',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Liquid blob 2 */}
      <motion.div
        className="absolute bottom-20 -right-20 w-96 h-96 bg-white/3 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -180, -360],
          borderRadius: [
            '30% 60% 70% 40% / 50% 60% 30% 60%',
            '60% 40% 30% 70% / 60% 30% 70% 40%',
            '30% 60% 70% 40% / 50% 60% 30% 60%',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Liquid blob 3 */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/2 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 90, 180],
          borderRadius: [
            '40% 60% 60% 40% / 60% 40% 60% 40%',
            '60% 40% 40% 60% / 40% 60% 40% 60%',
            '40% 60% 60% 40% / 60% 40% 60% 40%',
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />
    </div>
  );
}
