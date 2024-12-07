import React from 'react'
import { ComponentTypePage } from '@/components/ComponentTypePage'

import { Button } from '@/components/ui/button'
import { ButtonDefault } from '@/components/showcase/application-ui/buttons/ButtonDefault'
import { ButtonSecondary } from '@/components/showcase/application-ui/buttons/ButtonSecondary'
import { ButtonOutline } from '@/components/showcase/application-ui/buttons/ButtonOutline'
import { ButtonWithIcon } from '@/components/showcase/application-ui/buttons/ButtonWithIcon'
import { ButtonIcon } from '@/components/showcase/application-ui/buttons/ButtonIcon'
import { ButtonStatus } from '@/components/showcase/application-ui/buttons/ButtonStatus'
import { ButtonDisabled } from '@/components/showcase/application-ui/buttons/ButtonDisabled'
import { ButtonWithAnimation } from '@/components/showcase/application-ui/buttons/ButtonWithAnimation'
import { ButtonFilling } from '@/components/showcase/application-ui/buttons/ButtonFilling'
import { ButtonFlat } from '@/components/showcase/application-ui/buttons/ButtonFlat'

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
          name: 'Status',
          path: `${base}/ButtonStatus.tsx`,
          component: <ButtonStatus />,
        },
        {
          name: 'Icon',
          path: `${base}/ButtonIcon.tsx`,
          component: <ButtonIcon />,
        },
        {
          name: 'Flat',
          path: `${base}/ButtonFlat.tsx`,
          component: <ButtonFlat />,
        },
        {
          name: 'Disabled',
          path: `${base}/ButtonDisabled.tsx`,
          component: <ButtonDisabled />,
        },
      ]}
      combos={[
        {
          name: 'With Icon',
          path: `${base}/ButtonWithIcon.tsx`,
          component: <ButtonWithIcon />,
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
