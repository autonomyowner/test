'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

export const HeroSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [elementsVisible, setElementsVisible] = useState<{
    subtitle: boolean
    title: boolean
    description: boolean
    buttons: boolean
    footer: boolean
  }>({
    subtitle: false,
    title: false,
    description: false,
    buttons: false,
    footer: false
  })
  
  const params = useParams()
  const locale = params.locale as string
  const t = useTranslations('hero')

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsVisible(true), 100)
    return () => window.clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (isVisible) {
      const delays = {
        subtitle: 200,
        title: 400,
        description: 600,
        buttons: 800,
        footer: 1000
      }

      Object.entries(delays).forEach(([key, delay]) => {
        setTimeout(() => {
          setElementsVisible(prev => ({ ...prev, [key]: true }))
        }, delay)
      })
    }
  }, [isVisible])

  const handleContactClick = (): void => {
    const phoneNumber = '+213 671 38 91 13'
    const message = t('whatsappMessage')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/picturs/hero.png"
          alt="Allouani - Magasin de parfums d'exception"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
        <div className="max-w-3xl space-y-8">
          <p 
            className={`text-xs uppercase tracking-[0.4em] text-kitchen-gold-light/80 transition-all duration-700 ease-out ${
              elementsVisible.subtitle
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            {t('subtitle')}
          </p>

          <h1 
            className={`text-4xl font-elegant font-semibold text-kitchen-black-deep sm:text-5xl lg:text-6xl transition-all duration-800 ease-out ${
              elementsVisible.title
                ? 'translate-y-0 opacity-100'
                : 'translate-y-12 opacity-0'
            }`}
          >
            {t('title')}
          </h1>

          <p 
            className={`text-lg leading-relaxed text-kitchen-gold-light/90 sm:text-xl transition-all duration-700 ease-out ${
              elementsVisible.description
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            {t('description')}
          </p>

          <div 
            className={`flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 transition-all duration-700 ease-out ${
              elementsVisible.buttons
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            <button
              onClick={handleContactClick}
              className="inline-flex items-center justify-center rounded-full bg-kitchen-gold-medium px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-kitchen-black-deep transition-all duration-200 hover:bg-kitchen-gold-dark"
              type="button"
            >
              {t('contactButton')}
            </button>

            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center justify-center rounded-full border border-kitchen-gold-medium/50 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-kitchen-gold-light transition-all duration-200 hover:border-kitchen-gold-medium hover:bg-kitchen-gold-medium/10"
            >
              {t('servicesButton')}
            </Link>
          </div>

          <div 
            className={`flex flex-col gap-4 border-t border-kitchen-gold-medium/20 pt-6 sm:flex-row sm:items-center sm:justify-between transition-all duration-700 ease-out ${
              elementsVisible.footer
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="text-sm uppercase tracking-[0.3em] text-kitchen-gold-light/70">
              {t('location')}
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-kitchen-gold-light/80">
              <span className="whitespace-nowrap">{t('features.customBlends')}</span>
              <span className="whitespace-nowrap">{t('features.expertConsultation')}</span>
              <span className="whitespace-nowrap">{t('features.premiumQuality')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
