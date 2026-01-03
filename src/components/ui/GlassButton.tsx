import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface GlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function GlassButton({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
}: GlassButtonProps) {
  const variantClasses =
    variant === 'primary'
      ? 'bg-white/10 hover:bg-white/20 border-white/20'
      : 'bg-black/10 hover:bg-black/20 border-black/20';

  const baseClasses = `
    ${variantClasses}
    backdrop-blur-glass-sm
    border
    rounded-full
    px-8 py-3
    font-medium
    text-white
    transition-all duration-300
    hover:scale-105 hover:shadow-glass-md
    ${className}
  `;

  if (href) {
    return (
      <Link href={href}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={baseClasses}
        >
          {children}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={baseClasses}
    >
      {children}
    </motion.button>
  );
}
