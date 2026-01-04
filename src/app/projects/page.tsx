'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '@/components/projects/ProjectCard';
import FilterBar from '@/components/projects/FilterBar';
import SearchInput from '@/components/projects/SearchInput';
import SortDropdown from '@/components/projects/SortDropdown';
import LiquidBackground from '@/components/shared/LiquidBackground';
import { staggerContainer, fadeInUp } from '@/utils/animations';
import siteText from '@/data/siteText.json';
import projectsDataRaw from '@/data/projects.json';
import { Project } from '@/types';

const projectsData = projectsDataRaw as Project[];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  useEffect(() => {
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    const main = document.querySelector('main');
    const prevMainOverflow = main ? (main as HTMLElement).style.overflow : '';

    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    if (main) {
      (main as HTMLElement).style.overflow = 'auto';
    }

    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      if (main) {
        (main as HTMLElement).style.overflow = prevMainOverflow;
      }
    };
  }, []);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = [...projectsData];

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Tag search (case-insensitive, partial match)
    if (searchQuery.trim()) {
      filtered = filtered.filter((p) =>
        p.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort by date
    filtered.sort((a, b) => {
      const dateA = new Date(a.date || '2000-01-01').getTime();
      const dateB = new Date(b.date || '2000-01-01').getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    return filtered;
  }, [selectedCategory, searchQuery, sortOrder]);

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

          {/* Controls Section */}
          <div className="mb-8 space-y-4">
            {/* Filter Bar */}
            <FilterBar selected={selectedCategory} onSelect={setSelectedCategory} />

            {/* Search + Sort Row */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <SearchInput value={searchQuery} onChange={setSearchQuery} />
              </div>
              <SortDropdown value={sortOrder} onChange={setSortOrder} />
            </div>
          </div>

          {/* Projects Grid with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${searchQuery}-${sortOrder}`}
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1"
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <motion.div key={project.id} variants={fadeInUp}>
                    <ProjectCard project={project} />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  variants={fadeInUp}
                  className="col-span-full text-center py-12"
                >
                  <p className="text-white/70 text-lg">
                    No projects found. Try adjusting your filters.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
