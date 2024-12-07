import React from 'react'
import { ComponentTypePage } from '@/components/ComponentTypePage'
import { BlurredCTA, HoverDivCTA } from '@/components/showcase/marketing/ctas'

export default function CTA() {
  const base = 'marketing/ctas'

  return (
    <ComponentTypePage
      title="CTA Sections"
      examples={[
        {
          name: 'Blurred',
          path: `${base}/BlurredCTA.tsx`,
          component: <BlurredCTA />,
        },
        {
          name: 'Div Pop on Hover',
          path: `${base}/HoverDivCTA.tsx`,
          component: <HoverDivCTA />,
        },
      ]}
    />
  )
}
