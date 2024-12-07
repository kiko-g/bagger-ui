import React from 'react'
import { ComponentTypePage } from '@/components/ComponentTypePage'
import { HeroGridNav } from '@/components/showcase/marketing/hero'

export default function Hero() {
  const base = 'marketing/hero'

  return (
    <ComponentTypePage
      title="Hero Sections"
      examples={[
        {
          name: 'Navigation Grid',
          path: `${base}/HeroGridNav.tsx`,
          component: <HeroGridNav />,
        },
      ]}
    />
  )
}
