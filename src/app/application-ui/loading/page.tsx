import React from 'react'
import { ComponentTypePage } from '@/components/ComponentTypePage'
import { SkeletonCard, Spinner } from '@/components/showcase/application-ui/loading'

export default function Skeleton() {
  const base = 'application-ui/skeleton'

  return (
    <ComponentTypePage
      title="Skeleton"
      examples={[
        {
          name: 'Spinner',
          path: `${base}/Skeleton.tsx`,
          component: <Spinner />,
        },
        {
          name: 'Skeleton Card',
          path: `${base}/SkeletonCard.tsx`,
          component: <SkeletonCard />,
        },
      ]}
    />
  )
}
