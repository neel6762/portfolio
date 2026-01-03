'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import { getIconComponent } from '@/utils/iconMap';
import { Skill } from '@/types';
import Carousel from '@/components/ui/Carousel';
import GlassCard from '@/components/ui/GlassCard';

interface SkillsCarouselProps {
  skills: Skill[];
}

export default function SkillsCarousel({ skills }: SkillsCarouselProps) {
  // Group skills into chunks for carousel slides
  const skillsPerSlide = 6;
  const slideGroups: Skill[][] = [];

  for (let i = 0; i < skills.length; i += skillsPerSlide) {
    slideGroups.push(skills.slice(i, i + skillsPerSlide));
  }

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="show"
      transition={{ delay: 0.4 }}
      className="mt-8"
    >
      <h3 className="text-2xl font-heading font-bold text-white mb-6 text-center">Skills</h3>
      <Carousel showDots={slideGroups.length > 1}>
        {slideGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="w-full px-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {group.map((skill) => {
                const { IconComponent, colorClass } = getIconComponent(skill.icon);
                return (
                  <GlassCard
                    key={skill.name}
                    className="p-4 flex flex-col items-center justify-center text-center space-y-2"
                    hover
                  >
                    {IconComponent && (
                      <IconComponent className={`w-8 h-8 ${colorClass}`} />
                    )}
                    <span className="font-body text-sm font-medium text-white/90">
                      {skill.name}
                    </span>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        ))}
      </Carousel>
    </motion.div>
  );
}
