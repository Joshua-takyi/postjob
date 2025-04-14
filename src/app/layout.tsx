import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
// import localfont from 'next/font/local';
import { Nav } from '@/components/nav';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const title = 'postjob | AI Resume Builder';
const description =
  'Postjob is a free AI resume builder that helps you create a professional resume in minutes. Our AI-powered tool generates personalized resumes tailored to your skills and experience.';
const url = 'https://postjob.vercel.app/';
const keywords =
  'AI resume builder, free resume builder, resume generator, AI-powered resume, personalized resume, professional resume, job application, career development, resume tips, resume writing, online resume builder, CV builder, job search tool';
const author = 'Postjob Team';
const themeColor = '#6DE754';
const twitterHandle = '@postjobai';
const ogType = 'website';
const ogSiteName = 'Postjob - AI Resume Builder';
const ogLocale = 'en_US';
const ogImageWidth = 1200;
const ogImageHeight = 630;
const ogImageAlt = 'Postjob - AI Resume Builder';
const ogImageUrl = 'https://postjob.vercel.app/images/og-image.png';
const ogImageType = 'image/png';
export const metadata: Metadata = {
  title,
  description,
  keywords,
  authors: [{ name: author }],
  creator: author,
  openGraph: {
    title,
    description,
    url,
    images: [
      {
        url: ogImageUrl,
        width: ogImageWidth,
        height: ogImageHeight,
        alt: ogImageAlt,
        type: ogImageType,
      },
    ],
    type: ogType,
    siteName: ogSiteName,
    locale: ogLocale,
  },
  twitter: {
    card: 'summary_large_image',
    site: twitterHandle,
    creator: twitterHandle,
    images: [ogImageUrl],
  },
  icons: {
    icon: ['/favicon.ico'],
    apple: '/apple-touch-icon.png',
    shortcut: ['/favicon.ico'],
  },
};

export const viewport = {
  themeColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-[#161815] text-white`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
