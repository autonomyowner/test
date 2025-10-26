import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['ar', 'fr'];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  // If invalid, fallback to default locale instead of calling notFound()
  const validLocale = locale && locales.includes(locale as any) ? locale : 'fr';

  return {
    locale: validLocale,
    messages: (await import(`./messages/${validLocale}.json`)).default
  };
});
