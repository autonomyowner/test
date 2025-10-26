'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

type NavItem = {
  label: string
  href: string
}

export const Navbar = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const pathname = usePathname()
  const params = useParams()
  const locale = params.locale as string
  const t = useTranslations('navbar')
  const mobileButtonLabel = isMobileMenuOpen ? t('closeMenu') : t('openMenu')

  const navItems: NavItem[] = [
    { label: t('home'), href: `/${locale}` },
    { label: t('services'), href: `/${locale}/services` },
    { label: t('contact'), href: `/${locale}/contact` },
  ]

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 12)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-kitchen-white-clean/92 backdrop-blur border-b border-kitchen-gold-medium/30 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link
            href={`/${locale}`}
            className="flex items-center space-x-3 transition-opacity duration-200 hover:opacity-80"
          >
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              <Image
                src="/picturs/logo.png?v=2"
                alt="Allouani Logo"
                fill
                className="object-contain rounded-full"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight text-kitchen-black-deep">
              <span className="text-xl font-semibold tracking-wide uppercase">
                Allouani
              </span>
              <span className="text-xs font-light text-kitchen-marble-gray">
                {t('tagline')}
              </span>
            </div>
          </Link>

          <div className="hidden items-center space-x-7 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium uppercase tracking-[0.18em] transition-colors duration-200 ${
                    isActive
                      ? 'text-kitchen-gold-medium'
                      : 'text-kitchen-marble-gray hover:text-kitchen-gold-medium'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center rounded-full border border-kitchen-gold-medium bg-gradient-to-r from-kitchen-gold-accent to-kitchen-warm-light px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-kitchen-black-deep transition-all duration-200 hover:border-kitchen-gold-dark hover:bg-gradient-to-r hover:from-kitchen-warm-light hover:to-kitchen-gold-accent hover:text-kitchen-black-deep hover:shadow-md hover:shadow-kitchen-gold-medium/30 md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label={t('toggleNavigation')}
            type="button"
          >
            {mobileButtonLabel}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mb-4 rounded-2xl border border-kitchen-gold-medium/30 bg-gradient-to-br from-kitchen-gold-accent to-kitchen-warm-light px-3 pb-4 pt-2 backdrop-blur shadow-lg shadow-kitchen-gold-medium/20">
            <div className="grid gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-full px-4 py-3 text-sm font-medium uppercase tracking-[0.2em] transition-all duration-200 ${
                      isActive
                        ? 'bg-kitchen-gold-medium text-kitchen-black-deep shadow-sm'
                        : 'text-kitchen-black-deep hover:bg-kitchen-gold-medium hover:text-kitchen-black-deep hover:shadow-sm'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
