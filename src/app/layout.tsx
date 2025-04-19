import "@/styles/globals.css"
import type { Metadata, Viewport } from "next"

import { Toaster } from "@/components/ui/toaster"

import { cn } from "@/lib/utils"
import { siteConfig } from "@/utils/config"
import { fontMono, fontSans } from "@/lib/fonts"
import { Analytics } from "@/components/Analytics"
import { Providers } from "./providers"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: ["Next.js", "React", "Typescript", "Tailwind CSS", "Shadcn UI"],
  authors: [
    {
      name: "Francisco Gonçalves",
      url: "https://kikogoncalves.com",
    },
  ],
  creator: "Francisco Gonçalves",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        width: 3008,
        height: 1912,
        alt: siteConfig.name,
        url: siteConfig.ogImage,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@kikogoncalves_",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen bg-background antialiased", fontSans.variable, fontMono.variable)}>
        <Providers>
          <Analytics />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
