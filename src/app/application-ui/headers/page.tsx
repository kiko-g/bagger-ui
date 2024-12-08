import React from 'react'
import { ComponentTypePage } from '@/components/ComponentTypePage'
import { HeaderEditor } from '@/components/showcase/application-ui/headers/HeaderEditor'

export default function Headers() {
  const base = 'application-ui/headers'

  return (
    <ComponentTypePage
      title="Headers"
      combos={[
        {
          name: 'Editor Header',
          path: `${base}/HeaderEditor.tsx`,
          component: (
            <div className="flex w-full max-w-full flex-row flex-wrap items-center justify-center gap-3 xl:max-w-3xl">
              <HeaderEditor />
            </div>
          ),
        },
      ]}
    />
  )
}
