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
    <main className="min-h-screen">
      <Navbar />

      {/* Header Section */}
      <section
        ref={headerRef}
        className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-secondary blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              <span className="text-primary">{siteText.about.heading}</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-dark-text">
              {siteText.about.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* My Story Section */}
      <section
        ref={storyRef}
        className="section bg-dark-bg relative overflow-hidden"
      >
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-primary/5"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-secondary/5"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl text-primary mb-12 text-center">
              My Story
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {siteText.about.sections.map((section, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="font-subheading text-xl text-secondary mb-2">
                      {section.title}
                    </h3>
                    <p className="text-lg text-dark-text">
                      {section.content}
                    </p>
                  </div>
                ))}
                <p className="text-lg text-dark-text">
                  {siteText.about.personalNote}
                </p>
              </div>

              <div className="space-y-8">
                <h3 className="font-subheading text-2xl text-secondary">
                  {siteText.about.professionalJourney.title}
                </h3>
                <div className="space-y-6">
                  {siteText.about.professionalJourney.timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      className="relative pl-10 border-l-2 border-gray-700 pb-6 last:pb-0"
                      initial={{ opacity: 0, x: -20 }}
                      animate={storyInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
                      <div className="font-subheading text-accent text-lg">{item.year}</div>
                      <div className="font-bold text-lg text-dark-text">{item.title}</div>
                      <div className="text-primary">{item.company}</div>
                      <div className="text-gray-300">{item.description}</div>
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