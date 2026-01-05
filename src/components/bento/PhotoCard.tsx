'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface PhotoCardProps {
  className?: string;
  name: string;
  photoUrl?: string;
}

export default function PhotoCard({
  className = '',
  name,
  photoUrl = '/images/profile.jpg'
}: PhotoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.61, 1, 0.88, 1] }}
      className={`relative overflow-hidden rounded-glass-xl group ${className}`}
    >
      {/* Profile Image */}
      <Image
        src={photoUrl}
        alt={`${name} - Profile Photo`}
        fill
        className="object-cover object-center"
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Gradient Overlay - Dark at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* Name Text - Over gradient at bottom-left */}
      <div className="absolute bottom-0 left-0 p-6 md:p-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white drop-shadow-2xl">
          {name}
        </h1>
      </div>

      {/* Optional: Subtle Hover Effect */}
      <div className="absolute inset-0 bg-forest-accent/0 group-hover:bg-forest-accent/10 transition-colors duration-300" />
    </motion.div>
  );
}
