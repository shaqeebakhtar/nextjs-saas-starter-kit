import { cn } from '@/lib/utils';
import { author as fontSans } from '@/styles/fonts';
import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NextJs SaaS Starter Kit',
  description:
    'A ready-to-use SaaS starter kit that accelerates your project development, built with Next.js, TypeScript, Tailwind CSS, and Prisma',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('min-h-screen font-sans antialiased', fontSans.variable)}
      >
        {children}
      </body>
    </html>
  );
}
