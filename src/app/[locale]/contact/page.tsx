import { ContactInfo } from '@/components/ContactInfo'
import { LocationMap } from '@/components/LocationMap'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<JSX.Element> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/picturs/mock.png"
          alt="Contact Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-white/80">
              {t('subtitle')}
            </p>
            <h1 className="mt-4 text-4xl font-elegant font-semibold text-white sm:text-6xl">
              {t('title')}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/90">
              {t('description')}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gradient-to-br from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <ContactInfo />
            <LocationMap />
          </div>
        </div>
      </div>
    </div>
  )
}
