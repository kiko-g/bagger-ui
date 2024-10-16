import React from 'react'
import { ComponentTypePage } from '@/components/ComponentTypePage'
import { Badge } from '@/components/showcase/application-ui/badges/Badge'

export default function Badges() {
  const base = 'application-ui/badges'

  return (
    <ComponentTypePage
      title="Badges"
      components={[
        {
          name: 'Badge',
          path: `${base}/Badge.tsx`,
          component: (
            <div className="flex w-full max-w-full flex-row flex-wrap items-center justify-center gap-3 xl:max-w-3xl">
              <Badge outline size="sm" rounded="md" variant="pink">
                New
              </Badge>
            </div>
          ),
        },
        {
          name: 'Outline with Type',
          path: null,
          usage: `<Badge variant="error">Error</Badge>`,
          component: (
            <div className="flex w-full max-w-full flex-row flex-wrap items-center justify-center gap-3 xl:max-w-3xl">
              <Badge variant="error">Error</Badge>
              <Badge variant="warning">Warning</Badge>
            </div>
          ),
        },
        {
          name: 'Success',
          path: null,
          usage: `<Badge variant="success">Success</Badge>`,
          component: (
            <div className="flex w-full max-w-full flex-row flex-wrap items-center justify-center gap-3 xl:max-w-xl">
              <Badge variant="success">Success</Badge>
              <Badge variant="success" outline>
                Success
              </Badge>
            </div>
          ),
        },
        {
          name: 'Error',
          path: null,
          usage: `<Badge variant="error">Error</Badge>`,
          component: (
            <div className="flex w-full max-w-full flex-row flex-wrap items-center justify-center gap-3 xl:max-w-xl">
              <Badge variant="error">Error</Badge>
              <Badge variant="error" outline>
                Error
              </Badge>
            </div>
          ),
        },
        {
          name: 'Beta',
          path: null,
          usage: `<Badge size="sm">Beta</Badge>`,
          component: (
            <div className="flex w-full max-w-full flex-row flex-wrap items-center justify-center gap-3 xl:max-w-xl">
              <Badge size="sm">Beta</Badge>
              <Badge size="sm" rounded="full">
                Beta
              </Badge>
            </div>
          ),
        },
      ]}
    />
  )
}
