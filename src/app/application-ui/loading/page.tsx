import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { SkeletonCard, Spinner } from "@/components/application-ui/loading"

export default function Loading() {
  const base = "application-ui/loading"

  return (
    <ComponentTypePage
      title="Loading"
      description={
        <p className="max-w-4xl mb-3 text-sm">
          Click the <strong>code</strong> tab buttons to see demos for every entry.
        </p>
      }
      components={[
        { name: "Spinner", path: `${base}/Spinner.tsx`, component: <Spinner /> },
        { name: "Skeleton Card", path: `${base}/SkeletonCard.tsx`, component: <SkeletonCard /> },
      ]}
    />
  )
}
