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
    window.open('mailto:Allouani.parfumerie@gmail.com', '_self')
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

      {/* Google Maps Embed - All Three Locations */}
      <div className="rounded-3xl border border-kitchen-gold-medium/30 bg-kitchen-gold-accent/85 p-6 shadow-sm">
        <h3 className="text-sm uppercase tracking-[0.3em] text-kitchen-gold-medium mb-4">
          Nos Emplacements
        </h3>
        <div className="w-full overflow-hidden rounded-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31425344.874046668!2d3.3797284356060607!3d28.544188444231944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQ5JzU4LjEiTiAwwrAwOCc1OS4wIkU!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
          <a 
            href="https://www.google.com/maps/place/Parfumerie+Allouani,+Saïda/@34.8328093,0.1496824,17z/data=!3m1!4b1!4m6!3m5!1s0x1280179673f85a69:0x40622bf4b670bb09!8m2!3d34.8328093!4d0.1496824!16s%2Fg%2F11rjb3r46p"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm block rounded-lg p-3 hover:bg-kitchen-gold-medium/10 transition-colors"
          >
            <p className="font-semibold text-kitchen-black-deep">Saïda</p>
            <p className="text-kitchen-black-soft">Parfumerie Allouani</p>
          </a>
          <a 
            href="https://www.google.com/maps/place/Parfumerie+Allouani+oran,+Rue+Med+Khemisti,+Oran/@35.7025847,-0.6451444,17z/data=!3m1!4b1!4m6!3m5!1s0xd7e89000cbdee17:0xc56c2d092b46a748!8m2!3d35.7025847!4d-0.6451444!16s%2Fg%2F11c3_mgfpd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm block rounded-lg p-3 hover:bg-kitchen-gold-medium/10 transition-colors"
          >
            <p className="font-semibold text-kitchen-black-deep">Oran</p>
            <p className="text-kitchen-black-soft">Parfumerie Allouani oran</p>
          </a>
          <a 
            href="https://www.google.com/maps/place/ALLOUANI+PARFUMRIE+ouargla+9,+Rue+Semahir+Ali,+Ouargla/@31.9511316,5.3348028,17z/data=!3m1!4b1!4m6!3m5!1s0x125d6b6886646ce1:0x519975d99a714b05!8m2!3d31.9511316!4d5.3348028!16s%2Fg%2F11h_r8vqg_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm block rounded-lg p-3 hover:bg-kitchen-gold-medium/10 transition-colors"
          >
            <p className="font-semibold text-kitchen-black-deep">Ouargla</p>
            <p className="text-kitchen-black-soft">ALLOUANI PARFUMRIE ouargla 9</p>
          </a>
        </div>
      </div>

      <div className="rounded-3xl border border-kitchen-gold-medium/30 bg-kitchen-gold-accent/85 px-6 py-8 shadow-sm">
        <h3 className="text-sm uppercase tracking-[0.3em] text-kitchen-gold-medium">
          {t('whatsapp')}
        </h3>
        <p className="mt-2 text-lg font-semibold text-kitchen-black-deep">
          +213 671 38 91 13
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
            +213 671 38 91 13
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
            Allouani.parfumerie@gmail.com
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
