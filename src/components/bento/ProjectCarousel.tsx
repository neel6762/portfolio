'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';

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
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);

  // Auto-rotation logic with cleanup
  useEffect(() => {
    if (isPaused || projects.length <= 1) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5500); // 5.5 seconds

    return () => clearInterval(interval);
  }, [isPaused, projects.length]);

  // Navigation handlers
  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Framer Motion slide variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  const transition = {
    x: { type: 'spring', stiffness: 300, damping: 30 },
    opacity: { duration: 0.3 },
  };

  const currentProject = projects[currentIndex];

  return (
    <div
      className={`carousel-card relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="h-full flex flex-col">
        {/* Carousel Container */}
        <div className="relative flex-1 overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentProject.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
              className="absolute inset-0 flex flex-col"
            >
              {/* Project Image */}
              {currentProject.image && (
                <div className="relative h-32 md:h-48 lg:h-56 overflow-hidden">
                  <Image
                    src={currentProject.image}
                    alt={currentProject.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 to-transparent" />

                  {/* Featured indicator */}
                  {currentProject.featured && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-3 right-3 w-2 h-2 rounded-full bg-yellow-400 shadow-lg"
                    />
                  )}
                </div>
              )}

              {/* Content Section */}
              <div className="p-4 md:p-6 flex-1 flex flex-col">
                {/* Project Title */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-heading font-bold text-forest-cream mb-2">
                  {currentProject.title}
                </h3>

                {/* Project Description */}
                <p className="font-body text-forest-eucalyptus text-sm md:text-base leading-relaxed line-clamp-3 mb-4 flex-1">
                  {currentProject.description}
                </p>

                {/* Links */}
                <div className="flex gap-2 items-center mb-3">
                  {/* GitHub Link */}
                  {currentProject.githubLink && (
                    <a
                      href={currentProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 md:px-4 py-1.5 bg-forest-olive/30 hover:bg-forest-accent/50 border border-forest-olive/50 rounded-full text-xs md:text-sm font-body text-forest-cream transition-all duration-300 hover:scale-105"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  )}

                  {/* Live Demo Link */}
                  {currentProject.liveLink && (
                    <a
                      href={currentProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 md:px-4 py-1.5 bg-forest-olive/30 hover:bg-forest-accent/50 border border-forest-olive/50 rounded-full text-xs md:text-sm font-body text-forest-cream transition-all duration-300 hover:scale-105"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

                {/* Tags */}
                {currentProject.tags && currentProject.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {currentProject.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-forest-olive/20 border border-forest-olive/30 rounded-full text-xs font-body text-forest-eucalyptus"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls - Only show if more than 1 project */}
        {projects.length > 1 && (
          <>
            {/* Previous Arrow */}
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-forest-deep/80 hover:bg-forest-accent/80 border border-forest-sage/30 rounded-full text-forest-cream transition-all duration-300 hover:scale-110 z-10"
            >
              <FaChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              aria-label="Next project"
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-forest-deep/80 hover:bg-forest-accent/80 border border-forest-sage/30 rounded-full text-forest-cream transition-all duration-300 hover:scale-110 z-10"
            >
              <FaChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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
          </>
        )}
      </div>
    </div>
  );
}
