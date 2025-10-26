'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

export const WhatsAppButton = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const params = useParams()
  const locale = params.locale as string
  const t = useTranslations('contact')

  useEffect(() => {
    const handleScroll = (): void => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsAppClick = (): void => {
    const phoneNumber = '+213 671 38 91 13'
    const message = t('whatsappMessage')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      <button
        onClick={handleWhatsAppClick}
        className="rounded-full border border-kitchen-marble-gray bg-kitchen-white-clean/95 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-kitchen-black-deep shadow-lg backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
        type="button"
        aria-label={t('whatsappAria')}
      >
        WhatsApp
      </button>
    </div>
  )
} 
