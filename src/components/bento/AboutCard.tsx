'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import BentoCard from './BentoCard';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface AboutCardProps {
  className?: string;
  jobTitle: string;
  bio: string;
  socialLinks?: SocialLink[];
}

export default function AboutCard({ className = '', jobTitle, bio, socialLinks = [] }: AboutCardProps) {
  return (
    <BentoCard className={className}>
      <div className="h-full flex flex-col justify-between p-8 md:p-10">
        <div>
          {/* Job Title */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-4xl font-heading font-bold text-forest-cream mb-4"
          >
            {jobTitle}
          </motion.h2>

          {/* Bio Text */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="font-body text-forest-eucalyptus text-sm md:text-base leading-relaxed md:line-clamp-3"
          >
            {bio}
          </motion.p>
        </div>

        {/* Social Links */}
        {socialLinks.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex gap-3 mt-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                className="w-10 h-10 flex items-center justify-center bg-forest-olive/20 hover:bg-forest-accent/40 border border-forest-olive/30 hover:border-forest-sage/50 rounded-full text-white hover:text-white transition-all duration-300 hover:scale-110"
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </BentoCard>
  );
}
