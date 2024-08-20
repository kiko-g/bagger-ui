import React from 'react'
import { ComponentTypePage } from '@/components/ComponentTypePage'
import { InputCheckbox, InputParentCheckbox } from '@/components/application-ui/checkboxes'

export default function Inputs() {
  const base = 'application-ui/checkboxes'

  return (
    <ComponentTypePage
      title="Checkboxes"
      components={[
        {
          name: 'Checkbox',
          path: `${base}/InputCheckbox.tsx`,
          component: <InputCheckbox />,
        },
        {
          name: 'Parent Checkbox',
          path: `${base}/InputParentCheckbox.tsx`,
          component: <InputParentCheckbox />,
        },
      ]}
    />
  )
}
