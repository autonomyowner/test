
'use client'

import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

export const AboutHero = (): JSX.Element => {
  const params = useParams()
  const locale = params.locale as string
  const t = useTranslations('about')
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
                {t('subtitle')}
              </p>
              <h1 className="mt-5 text-4xl font-elegant font-semibold text-neutral-900 sm:text-5xl">
                {t('title')}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                {t('description')}
              </p>
            </div>

            <div className="grid gap-8">
              <div>
                <h2 className="text-lg font-semibold text-neutral-900">
                  {t('ourHistory')}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {t('historyDescription')}
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-neutral-900">
                  {t('ourPromise')}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {t('promiseDescription')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 border-t border-neutral-200 pt-6">
              <div>
                <p className="text-3xl font-elegant font-semibold text-neutral-900">
                  50+
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-neutral-500">
                  {t('kitchens')}
                </p>
              </div>
              <div>
                <p className="text-3xl font-elegant font-semibold text-neutral-900">
                  5+
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-neutral-500">
                  {t('years')}
                </p>
              </div>
              <div>
                <p className="text-3xl font-elegant font-semibold text-neutral-900">
                  {t('qualifiedArtisans')}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-neutral-500">
                  {t('qualifiedArtisans')}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[32px] border border-neutral-200 bg-white/80 shadow-lg">
              <div className="relative aspect-[4/5] bg-neutral-100 flex items-center justify-center">
                <div className="text-center text-neutral-400">
                  <div className="text-6xl mb-4">👥</div>
                  <p className="text-lg">{t('teamComingSoon')}</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 left-1/2 w-60 -translate-x-1/2 rounded-3xl border border-neutral-200 bg-white/95 px-6 py-5 text-center shadow-lg">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                {t('manufacturingWorkshop')}
              </p>
              <p className="mt-3 text-sm text-neutral-600">
                {t('workshopDescription')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
