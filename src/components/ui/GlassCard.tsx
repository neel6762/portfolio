import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'light' | 'dark';
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  variant = 'dark',
}: GlassCardProps) {
  const baseClasses =
    variant === 'dark'
      ? 'bg-white/5 border-white/10'
      : 'bg-black/5 border-black/10';

  const hoverClasses = hover ? 'glass-card-hover' : '';

  return (
    <div
      className={`
        ${baseClasses}
        backdrop-blur-glass-md
        border
        rounded-glass
        shadow-liquid
        ${hoverClasses}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
