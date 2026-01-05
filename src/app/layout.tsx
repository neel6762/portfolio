import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Load Inter font with multiple weights for SF Pro-like appearance
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Neel Patel | Portfolio',
  description: 'Full-stack developer and AI enthusiast building innovative solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} scroll-smooth dark`}>
      <body className={`${inter.className} flex flex-col h-full overflow-hidden bg-forest-cream text-forest-deep antialiased`}>
        <main className="flex-1 min-h-0 flex flex-col overflow-hidden">{children}</main>
      </body>
    </html>
  );
} 
