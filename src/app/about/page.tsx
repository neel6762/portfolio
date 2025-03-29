'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import siteText from '@/data/siteText.json';

// Skill data
const skills = [
  { name: 'Python', category: 'Languages', icon: '🐍' },
  { name: 'R', category: 'Languages', icon: '📊' },
  { name: 'JavaScript', category: 'Languages', icon: '🌐' },
  { name: 'SQL', category: 'Languages', icon: '🗃️' },
  { name: 'TensorFlow', category: 'ML/AI', icon: '🧠' },
  { name: 'PyTorch', category: 'ML/AI', icon: '🔥' },
  { name: 'Scikit-learn', category: 'ML/AI', icon: '🔬' },
  { name: 'NLP', category: 'ML/AI', icon: '💬' },
  { name: 'Computer Vision', category: 'ML/AI', icon: '👁️' },
  { name: 'Graph Analytics', category: 'ML/AI', icon: '📈' },
  { name: 'AWS', category: 'Cloud', icon: '☁️' },
  { name: 'Docker', category: 'DevOps', icon: '🐳' },
  { name: 'Git', category: 'DevOps', icon: '📝' },
  { name: 'Neo4j', category: 'Databases', icon: '🔄' },
  { name: 'MongoDB', category: 'Databases', icon: '📂' },
  { name: 'PostgreSQL', category: 'Databases', icon: '📚' }
];

// Education data
const education = [
  {
    degree: 'MSc in Computer Science',
    institution: 'University of Ottawa',
    year: '2021-2023',
    description: 'Specialized in Machine Learning and Artificial Intelligence. Conducted research on graph neural networks for anomaly detection in financial transactions.'
  },
  {
    degree: 'BSc in Computer Science',
    institution: 'University of XYZ',
    year: '2017-2021',
    description: 'Graduated with honors. Focused on data structures, algorithms, and software engineering principles.'
  }
];

// Personal interests
const interests = [
  { name: 'Machine Learning Research', icon: '🔬' },
  { name: 'Open Source Contribution', icon: '🌱' },
  { name: 'Photography', icon: '📷' },
  { name: 'Reading Sci-Fi', icon: '📚' },
  { name: 'Hiking', icon: '🥾' }
];

export default function About() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [educationRef, educationInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [interestsRef, interestsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  const categories = ['All', ...Array.from(new Set(skills.map(skill => skill.category)))];

  return (
    <main className="min-h-screen relative">
      <Navbar />

      {/* Header Section */}
      <section
        ref={headerRef}
        className="relative pt-20 pb-8 md:pt-28 md:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-heading text-6xl md:text-7xl font-bold mb-4">
              <span className="neon-text">{siteText.about.heading}</span>
            </h1>
            <p className="text-2xl max-w-3xl mx-auto text-dark-text">
              {siteText.about.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Professional Journey Section */}
      <section
        ref={storyRef}
        className="section relative overflow-hidden py-12"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-heading text-center mb-12 text-primary">Professional Journey</h2>
            
            <div className="max-w-4xl mx-auto relative">
              <div className="space-y-6">
                {siteText.about.professionalJourney.timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-10 border-l-2 border-primary/30 pb-8 last:pb-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={storyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-accent shadow-lg shadow-accent/30"></div>
                    <div className="font-subheading text-accent text-xl leading-tight">{item.year}</div>
                    <div className="font-bold text-2xl text-dark-text leading-tight mt-1 mb-1">{item.title}</div>
                    <div className="text-primary text-lg font-medium leading-tight mb-2">{item.company}</div>
                    <div className="text-dark-text text-base leading-relaxed mt-1">{item.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section
        ref={skillsRef}
        className="section relative overflow-hidden py-12 bg-dark-bg/30"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-heading text-center mb-8 text-primary">Technical Skills</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categories.map(category => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category 
                      ? 'bg-primary/20 text-primary border border-primary shadow-neon-blue' 
                      : 'bg-dark-card/70 text-dark-text hover:bg-dark-card hover:text-primary'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="card group p-4 flex flex-col items-center justify-center text-center min-h-[120px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)' 
                  }}
                >
                  <div className="text-3xl mb-2 group-hover:animate-bounce-slow">{skill.icon}</div>
                  <div className="text-lg font-medium text-dark-text group-hover:text-primary transition-colors duration-300">{skill.name}</div>
                  <div className="text-xs text-dark-text-secondary mt-1">{skill.category}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Education Section */}
      <section
        ref={educationRef}
        className="section relative overflow-hidden py-12"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={educationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-heading text-center mb-12 text-primary">Education</h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  className="card p-6 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={educationInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.01 }}
                >
                  {/* Glowing border effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 border border-primary/50 rounded-xl"></div>
                    <div className="absolute -inset-1 bg-primary/5 blur-sm rounded-xl"></div>
                  </div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-dark-text">{item.degree}</h3>
                      <p className="text-lg text-primary">{item.institution}</p>
                    </div>
                    <div className="text-accent font-medium">{item.year}</div>
                  </div>
                  
                  <p className="text-dark-text">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Interests Section */}
      <section
        ref={interestsRef}
        className="section relative overflow-hidden py-12 bg-dark-bg/30"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={interestsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-heading text-center mb-10 text-primary">Personal Interests</h2>
            
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-4 text-center w-[150px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={interestsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <div className="text-4xl mb-3">{interest.icon}</div>
                  <div className="text-dark-text font-medium">{interest.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 