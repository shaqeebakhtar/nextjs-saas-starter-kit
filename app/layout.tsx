import { cn } from '@/lib/utils';
import { sora as fontTitle, workSans as fontBody } from '@/styles/fonts';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import Providers from './providers';

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
        className={cn(
          'min-h-screen font-body antialiased',
          fontTitle.variable,
          fontBody.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
