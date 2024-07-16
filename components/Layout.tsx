import React from "react"
import clsx from "clsx"
import { Inter, Lexend } from "next/font/google"

import { Seo } from "./layout/Seo"
import { Header } from "./layout/Header"
import { Footer } from "./layout/Footer"
import { Sidebar } from "./layout/Sidebar"
import { QuickNavSidebar } from "./layout/QuickNavSidebar"
import { SupportBanner } from "./layout/SupportBanner"

const inter = Inter({ subsets: ["latin"] })

type Props = {
  children: React.ReactNode
  location?: string
  sidebar?: boolean
  quickNav?: { name: string; href: string }[]
}

export function Layout({ children, location = "Unknown", sidebar = false, quickNav }: Props) {
  return (
    <>
      <Seo title={location} />
      <main className={clsx(inter.className, "mx-auto flex min-h-screen max-w-[100vw] flex-col")}>
        <Header />
        <SupportBanner />
        <div className="flex flex-1">
          {sidebar && <Sidebar location={location} />}
          <article className="flex max-w-full flex-1 flex-col items-start justify-start px-6 xl:px-10">
            {children}
          </article>
          {quickNav && <QuickNavSidebar navigation={quickNav} />}
        </div>
        <Footer />
      </main>
    </>
  )
}
