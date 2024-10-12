import React from 'react'
import { ComponentTypePage } from '@/components/ComponentTypePage'
import { InputSimple } from '@/components/showcase/application-ui/inputs'

export default function Inputs() {
  const base = 'application-ui/inputs'

  return (
    <ComponentTypePage
      title="Inputs"
      components={[
        {
          name: 'Simple',
          path: `${base}/InputSimple.tsx`,
          component: <InputSimple />,
        },
      ]}
    />
  )
}
