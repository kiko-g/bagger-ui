import React from 'react'
import { ComponentTypePage } from '@/components/ComponentTypePage'
import { NavbarSimple } from '@/components/application-ui/navbars'

export default function Navbars() {
  const base = 'application-ui/navbars'

  return (
    <ComponentTypePage
      title="Navbars"
      components={[
        {
          name: 'Simple',
          path: `${base}/NavbarSimple.tsx`,
          component: <NavbarSimple location="Home" />,
        },
      ]}
    />
  )
}
