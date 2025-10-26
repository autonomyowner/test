'use client'

import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

export const ContactInfo = (): JSX.Element => {
  const params = useParams()
  const locale = params.locale as string
  const t = useTranslations('contact')

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
    window.open('mailto:heithemtedd@gmail.com', '_self')
  }

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-kitchen-gold-medium/30 bg-kitchen-gold-accent/90 px-6 py-10 shadow-sm">
        <p className="text-xs uppercase tracking-[0.4em] text-kitchen-gold-medium">
          {t('coordinates')}
        </p>
        <h2 className="mt-4 text-3xl font-elegant font-semibold text-kitchen-black-deep">
          {t('exchangeWithTeam')}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-kitchen-black-soft">
          {t('teamDescription')}
        </p>
      </div>

      <div className="rounded-3xl border border-kitchen-gold-medium/30 bg-kitchen-gold-accent/85 px-6 py-8 shadow-sm">
        <h3 className="text-sm uppercase tracking-[0.3em] text-kitchen-gold-medium">
          {t('whatsapp')}
        </h3>
        <p className="mt-2 text-lg font-semibold text-kitchen-black-deep">
          +213 77 679 79 04
        </p>
        <p className="mt-2 text-sm text-kitchen-black-soft">
          {t('whatsappDescription')}
        </p>
        <button
          onClick={handleWhatsAppClick}
          className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-kitchen-gold-medium hover:text-kitchen-gold-dark underline underline-offset-4 transition-colors duration-200"
          type="button"
        >
          {t('openWhatsApp')}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-3xl border border-kitchen-gold-medium/30 bg-kitchen-gold-accent/85 px-6 py-8 shadow-sm">
          <h3 className="text-sm uppercase tracking-[0.3em] text-kitchen-gold-medium">
            {t('phone')}
          </h3>
          <p className="mt-2 text-lg font-semibold text-kitchen-black-deep">
            +213 77 679 79 04
          </p>
        <p className="mt-2 text-sm text-kitchen-black-soft">
          {t('phoneDescription')}
        </p>
          <button
            onClick={handlePhoneClick}
            className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-kitchen-gold-medium hover:text-kitchen-gold-dark underline underline-offset-4 transition-colors duration-200"
            type="button"
          >
            {t('call')}
          </button>
        </div>
        <div className="rounded-3xl border border-kitchen-gold-medium/30 bg-kitchen-gold-accent/85 px-6 py-8 shadow-sm">
          <h3 className="text-sm uppercase tracking-[0.3em] text-kitchen-gold-medium">
            {t('email')}
          </h3>
          <p className="mt-2 text-lg font-semibold text-kitchen-black-deep">
            heithemtedd@gmail.com
          </p>
        <p className="mt-2 text-sm text-kitchen-black-soft">
          {t('emailDescription')}
        </p>
          <button
            onClick={handleEmailClick}
            className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-kitchen-gold-medium hover:text-kitchen-gold-dark underline underline-offset-4 transition-colors duration-200"
            type="button"
          >
            {t('writeMessage')}
          </button>
        </div>
      </div>

      <div className="rounded-3xl border border-kitchen-gold-medium/30 bg-kitchen-gold-accent/80 px-6 py-8 text-sm uppercase tracking-[0.3em] text-kitchen-gold-medium shadow-sm">
        {t('schedule')}
      </div>
    </div>
  )
}
