import React from 'react'
import { ComponentTypePage } from '@/components/ComponentTypePage'
import {
  ButtonSimple,
  ButtonFill,
  ButtonTranslate,
  ButtonSimpleBorder,
  ButtonScale,
  ButtonRotate,
  ButtonOutline,
  ButtonSimpleIcon,
  ButtonDisabled,
} from '@/components/showcase/application-ui/buttons'

export default function Buttons() {
  const base = 'application-ui/buttons'

  return (
    <ComponentTypePage
      title="Buttons"
      components={[
        {
          name: 'Simple',
          path: `${base}/ButtonSimple.tsx`,
          component: <ButtonSimple />,
        },
        {
          name: 'Simple w/ Border',
          path: `${base}/ButtonSimpleBorder.tsx`,
          component: <ButtonSimpleBorder />,
        },
        {
          name: 'Simple w/ Icon',
          path: `${base}/ButtonSimpleIcon.tsx`,
          component: <ButtonSimpleIcon />,
        },
        {
          name: 'Disabled',
          path: `${base}/ButtonDisabled.tsx`,
          component: <ButtonDisabled />,
        },
        {
          name: 'Outline',
          path: `${base}/ButtonOutline.tsx`,
          component: <ButtonOutline />,
        },
        {
          name: 'Fill Animation',
          path: `${base}/ButtonFill.tsx`,
          component: <ButtonFill />,
        },
        {
          name: 'Scale Animation',
          path: `${base}/ButtonScale.tsx`,
          component: <ButtonScale />,
        },
        {
          name: 'Rotate Animation',
          path: `${base}/ButtonRotate.tsx`,
          component: <ButtonRotate />,
        },
        {
          name: 'Translate Animation',
          path: `${base}/ButtonTranslate.tsx`,
          component: <ButtonTranslate />,
        },
      ]}
    />
  )
}
