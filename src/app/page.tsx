'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import Navbar from '@/components/Navbar'; // Removed Navbar import
import Footer from '@/components/Footer';
import siteText from '@/data/siteText.json';
import projectsData from '@/data/projects.json';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubLink?: string;
}

export default function Home() {
  const [projects] = useState<Project[]>(projectsData);
  
  // Section refs for animations
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Animation variants
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
    <main className="min-h-screen bg-white font-sans flex flex-col"> {/* Ensure flex column layout for footer */}
      {/* <Navbar /> */} {/* Removed Navbar component */}

      {/* Hero Section - Centered Black Rectangle */}
      <section
        id="home"
        ref={heroRef}
        className="flex-grow flex items-center justify-center overflow-hidden p-4 md:p-8" // Use flex-grow to take available space
      >
        {/* Inner black container with fixed dimensions */}
        <div className="bg-black text-white w-[90vw] h-[80vh] flex flex-col items-center justify-center text-center p-6 md:p-12 relative overflow-hidden"> {/* Centering content */}
          
          {/* Optional: Background effects */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-[80px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[80px]"></div>
          </div>

          {/* Content Wrapper - Centered within the black box */}
          <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
            
            {/* Profile Image - Centered */}
            <motion.div 
              className="order-1 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image 
                    src="/images/profile.jpg" 
                    alt="Neel Patel - Profile Photo"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-full"
                    priority
                  />
                </div>
              </div>
            </motion.div>
              
            {/* Hero Content - Centered */}
            <motion.div 
              className="order-2 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {/* Heading */}
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {siteText.home.hero.greeting}{' '}
                <span className="text-primary hover:text-primary/80 transition-colors">
                  <span className="inline-block">
                    <motion.span
                      className="inline-block"
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                    >
                      👋
                    </motion.span>
                  </span>{' '}
                  {siteText.general.siteName}
                </span>
                <br />{siteText.home.hero.heading}
              </h1>
              {/* Subtext */}
              <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto opacity-90">
                {siteText.home.hero.description}
              </p>
                
              {/* Social Media Links - Centered */}
              <div className="flex justify-center space-x-6 mb-8">
                {/* GitHub Link */}
                <motion.a
                  href={siteText.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white hover:text-primary transition-colors duration-300"
                  aria-label="GitHub"
                >
                   <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                     <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                   </svg>
                </motion.a>
                {/* LinkedIn Link */}
                <motion.a
                  href={siteText.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white hover:text-primary transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                   </svg>
                </motion.a>
                {/* Twitter Link */}
                <motion.a
                  href={siteText.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white hover:text-primary transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                     <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                   </svg>
                </motion.a>
                {/* Email Link */}
                <motion.a
                  href={`mailto:${siteText.social.email}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white hover:text-primary transition-colors duration-300"
                  aria-label="Email"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                     <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                     <polyline points="22,6 12,13 2,6"></polyline>
                   </svg>
                </motion.a>
              </div>
                
              {/* Buttons - Centered */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* Explore Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative inline-block"
                >
                  <button 
                    onClick={() => {
                      const projectsSection = document.getElementById('projects');
                      if (projectsSection) {
                        window.scrollTo({
                          top: projectsSection.offsetTop - 80, // Adjust offset if needed
                          behavior: 'smooth',
                        });
                      }
                    }}
                    className="relative bg-primary hover:bg-primary/80 text-white rounded-lg px-8 py-3 text-lg transition-all shadow-md hover:shadow-lg"
                  >
                    Explore My Work
                    <span className="ml-2">→</span>
                  </button>
                </motion.div>
                {/* Learn More Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative inline-block"
                >
                  <button 
                    onClick={() => {
                      const aboutSection = document.getElementById('about');
                      if (aboutSection) {
                        window.scrollTo({
                          top: aboutSection.offsetTop - 80, // Adjust offset if needed
                          behavior: 'smooth',
                        });
                      }
                    }}
                    className="relative bg-white text-black border border-white hover:bg-gray-200 rounded-lg px-8 py-3 text-lg transition-all shadow-md hover:shadow-lg"
                  >
                    Learn More
                  </button>
                </motion.div>
              </div>

            </motion.div> { /* End Hero Content */ }
          </div> { /* End Content Wrapper */ }
        </div> { /* End Inner black container */ }
      </section> { /* End Hero Section */ }
      
      {/* About Section */}
      <section
        id="about"
        ref={aboutRef}
        className="relative py-20 md:py-32 overflow-hidden bg-[#1A1D26] text-[#D1D5DB]"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#00D9FF]">{siteText.about.heading}</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              {siteText.about.description}
            </p>
          </motion.div>
          
          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Column 1: Timeline Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="max-w-4xl mx-auto relative">
                <div className="space-y-6">
                  {siteText.about.professionalJourney.timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      className="relative pl-10 border-l-2 border-[#444851] pb-8 last:pb-0"
                      initial={{ opacity: 0, x: -20 }}
                      animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-[#00D9FF] shadow-md shadow-[#00D9FF]/20"></div>
                      <div className="font-subheading text-[#FF6EC7] font-medium text-lg leading-tight">{item.year}</div>
                      <div className="font-bold text-2xl leading-tight mt-1 mb-1">{item.title}</div>
                      <div className="text-[#00D9FF] font-medium leading-tight mb-2">{item.company}</div>
                      <div className="opacity-90 text-base leading-relaxed mt-1">{item.description}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Column 2: Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="bg-[#232631] rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-bold text-[#00D9FF] mb-4 font-heading">{siteText.about.skills.heading}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {siteText.about.skills.categories.map((category, index) => (
                    <div key={index}>
                      <h4 className="text-[#FF6EC7] font-medium mb-2 font-subheading">{category.name}</h4>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center">
                            <span className="mr-2">⚡</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> { /* End About Section */ }
      
      {/* Projects Section */}
      <section
        id="projects"
        ref={projectsRef}
        className="relative py-20 md:py-32"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-[80px]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">{siteText.projects.heading}</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto opacity-80">
              {siteText.projects.description}
            </p>
          </motion.div>
          
          <motion.div
            variants={container}
            initial="hidden"
            animate={projectsInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                className="bg-[#1A1D26] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-[#444851]"
              >
                <div className="h-48 overflow-hidden relative">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    priority={parseInt(project.id) <= 3}
                    quality={80}
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold text-[#D1D5DB]">{project.title}</h3>
                  </div>
                  <p className="text-[#D1D5DB]/80 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-[#00D9FF]/10 text-[#00D9FF] text-xs rounded-full flex items-center hover:bg-[#00D9FF]/20 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="mr-1"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#444851] text-[#D1D5DB] text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> { /* End Projects Section */ }
      
      <Footer /> {/* Footer remains at the bottom */}
    </main> 
  );
}