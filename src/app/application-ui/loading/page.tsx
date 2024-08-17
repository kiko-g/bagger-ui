import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { SkeletonCard, Spinner } from "@/components/application-ui/loading"

export default function Loading() {
  const base = "application-ui/loading"

  return (
    <ComponentTypePage
      title="Loading"
      components={[
        { name: "Spinner", path: `${base}/Spinner.tsx`, component: <Spinner /> },
        { name: "Skeleton Card", path: `${base}/SkeletonCard.tsx`, component: <SkeletonCard /> },
      ]}
    />
  )
}
