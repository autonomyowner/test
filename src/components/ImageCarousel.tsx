'use client'

import { useTranslations } from 'next-intl'

export const ImageCarousel = (): JSX.Element => {
  const t = useTranslations('gallery')
  const stats = [
    { value: t('stats.events.value'), label: t('stats.events.label') },
    { value: t('stats.years.value'), label: t('stats.years.label') },
    { value: t('stats.team.value'), label: t('stats.team.label') },
  ]

  return (
    <section className="border-y border-kitchen-lux-dark-green-200 bg-white/80 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-kitchen-lux-dark-green-600">
            {t('subtitle')}
          </p>
          <h2 className="mt-5 text-4xl font-elegant font-semibold text-kitchen-lux-dark-green-800 sm:text-5xl">
            {t('title')}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-kitchen-lux-dark-green-700">
            {t('description')}
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="relative h-96 w-full overflow-hidden rounded-3xl border border-kitchen-lux-dark-green-200 shadow-lg">
            <video
              src="/picturs/gif.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              {t('videoFallback')}
            </video>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-kitchen-lux-dark-green-200 bg-gradient-to-br from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100 px-6 py-8"
            >
              <p className="text-4xl font-elegant font-semibold text-kitchen-lux-dark-green-800">
                {stat.value}
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.35em] text-kitchen-lux-dark-green-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
