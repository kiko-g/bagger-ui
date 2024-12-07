import React from 'react'
import { ComponentTypePage } from '@/components/ComponentTypePage'
import {
  ButtonGroupJoined,
  ButtonGroupJoinedVertical,
  ButtonGroupSimple,
  ButtonGroupSplit,
} from '@/components/showcase/building-blocks/button-groups'

export default function ButtonGroups() {
  const base = 'building-blocks/button-groups'

  return (
    <ComponentTypePage
      title="Button Groups"
      examples={[
        {
          name: 'Simple',
          path: `${base}/ButtonGroupSimple.tsx`,
          component: <ButtonGroupSimple />,
        },
        {
          name: 'Joined',
          path: `${base}/ButtonGroupJoined.tsx`,
          component: <ButtonGroupJoined />,
        },
        {
          name: 'Joined Vertical',
          path: `${base}/ButtonGroupJoinedVertical.tsx`,
          component: <ButtonGroupJoinedVertical />,
        },
        {
          name: 'Split',
          path: `${base}/ButtonGroupSplit.tsx`,
          component: <ButtonGroupSplit />,
        },
      ]}
    />
  )
}
