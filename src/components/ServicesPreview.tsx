"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

type ServiceCard = {
  id: string
  title: string
  description: string
  highlight: string
  image: string
  href: string
}

export const ServicesPreview = (): JSX.Element => {
  const params = useParams()
  const locale = params.locale as string
  const t = useTranslations('services')

  const services: ServiceCard[] = [
    {
      id: 'premium-perfumes',
      title: t('premiumPerfumes.title'),
      description: t('premiumPerfumes.description'),
      highlight: t('premiumPerfumes.highlight'),
      image: '/picturs/productupcoming (1).png',
      href: `/${locale}/services#premium-perfumes`,
    },
    {
      id: 'custom-blends',
      title: t('customBlends.title'),
      description: t('customBlends.description'),
      highlight: t('customBlends.highlight'),
      image: '/picturs/productupcoming (2).png',
      href: `/${locale}/services#custom-blends`,
    },
    {
      id: 'musk',
      title: t('musk.title'),
      description: t('musk.description'),
      highlight: t('musk.highlight'),
      image: '/picturs/productupcoming (1).png',
      href: `/${locale}/services#musk`,
    },
    {
      id: 'oud',
      title: t('oud.title'),
      description: t('oud.description'),
      highlight: t('oud.highlight'),
      image: '/picturs/productupcoming (2).png',
      href: `/${locale}/services#oud`,
    },
    {
      id: 'consultation',
      title: t('consultation.title'),
      description: t('consultation.description'),
      highlight: t('consultation.highlight'),
      image: '/picturs/productupcoming (1).png',
      href: `/${locale}/services#consultation`,
    },
    {
      id: 'gift-packaging',
      title: t('giftPackaging.title'),
      description: t('giftPackaging.description'),
      highlight: t('giftPackaging.highlight'),
      image: '/picturs/productupcoming (2).png',
      href: `/${locale}/services#gift-packaging`,
    },
  ]

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
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

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(service => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                className="h-64 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-white/90 line-clamp-2">
                  {service.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-kitchen-gold-light">
                  {service.highlight}
                </p>
                <div className="mt-4 inline-flex items-center text-sm font-medium text-kitchen-gold-light group-hover:text-white transition-colors duration-200">
                  {t('learnMore')}
                  <svg className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
