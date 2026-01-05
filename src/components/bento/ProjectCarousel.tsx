'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

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

interface ProjectCarouselProps {
  projects: Project[];
  className?: string;
}

export default function ProjectCarousel({ projects, className = '' }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigation handler for dots
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`carousel-card relative overflow-hidden ${className}`}>
      <div className="h-full flex flex-col justify-between p-8 md:p-10">
        {/* Top Section: Static "Projects" Header - Matching AboutCard style */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl md:text-4xl font-heading font-bold text-forest-cream mb-6"
        >
          Projects
        </motion.h2>

        {/* Middle Section: Horizontal Scrolling Carousel with Peek */}
        <div className="relative flex-1 mb-6 -mx-4 px-4 overflow-visible">
          <motion.div
            className="flex gap-4"
            animate={{
              x: `calc(-${currentIndex * 100}% - ${currentIndex * 1}rem)`,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="flex-shrink-0 w-[85%] md:w-[70%] border border-forest-sage/30 rounded-2xl p-5 md:p-6 bg-forest-deep/40"
                style={{
                  opacity: index === currentIndex ? 1 : 0.5,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Title */}
                <h3 className="text-xl md:text-2xl font-heading font-bold text-forest-cream mb-3 pt-2">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="font-body text-forest-eucalyptus text-sm md:text-base leading-relaxed line-clamp-4 md:line-clamp-3 mb-3">
                  {project.description}
                </p>

                {/* Tags and Links - Inline */}
                <div className="flex flex-wrap items-center gap-2">
                  {/* Links - Icon Only Style (matching social icons) */}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="w-10 h-10 flex items-center justify-center bg-forest-olive/20 hover:bg-forest-accent/40 border border-forest-olive/30 hover:border-forest-sage/50 rounded-full text-white transition-all duration-300 hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="w-10 h-10 flex items-center justify-center bg-forest-olive/20 hover:bg-forest-accent/40 border border-forest-olive/30 hover:border-forest-sage/50 rounded-full text-white transition-all duration-300 hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </a>
                  )}

                  {/* Tags - Minimal Chips */}
                  {project.tags && project.tags.length > 0 && (
                    <>
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-forest-olive/15 border border-forest-olive/25 rounded-full text-xs font-body text-forest-eucalyptus"
                        >
                          {tag}
                        </span>
                      ))}
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section: Dot Indicators - Only show if more than 1 project */}
        {projects.length > 1 && (
          <div className="flex gap-2 justify-center">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to project ${index + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-forest-sage'
                    : 'w-2 h-2 bg-forest-sage/40 hover:bg-forest-sage/60'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
