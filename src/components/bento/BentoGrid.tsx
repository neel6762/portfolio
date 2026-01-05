'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PhotoCard from './PhotoCard';
import AboutCard from './AboutCard';
import ProjectCarousel from './ProjectCarousel';
// import SkillsCard from './SkillsCard';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
  featured?: boolean;
}

interface Skill {
  name: string;
  icon: string;
}

interface BentoGridProps {
  name: string;
  jobTitle: string;
  bio: string;
  photoUrl?: string;
  socialLinks: SocialLink[];
  projects: Project[];
  skills: Skill[];
}

export default function BentoGrid({
  name,
  jobTitle,
  bio,
  photoUrl,
  socialLinks,
  projects,
  skills,
}: BentoGridProps) {
  // Animation variants for staggered entrance (refined timing)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="w-full h-full max-w-7xl mx-auto px-4 py-4 md:flex md:items-center md:justify-center"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:h-[calc(100vh-2rem)]" style={{ gridAutoRows: '1fr' }}>
        {/* Photo Card - LEFT SIDE (tall) */}
        <PhotoCard
          name={name}
          photoUrl={photoUrl}
          className="col-span-2 row-span-2 md:col-span-2 md:row-span-3 min-h-[300px]"
        />

        {/* About Card - TOP RIGHT */}
        <AboutCard
          jobTitle={jobTitle}
          bio={bio}
          socialLinks={socialLinks}
          className="col-span-2 md:col-span-2 row-span-2 md:row-span-1 md:min-h-[250px]"
        />

        {/* Project Carousel - BOTTOM RIGHT (hero element) */}
        <ProjectCarousel
          projects={projects}
          className="col-span-2 md:col-span-2 row-span-2 min-h-[350px]"
        />

        {/* Skills Card - BOTTOM, FULL WIDTH */}
        {/* <SkillsCard
          skills={skills}
          className="col-span-2 md:col-span-4 row-span-1"
        /> */}
      </div>
    </motion.div>
  );
}
