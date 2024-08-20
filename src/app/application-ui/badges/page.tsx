import React from 'react'
import { ComponentTypePage } from '@/components/ComponentTypePage'
import { BadgeError, BadgeSimple, BadgeSuccess, BadgeOutline } from '@/components/application-ui/badges'
import { BadgeBeta } from '@/components/application-ui/badges/BadgeBeta'

export default function Badges() {
  const base = 'application-ui/badges'

  return (
    <ComponentTypePage
      title="Badges"
      components={[
        {
          name: 'Simple with Type',
          path: `${base}/BadgeSimple.tsx`,
          component: (
            <div className="flex w-full max-w-full flex-row flex-wrap items-center justify-center gap-3 xl:max-w-3xl">
              <BadgeSimple>
                <span className="text-sm">Simple</span>
              </BadgeSimple>
              <BadgeSimple type="info">
                <span className="text-sm">Info</span>
              </BadgeSimple>
              <BadgeSimple type="success">
                <span className="text-sm">Success</span>
              </BadgeSimple>
              <BadgeSimple type="warning">
                <span className="text-sm">Warning</span>
              </BadgeSimple>
              <BadgeSimple type="error">
                <span className="text-sm">Error</span>
              </BadgeSimple>
            </div>
          ),
        },
        {
          name: 'Outline with Type',
          path: `${base}/BadgeOutline.tsx`,
          component: (
            <div className="flex w-full max-w-full flex-row flex-wrap items-center justify-center gap-3 xl:max-w-3xl">
              <BadgeOutline noBorder>
                <span className="text-sm">No Border</span>
              </BadgeOutline>
              <BadgeOutline noBubble>
                <span className="text-sm">No Bubble</span>
              </BadgeOutline>
              <BadgeOutline type="info">
                <span className="text-sm">Info</span>
              </BadgeOutline>
              <BadgeOutline type="success">
                <span className="text-sm">Success</span>
              </BadgeOutline>
              <BadgeOutline type="warning">
                <span className="text-sm">Warning</span>
              </BadgeOutline>
              <BadgeOutline type="error">
                <span className="text-sm">Error</span>
              </BadgeOutline>
            </div>
          ),
        },
        {
          name: 'Success',
          path: `${base}/BadgeSuccess.tsx`,
          component: (
            <div className="flex w-full max-w-full flex-row flex-wrap items-center justify-center gap-3 xl:max-w-xl">
              <BadgeSuccess />
              <BadgeSuccess outline />
            </div>
          ),
        },
        {
          name: 'Error',
          path: `${base}/BadgeError.tsx`,
          component: (
            <div className="flex w-full max-w-full flex-row flex-wrap items-center justify-center gap-3 xl:max-w-xl">
              <BadgeError />
              <BadgeError outline />
            </div>
          ),
        },
        {
          name: 'Beta',
          path: `${base}/BadgeBeta.tsx`,
          component: (
            <div className="flex w-full max-w-full flex-row flex-wrap items-center justify-center gap-3 xl:max-w-xl">
              <BadgeBeta />
            </div>
          ),
        },
      ]}
    />
  )
}
