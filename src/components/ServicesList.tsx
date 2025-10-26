
"use client"

import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

type Service = {
  id: string
  title: string
  description: string
  features: string[]
  image: string
  signature: string
}

// This will be moved inside the component to use translations

export const ServicesList = (): JSX.Element => {
  const params = useParams()
  const locale = params.locale as string
  const t = useTranslations('servicesList')

  const services: Service[] = [
    {
      id: 'premium-perfumes',
      title: t('premiumPerfumes.title'),
      description: t('premiumPerfumes.description'),
      features: [
        t('premiumPerfumes.features.0'),
        t('premiumPerfumes.features.1'),
        t('premiumPerfumes.features.2'),
        t('premiumPerfumes.features.3'),
        t('premiumPerfumes.features.4'),
      ],
      image: '/picturs/productupcoming (1).png',
      signature: t('premiumPerfumes.signature'),
    },
    {
      id: 'custom-blends',
      title: t('customBlends.title'),
      description: t('customBlends.description'),
      features: [
        t('customBlends.features.0'),
        t('customBlends.features.1'),
        t('customBlends.features.2'),
        t('customBlends.features.3'),
        t('customBlends.features.4'),
      ],
      image: '/picturs/productupcoming (2).png',
      signature: t('customBlends.signature'),
    },
    {
      id: 'musk',
      title: t('musk.title'),
      description: t('musk.description'),
      features: [
        t('musk.features.0'),
        t('musk.features.1'),
        t('musk.features.2'),
        t('musk.features.3'),
        t('musk.features.4'),
      ],
      image: '/picturs/productupcoming (1).png',
      signature: t('musk.signature'),
    },
    {
      id: 'oud',
      title: t('oud.title'),
      description: t('oud.description'),
      features: [
        t('oud.features.0'),
        t('oud.features.1'),
        t('oud.features.2'),
        t('oud.features.3'),
        t('oud.features.4'),
      ],
      image: '/picturs/productupcoming (2).png',
      signature: t('oud.signature'),
    },
    {
      id: 'consultation',
      title: t('consultation.title'),
      description: t('consultation.description'),
      features: [
        t('consultation.features.0'),
        t('consultation.features.1'),
        t('consultation.features.2'),
        t('consultation.features.3'),
        t('consultation.features.4'),
      ],
      image: '/picturs/productupcoming (1).png',
      signature: t('consultation.signature'),
    },
    {
      id: 'gift-packaging',
      title: t('giftPackaging.title'),
      description: t('giftPackaging.description'),
      features: [
        t('giftPackaging.features.0'),
        t('giftPackaging.features.1'),
        t('giftPackaging.features.2'),
        t('giftPackaging.features.3'),
        t('giftPackaging.features.4'),
      ],
      image: '/picturs/productupcoming (2).png',
      signature: t('giftPackaging.signature'),
    },
  ]

  return (
    <div className="space-y-20">
      {services.map((service, index) => {
        const isReversed = index % 2 === 1
        return (
          <section
            key={service.id}
            id={service.id}
            className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2"
          >
            <div
              className={`relative overflow-hidden rounded-[32px] border border-kitchen-gold-medium/30 bg-gradient-to-br from-kitchen-gold-accent to-kitchen-warm-light shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-kitchen-gold-medium/20 ${
                isReversed ? 'lg:order-2' : ''
              }`}
            >
            <div className="relative aspect-[4/3] bg-neutral-100 flex items-center justify-center">
              {service.image ? (
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="text-center text-neutral-400">
                  <div className="text-4xl mb-2">📸</div>
                  <p className="text-sm">Image à venir</p>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between px-6 py-5">
              <span className="text-xs uppercase tracking-[0.35em] text-kitchen-black-deep">
                {service.signature}
              </span>
              <span className="text-xs uppercase tracking-[0.35em] text-kitchen-gold-medium">
                Allouani
              </span>
            </div>
            </div>

            <div className={`space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
            <div>
              <h2 className="text-3xl font-elegant font-semibold text-kitchen-black-deep">
                {service.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-kitchen-black-soft">
                {service.description}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-kitchen-gold-medium">
                {t('includedInService')}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-kitchen-black-soft">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <button
                type="button"
                className="rounded-full border border-kitchen-gold-medium px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-kitchen-gold-medium transition-colors duration-200 hover:border-kitchen-gold-dark hover:text-kitchen-gold-dark hover:bg-kitchen-gold-accent"
              >
                {t('requestQuote')}
              </button>
            </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
