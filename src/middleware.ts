import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['ar', 'fr'],

  // Used when no locale matches
  defaultLocale: 'fr',

  // Auto-detect locale based on browser language
  localeDetection: true
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|fr)/:path*']
};
