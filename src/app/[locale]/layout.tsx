import type { Metadata } from 'next'
import { getTranslations, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { Navbar } from '@/components/Navbar'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: 'Allouani' }],
    creator: 'Allouani',
    publisher: 'Allouani',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://allouani.com'),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://allouani.com',
      siteName: 'Allouani',
      images: [
        {
          url: '/picturs/hero.png',
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
      locale: locale === 'ar' ? 'ar_DZ' : 'fr_DZ',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/picturs/hero.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Navbar />
      <main className="pt-20 md:pt-24 pb-20">{children}</main>
      <footer className="bg-kitchen-black-deep backdrop-blur-md border-t border-kitchen-gold-medium/20 text-kitchen-white-clean py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            Made by{' '}
            <a
              href="https://www.sitedz.store"
              target="_blank"
              rel="noopener noreferrer"
              className="text-kitchen-gold-light hover:text-kitchen-gold-medium transition-colors underline"
            >
              www.sitedz.store
            </a>
          </p>
        </div>
      </footer>
      <WhatsAppButton />
    </NextIntlClientProvider>
  )
}
