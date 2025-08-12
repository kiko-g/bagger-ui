import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { ComponentSample } from "@/components/ComponentSample"

import { SkeletonCard } from "@/components/showcase/application-ui/loading/SkeletonCard"
import { LoadingSpinner } from "@/components/showcase/application-ui/loading/LoadingSpinner"

export default function Skeleton() {
  const base = "application-ui/skeleton"

  return (
    <ComponentTypePage
      title="Skeleton"
      sample={{
        nodes: [
          {
            item: "Setup",
            component: <ComponentSample name="skeleton" />,
          },
        ],
      }}
      examples={[
        {
          name: "Spinner",
          path: `${base}/Skeleton.tsx`,
          component: <LoadingSpinner />,
        },
        {
          name: "Skeleton Card",
          path: `${base}/SkeletonCard.tsx`,
          component: <SkeletonCard />,
        },
      ]}
    />
  )
}
