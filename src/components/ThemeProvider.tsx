'use client';

import { ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // We're only using dark mode now, so this is just a simple wrapper
  return <>{children}</>;
} 