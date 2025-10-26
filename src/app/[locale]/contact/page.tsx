import { ContactInfo } from '@/components/ContactInfo'
import { LocationMap } from '@/components/LocationMap'
import { getTranslations } from 'next-intl/server'

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<JSX.Element> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-kitchen-lux-dark-green-600">
            {t('subtitle')}
          </p>
          <h1 className="mt-4 text-4xl font-elegant font-semibold text-kitchen-lux-dark-green-800 sm:text-5xl">
            {t('title')}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-kitchen-lux-dark-green-700">
            {t('description')}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ContactInfo />
          <LocationMap />
        </div>
      </div>
    </div>
  )
}
