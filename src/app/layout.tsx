import { NextIntlClientProvider } from 'next-intl';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // Default locale for root layout
  const locale: 'ar' | 'fr' = 'fr';

  return (
    <html lang={locale} dir={(locale as string) === 'ar' ? 'rtl' : 'ltr'} className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} bg-gradient-elegant min-h-screen text-kitchen-black-deep`}>
        {children}
      </body>
    </html>
  );
}