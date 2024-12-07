import React from 'react'
import { ComponentTypePage } from '@/components/ComponentTypePage'
import { SliderSimple } from '@/components/showcase/application-ui/sliders'

export default function Sliders() {
  const base = 'application-ui/sliders'

  return (
    <ComponentTypePage
      title="Sliders"
      examples={[
        {
          name: 'Simple',
          path: `${base}/SliderSimple.tsx`,
          component: <SliderSimple />,
        },
      ]}
    />
  )
}
