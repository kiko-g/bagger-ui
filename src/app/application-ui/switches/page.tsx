import React from 'react'
import { ComponentTypePage } from '@/components/ComponentTypePage'
import { SwitchDarkMode, SwitchProtected, SwitchSimple } from '@/components/application-ui/switches'

export default function Switches() {
  const base = 'application-ui/switches'

  return (
    <ComponentTypePage
      title="Switches"
      components={[
        {
          name: 'Simple',
          path: `${base}/SwitchSimple.tsx`,
          component: <SwitchSimple />,
        },
        {
          name: 'Dark Mode',
          path: `${base}/SwitchDarkMode.tsx`,
          component: <SwitchDarkMode />,
        },
        {
          name: 'Protected',
          path: `${base}/SwitchProtected.tsx`,
          component: <SwitchProtected />,
        },
      ]}
    />
  )
}
