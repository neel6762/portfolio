'use client';

import React from 'react';
import { motion } from 'framer-motion';
import BentoCard from './BentoCard';
import {
  FaPython,
  FaShareAlt,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaGithub,
  FaBrain,
  FaRobot,
  FaMicrochip,
  FaNetworkWired,
  FaChartLine,
} from 'react-icons/fa';

interface Skill {
  name: string;
  icon: string;
}

interface SkillsCardProps {
  className?: string;
  skills: Skill[];
}

// Icon mapping
const iconMap: { [key: string]: React.ElementType } = {
  FaPython,
  FaShareAlt,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaGithub,
  FaBrain,
  FaRobot,
  FaMicrochip,
  FaNetworkWired,
  FaChartLine,
};

export default function SkillsCard({ className = '', skills }: SkillsCardProps) {
  return (
    <BentoCard className={className} hover={false}>
      <div className="h-full overflow-hidden px-4 md:px-6 flex items-center">
        {/* Horizontal Scroll Container */}
        <div className="flex items-center gap-3 md:gap-4 overflow-x-auto scrollbar-hide py-4">
          {skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || FaMicrochip;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="flex flex-col items-center gap-2 min-w-[70px] md:min-w-[80px]"
              >
                {/* Icon */}
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-forest-olive/20 rounded-full text-forest-sage hover:bg-forest-accent/30 hover:text-forest-cream transition-all duration-300 text-lg md:text-xl">
                  <IconComponent />
                </div>

                {/* Skill Name */}
                <span className="text-[10px] md:text-xs font-body text-forest-eucalyptus text-center whitespace-nowrap">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </BentoCard>
  );
}
