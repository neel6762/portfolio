'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import projectsData from '@/data/projects.json';
import siteText from '@/data/siteText.json';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubLink?: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(projectsData);
  const [loading, setLoading] = useState(false);

  // Remove the artificial delay and load data immediately
  // useEffect(() => {
  //   // Simulate loading for a smoother experience
  //   const timer = setTimeout(() => {
  //     setProjects(projectsData);
  //     setLoading(false);
  //   }, 500);
    
  //   return () => clearTimeout(timer);
  // }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-dark-text mb-4">
            {siteText.projects.heading}
          </h1>
          <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
            {siteText.projects.description}
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-xl text-dark-text-secondary">No projects found.</p>
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                className="bg-dark-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    priority={parseInt(project.id) <= 3} // Prioritize loading first 3 images
                    quality={80}
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold text-dark-text">{project.title}</h3>
                  </div>
                  <p className="text-dark-text-secondary mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.githubLink && (
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-1 bg-dark-border text-dark-text-secondary text-xs rounded-full flex items-center hover:bg-dark-border/80 transition-colors"
                      >
                        <FiGithub className="mr-1 w-3 h-3" />
                        <span>GitHub</span>
                      </Link>
                    )}
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-dark-border text-dark-text-secondary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
      
      <Footer />
    </main>
  );
} 