import React from 'react'
import { ComponentTypePage } from '@/components/ComponentTypePage'
import { ModalSimple } from '@/components/showcase/application-ui/modals'

export default function Modals() {
  const base = 'application-ui/modals'

  return (
    <ComponentTypePage
      title="Modals"
      examples={[
        {
          name: 'Simple',
          path: `${base}/ModalSimple.tsx`,
          component: <ModalSimple />,
        },
      ]}
    />
  )
}
