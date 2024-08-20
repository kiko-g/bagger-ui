import React from 'react'
import { ComponentTypePage } from '@/components/ComponentTypePage'
import { HeroGridNav } from '@/components/marketing/hero'

export default function Hero() {
  const base = 'marketing/hero'

  return (
    <ComponentTypePage
      title="Hero Sections"
      components={[
        {
          name: 'Navigation Grid',
          path: `${base}/HeroGridNav.tsx`,
          component: <HeroGridNav />,
        },
      ]}
    />
  )
}
