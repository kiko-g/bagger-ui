'use client'

import React from 'react'
import clsx from 'clsx'

import { Seo } from '@/components/layout/Seo'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Navigation } from '@/components/layout/Navigation'
import { QuickNavSidebar } from '@/components/layout/QuickNavSidebar'
import { SupportBadge } from '@/components/layout/support/Badge'
import { HeroPattern } from '@/components/layout/HeroPattern'
import { ThemeSupportNotification } from '@/components/layout/support/ThemeSupportNotification'

type Props = {
  children: React.ReactNode
  location?: string
  sidebar?: boolean
  quickNav?: { name: string; href: string }[]
}

export function Layout({ children, location = 'Unknown', sidebar = false, quickNav }: Props) {
  return (
    <>
      <Seo title={location} />
      <main className={clsx('mx-auto flex min-h-screen max-w-[100vw] flex-col')}>
        <Header />
        <HeroPattern />
        <div className="flex flex-1">
          {sidebar && <Navigation location={location} />}
          <article className="flex max-w-full flex-1 flex-col items-start justify-start px-6 xl:px-10">
            <div className="my-4 flex w-full justify-start">
              <SupportBadge />
            </div>
            {children}
          </article>
          {quickNav && <QuickNavSidebar navigation={quickNav} />}
        </div>

        <ThemeSupportNotification />
        <Footer />
      </main>
    </>
  )
}
