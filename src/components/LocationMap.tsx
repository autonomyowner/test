'use client'

import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

export const LocationMap = (): JSX.Element => {
  const params = useParams()
  const locale = params.locale as string
  const t = useTranslations('location')

  const serviceAreas = [
    t('allWilayas'),
    t('oranRegion'),
    t('constantineRegion'),
    t('annabaRegion'),
    t('otherWilayas'),
  ]
  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-neutral-200 bg-white/90 px-6 py-10 shadow-sm">
        <h2 className="text-2xl font-elegant font-semibold text-neutral-900">
          {t('serviceArea')}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-neutral-600">
          {t('serviceDescription')}
        </p>
        <div className="mt-6 grid grid-cols-1 gap-3 text-sm text-neutral-600 sm:grid-cols-2">
          {serviceAreas.map((area) => (
            <div
              key={area}
              className="rounded-2xl border border-neutral-200 bg-white/80 px-4 py-3"
            >
              {area}
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-neutral-500">
          {t('travelFees')}
        </p>
      </div>

      <div className="rounded-3xl border border-neutral-200 bg-white/80 px-6 py-10 shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          {t('ourLocations')}
        </h3>
        <p className="mt-2 text-sm text-neutral-600">
          {t('locationsDescription')}
        </p>
        
        {/* Map hidden as requested */}
        {/* <div className="mt-6 h-64 rounded-2xl border border-neutral-200 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.123456789!2d3.1718739!3d36.5656777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128eff12c7cb1229%3A0xb92a54a68d5c140e!2sCuisine%20Alger!5e0!3m2!1sfr!2sdz!4v1234567890123!5m2!1sfr!2sdz"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Cuisine Alger - Nos localisations"
            className="w-full h-full"
          />
        </div> */}

        <div className="mt-6 grid gap-4 text-sm text-neutral-600 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-neutral-900">Boutique Alger</p>
              <p className="mt-1">
                Allouani
                <br />
                Alger, Algérie
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-neutral-900">Boutique Oran</p>
              <p className="mt-1">
                Allouani
                <br />
                Oran, Algérie
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-neutral-900">Boutique Saida</p>
              <p className="mt-1">
                Allouani
                <br />
                Saida, Algérie
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-neutral-900">Boutique Ouargla</p>
              <p className="mt-1">
                Allouani
                <br />
                Ouargla, Algérie
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 text-sm text-neutral-600">
          <div>
            <p className="font-semibold text-neutral-900">{t('accessibility')}</p>
            <p className="mt-1">
              {t('accessibilityDescription')}
            </p>
          </div>
          <div>
            <p className="font-semibold text-neutral-900">{t('coverage')}</p>
            <p className="mt-1">
              {t('coverageDescription')}
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-neutral-200 bg-white/80 px-6 py-8 shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          {t('practicalInfo')}
        </h3>
        <div className="mt-4 grid gap-4 text-sm text-neutral-600">
          <div>
            <p className="font-semibold text-neutral-900">{t('appointments')}</p>
            <p className="mt-1">
              {t('appointmentsDescription')}
            </p>
          </div>
          <div>
            <p className="font-semibold text-neutral-900">{t('installation')}</p>
            <p className="mt-1">
              {t('installationDescription')}
            </p>
          </div>
          <div>
            <p className="font-semibold text-neutral-900">{t('emergencies')}</p>
            <p className="mt-1">
              {t('emergenciesDescription')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
