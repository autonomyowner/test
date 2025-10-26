'use client'

import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

export const CTASection = (): JSX.Element => {
  const params = useParams()
  const locale = params.locale as string
  const t = useTranslations('cta')

  const handleWhatsAppClick = (): void => {
    const phoneNumber = '+213 671 38 91 13'
    const message = t('whatsappMessage')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`
    window.open(whatsappUrl, '_blank')
  }

  const handlePhoneClick = (): void => {
    window.open('tel:+213671389113', '_self')
  }

  const handleEmailClick = (): void => {
    window.open('mailto:Allouani.parfumerie@gmail.com', '_self')
  }

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-kitchen-gold-medium/30 bg-kitchen-gold-accent/85 px-6 py-16 shadow-sm sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-kitchen-gold-medium">
            {t('subtitle')}
          </p>
          <h2 className="mt-4 text-4xl font-elegant font-semibold text-kitchen-black-deep sm:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-kitchen-black-soft">
            {t('description')}
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={handleWhatsAppClick}
            className="rounded-full bg-kitchen-black-deep px-10 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-kitchen-gold-light transition-colors duration-200 hover:bg-kitchen-black-soft"
            type="button"
          >
            {t('requestQuote')}
          </button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
          <div className="rounded-2xl border border-kitchen-lux-dark-green-200 bg-white/80 px-6 py-8">
            <p className="text-sm uppercase tracking-[0.3em] text-kitchen-lux-dark-green-600">
              {t('whatsapp')}
            </p>
            <p className="mt-4 text-lg font-semibold text-kitchen-lux-dark-green-800">
              +213 671 38 91 13
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-kitchen-lux-dark-green-600 hover:text-kitchen-lux-dark-green-800 underline underline-offset-4 transition-colors duration-200"
              type="button"
            >
              {t('requestQuote')}
            </button>
          </div>

          <div className="rounded-2xl border border-kitchen-lux-dark-green-200 bg-white/80 px-6 py-8">
            <p className="text-sm uppercase tracking-[0.3em] text-kitchen-lux-dark-green-600">
              {t('phone')}
            </p>
            <p className="mt-4 text-lg font-semibold text-kitchen-lux-dark-green-800">
              +213 671 38 91 13
            </p>
            <button
              onClick={handlePhoneClick}
              className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-kitchen-lux-dark-green-600 hover:text-kitchen-lux-dark-green-800 underline underline-offset-4 transition-colors duration-200"
              type="button"
            >
              {t('callNow')}
            </button>
          </div>

          <div className="rounded-2xl border border-kitchen-lux-dark-green-200 bg-white/80 px-6 py-8">
            <p className="text-sm uppercase tracking-[0.3em] text-kitchen-lux-dark-green-600">
              {t('email')}
            </p>
            <p className="mt-4 text-lg font-semibold text-kitchen-lux-dark-green-800">
              Allouani.parfumerie@gmail.com
            </p>
            <button
              onClick={handleEmailClick}
              className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-kitchen-lux-dark-green-600 hover:text-kitchen-lux-dark-green-800 underline underline-offset-4 transition-colors duration-200"
              type="button"
            >
              {t('requestQuote')}
            </button>
          </div>
        </div>

        <div className="mt-10 border-t border-kitchen-lux-dark-green-200 pt-8 text-center text-xs uppercase tracking-[0.35em] text-kitchen-lux-dark-green-600">
          {t('available')}
        </div>
      </div>
    </section>
  )
}
