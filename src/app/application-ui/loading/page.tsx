import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { ComponentSample } from "@/components/ComponentSample"

import { SkeletonCard } from "@/components/showcase/application-ui/loading/SkeletonCard"
import { LoadingSpinner } from "@/components/showcase/application-ui/loading/LoadingSpinner"
import { SkeletonList } from "@/components/showcase/application-ui/loading/SkeletonList"
import { SkeletonTable } from "@/components/showcase/application-ui/loading/SkeletonTable"
import { SkeletonForm } from "@/components/showcase/application-ui/loading/SkeletonForm"
import { SkeletonMediaGrid } from "@/components/showcase/application-ui/loading/SkeletonMediaGrid"
import { InlineSpinner } from "@/components/showcase/application-ui/loading/InlineSpinner"
import { ValidateTxButtonWithSpinner } from "@/components/showcase/application-ui/loading/ValidateTxButtonWithSpinner"
import { SkeletonChart } from "@/components/showcase/application-ui/loading/SkeletonChart"
import { SkeletonProductCard } from "@/components/showcase/application-ui/loading/SkeletonProductCard"

export default function Skeleton() {
  const base = "application-ui/loading"

  return (
    <ComponentTypePage
      title="Loading"
      sample={{
        nodes: [
          {
            item: "Setup",
            component: <ComponentSample name="skeleton" />,
          },
        ],
      }}
      examples={[
        { name: "Spinner", path: `${base}/LoadingSpinner.tsx`, component: <LoadingSpinner /> },
        { name: "Inline Spinner", path: `${base}/InlineSpinner.tsx`, component: <InlineSpinner /> },
        { name: "Skeleton Card", path: `${base}/SkeletonCard.tsx`, component: <SkeletonCard /> },
        { name: "Skeleton List", path: `${base}/SkeletonList.tsx`, component: <SkeletonList /> },
        { name: "Skeleton Table", path: `${base}/SkeletonTable.tsx`, component: <SkeletonTable /> },
        { name: "Skeleton Form", path: `${base}/SkeletonForm.tsx`, component: <SkeletonForm /> },
        { name: "Skeleton Chart", path: `${base}/SkeletonChart.tsx`, component: <SkeletonChart /> },
        { name: "Skeleton Media Grid", path: `${base}/SkeletonMediaGrid.tsx`, component: <SkeletonMediaGrid /> },
        { name: "Skeleton Product Card", path: `${base}/SkeletonProductCard.tsx`, component: <SkeletonProductCard /> },
      ]}
      combos={[
        {
          name: "Validate Transactions",
          path: `${base}/ValidateTxButtonWithSpinner.tsx`,
          component: <ValidateTxButtonWithSpinner />,
        },
      ]}
    />
  )
}
