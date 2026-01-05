'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaStar, FaExternalLinkAlt } from 'react-icons/fa';
import BentoCard from './BentoCard';

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

interface ProjectBentoCardProps {
  project: Project;
  className?: string;
}

export default function ProjectBentoCard({ project, className = '' }: ProjectBentoCardProps) {
  return (
    <BentoCard className={className}>
      <div className="h-full flex flex-col overflow-hidden">
        {/* Project Image */}
        {project.image && (
          <div className="relative h-32 md:h-40 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 to-transparent" />

            {/* Featured indicator (subtle) */}
            {project.featured && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-3 right-3 w-2 h-2 rounded-full bg-yellow-400 shadow-lg"
              />
            )}
          </div>
        )}

        {/* Content Section */}
        <div className="p-4 md:p-5 flex-1 flex flex-col">
          {/* Project Title */}
          <h3 className="text-base md:text-lg font-heading font-bold text-forest-cream mb-2">
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="font-body text-forest-eucalyptus text-xs md:text-sm leading-relaxed line-clamp-3 mb-3 flex-1">
            {project.description}
          </p>

          {/* Links */}
          <div className="flex gap-2 items-center">
            {/* GitHub Link */}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 md:px-3 py-1 bg-forest-olive/30 hover:bg-forest-sage/50 border border-forest-olive/50 rounded-full text-xs font-body text-forest-cream transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="hidden md:inline">GitHub</span>
              </a>
            )}

            {/* Live Demo Link */}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 md:px-3 py-1 bg-forest-olive/30 hover:bg-forest-sage/50 border border-forest-olive/50 rounded-full text-xs font-body text-forest-cream transition-colors duration-300"
              >
                <FaExternalLinkAlt className="w-3 h-3" />
                <span className="hidden md:inline">Live</span>
              </a>
            )}
          </div>

          {/* Tags (optional, show only on larger cards) */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-forest-olive/20 border border-forest-olive/30 rounded-full text-[10px] md:text-xs font-body text-forest-eucalyptus"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </BentoCard>
  );
}
