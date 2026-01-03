'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/projects/ProjectCard';
import LiquidBackground from '@/components/shared/LiquidBackground';
import { staggerContainer, fadeInUp } from '@/utils/animations';
import siteText from '@/data/siteText.json';
import projectsData from '@/data/projects.json';

export default function ProjectsPage() {
  return (
    <>
      <LiquidBackground />
      <div className="relative flex-1 min-h-0 flex flex-col px-4 py-20 md:py-24">
        <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col">
          {/* Page Title */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              {siteText.projects.heading}
            </h1>
            <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
              {siteText.projects.description}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1"
          >
            {projectsData.map((project) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
