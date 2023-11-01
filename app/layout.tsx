"use client";
import './globals.css';
// import type { Metadata } from 'next';
import Head from 'next/head';

const metadata = {
  title: 'Close your transactions with confidence',
  description: 'Middletrust is Africa&apos;s most reliable escrow payment service provider already helping thousands of individuals and businesses send and receive payments safely. process promotes complete transparency between transacting parties while facilitating quick and secure payments.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className='h-full overflow-x-hidden bg-white dark:bg-[#1E1A1A]'>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add other necessary meta tags, link tags, etc. */}
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;