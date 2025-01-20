import React from 'react'
import { ComponentTypePage } from '@/components/ComponentTypePage'
import { CheckboxSample } from '@/components/showcase/application-ui/checkboxes/sample/CheckboxSample'

import { CheckboxDefault } from '@/components/showcase/application-ui/checkboxes/CheckboxDefault'
import { CheckboxParent } from '@/components/showcase/application-ui/checkboxes/CheckboxParent'

export default function Inputs() {
  const base = 'application-ui/checkboxes'

  return (
    <ComponentTypePage
      title="Checkboxes"
      sample={{
        nodes: [
          {
            item: 'Setup',
            component: <CheckboxSample />,
          },
        ],
      }}
      examples={[
        {
          name: 'Basic with Label',
          path: `${base}/Checkbox.tsx`,
          component: <CheckboxDefault />,
        },
        {
          name: 'Parent Checkbox with children',
          path: `${base}/CheckboxParent.tsx`,
          component: <CheckboxParent />,
        },
      ]}
    />
  )
}
