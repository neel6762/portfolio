import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaPython,
  FaDatabase,
  FaAws,
  FaGithub,
  FaBrain,
  FaRobot,
  FaMicrochip,
  FaNetworkWired,
  FaChartLine,
  FaShareAlt,
} from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import React from 'react';

// Map icon names to actual components
export const iconComponents: { [key: string]: React.ElementType } = {
  SiJavascript,
  SiTypescript,
  FaReact,
  SiNextdotjs,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  SiTailwindcss,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaPython,
  FaDatabase,
  FaAws,
  FaGithub,
  FaBrain,
  FaRobot,
  FaMicrochip,
  FaNetworkWired,
  FaChartLine,
  FaShareAlt,
};

// Define specific colors for icons
export const iconColors: { [key: string]: string } = {
  FaPython: 'text-blue-500',
  FaDatabase: 'text-orange-500',
  FaGitAlt: 'text-orange-600',
  FaDocker: 'text-blue-600',
  FaAws: 'text-orange-400',
  FaGithub: 'text-gray-800 dark:text-gray-400',
  FaBrain: 'text-pink-500',
  FaRobot: 'text-teal-500',
  FaMicrochip: 'text-purple-500',
  FaNetworkWired: 'text-indigo-500',
  FaChartLine: 'text-green-500',
  SiJavascript: 'text-yellow-400',
  SiTypescript: 'text-blue-400',
  FaReact: 'text-sky-500',
  SiNextdotjs: 'text-white',
  FaNodeJs: 'text-green-600',
  FaHtml5: 'text-orange-500',
  FaCss3Alt: 'text-blue-500',
  SiTailwindcss: 'text-cyan-400',
  FaFigma: 'text-purple-500',
  FaShareAlt: 'text-blue-700',
};

// Helper function to get icon component and color
export const getIconComponent = (iconName: string) => {
  const IconComponent = iconComponents[iconName];
  const colorClass = iconColors[iconName] || 'text-white/80';
  return { IconComponent, colorClass };
};
