import React from 'react'
import { ComponentTypePage } from '@/components/ComponentTypePage'

import { ButtonDefault } from '@/components/showcase/application-ui/buttons/ButtonDefault'
import { ButtonSecondary } from '@/components/showcase/application-ui/buttons/ButtonSecondary'
import { ButtonOutline } from '@/components/showcase/application-ui/buttons/ButtonOutline'
import { ButtonWithIcon } from '@/components/showcase/application-ui/buttons/ButtonWithIcon'
import { ButtonIconAction } from '@/components/showcase/application-ui/buttons/ButtonIconAction'
import { ButtonStatus } from '@/components/showcase/application-ui/buttons/ButtonStatus'
import { ButtonDisabled } from '@/components/showcase/application-ui/buttons/ButtonDisabled'
import { ButtonWithAnimation } from '@/components/showcase/application-ui/buttons/ButtonWithAnimation'
import { ButtonFilling } from '@/components/showcase/application-ui/buttons/ButtonFilling'

export default function Buttons() {
  const base = 'application-ui/buttons'

  return (
    <ComponentTypePage
      title="Buttons"
      examples={[
        {
          name: 'Default',
          path: `${base}/ButtonDefault.tsx`,
          component: <ButtonDefault />,
        },
        {
          name: 'Secondary',
          path: `${base}/ButtonSecondary.tsx`,
          component: <ButtonSecondary />,
        },
        {
          name: 'Outline',
          path: `${base}/ButtonOutline.tsx`,
          component: <ButtonOutline />,
        },
        {
          name: 'With Icon',
          path: `${base}/ButtonWithIcon.tsx`,
          component: <ButtonWithIcon />,
        },
        {
          name: 'Icon Action',
          path: `${base}/ButtonIconAction.tsx`,
          component: <ButtonIconAction />,
        },
        {
          name: 'Status',
          path: `${base}/ButtonStatus.tsx`,
          component: <ButtonStatus />,
        },
        {
          name: 'Disabled',
          path: `${base}/ButtonDisabled.tsx`,
          component: <ButtonDisabled />,
        },
        {
          name: 'With Animation',
          path: `${base}/ButtonWithAnimation.tsx`,
          component: <ButtonWithAnimation />,
        },
        {
          name: 'Filling Animation',
          path: `${base}/ButtonFilling.tsx`,
          component: <ButtonFilling />,
        },
      ]}
    />
  )
}
