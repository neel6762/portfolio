'use client';

import React, { useEffect } from 'react';
import ProfileCard from '@/components/about/ProfileCard';
import AboutText from '@/components/about/AboutText';
import SkillsCarousel from '@/components/about/SkillsCarousel';
import LiquidBackground from '@/components/shared/LiquidBackground';
import siteText from '@/data/siteText.json';
import skillsData from '@/data/skills.json';

export default function AboutPage() {
  useEffect(() => {
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    const main = document.querySelector('main');
    const prevMainOverflow = main ? main.style.overflow : '';

    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    if (main) {
      main.style.overflow = 'auto';
    }

    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      if (main) {
        main.style.overflow = prevMainOverflow;
      }
    };
  }, []);

  return (
    <>
      <LiquidBackground />
      <div className="relative flex-1 min-h-0 flex flex-col px-4 pt-24 pb-20 md:px-6 md:pt-28 md:pb-24 lg:px-8">
        <div className="w-full max-w-5xl mx-auto flex-1 flex flex-col gap-12">
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white text-center">
            {siteText.about.heading}
          </h1>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Profile Card - 1/3 width on desktop */}
            <div className="md:col-span-1">
              <ProfileCard />
            </div>

            {/* About Text - 2/3 width on desktop */}
            <div className="md:col-span-2 flex items-center pt-2 md:pt-4">
              <AboutText text={siteText.about.description} />
            </div>
          </div>

          {/* Skills Carousel - Full width */}
          <div>
            <SkillsCarousel skills={skillsData} />
          </div>
        </div>
      </div>
    </>
  );
}
