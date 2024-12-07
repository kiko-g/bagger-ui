import React from 'react'
import { ComponentTypePage } from '@/components/ComponentTypePage'
import { Checkbox, ParentCheckbox } from '@/components/showcase/application-ui/checkboxes'

export default function Inputs() {
  const base = 'application-ui/checkboxes'

  return (
    <ComponentTypePage
      title="Checkboxes"
      examples={[
        {
          name: 'Checkbox',
          path: `${base}/Checkbox.tsx`,
          component: <Checkbox />,
        },
        {
          name: 'Parent Checkbox',
          path: `${base}/ParentCheckbox.tsx`,
          component: <ParentCheckbox />,
        },
      ]}
    />
  )
}
