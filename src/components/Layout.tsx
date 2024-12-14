'use client'

import React from 'react'
import clsx from 'clsx'
import type { NavigationLevel } from '@/types'

import { Seo } from '@/components/layout/Seo'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Navigation } from '@/components/layout/Navigation'
import { QuickNavSidebar } from '@/components/layout/QuickNavSidebar'
import { SupportBadge } from '@/components/layout/support/Badge'
import { HeroPattern } from '@/components/layout/HeroPattern'
import { ThemeSupportNotification } from '@/components/layout/support/ThemeSupportNotification'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import { TerminalIcon } from 'lucide-react'

type Props = {
  children: React.ReactNode
  location?: string
  sidebar?: boolean
  quickNav?: NavigationLevel[]
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
          <article className="relative mb-16 flex max-w-full flex-1 flex-col items-start justify-start px-4 xl:pl-12 xl:pr-10">
            <div className="my-4 flex w-full flex-row items-start justify-between gap-2 lg:flex-row lg:items-center">
              <SupportBadge />
            </div>
            {children}
          </article>
          {quickNav && <QuickNavSidebar navigation={quickNav} />}
        </div>

        <ThemeSupportNotification />

        <div className="p-4">
          <Alert variant="destructive" roundedness="lg" border="no" transparent="no" accent="yes" dismissible>
            <TerminalIcon className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>You can add components to your app using the cli.</AlertDescription>
          </Alert>
        </div>

        <Footer />
      </main>
    </>
  )
}
