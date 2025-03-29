'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import siteText from '@/data/siteText.json';

export default function About() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
              <span className="text-primary">{siteText.about.heading}</span>
            </h1>
            <p className="text-2xl max-w-3xl mx-auto text-dark-text">
              {siteText.about.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        ref={storyRef}
        className="section relative overflow-hidden py-8"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl mx-auto relative">
              <div>
                <div className="space-y-6">
                  {siteText.about.professionalJourney.timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      className="relative pl-10 border-l-2 border-primary/30 pb-8 last:pb-0"
                      initial={{ opacity: 0, x: -20 }}
                      animate={storyInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-accent shadow-lg"></div>
                      <div className="font-subheading text-accent text-xl leading-tight">{item.year}</div>
                      <div className="font-bold text-2xl text-dark-text leading-tight mt-1 mb-1">{item.title}</div>
                      <div className="text-primary text-lg font-medium leading-tight mb-2">{item.company}</div>
                      <div className="text-gray-300 text-base leading-relaxed mt-1">{item.description}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 