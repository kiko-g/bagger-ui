import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"

import { ProductOverviewSimple } from "@/components/showcase/snippets/product-overviews/ProductOverviewSimple"

export default function ProductOverviews() {
  const base = "snippets/product-overviews"

  return (
    <ComponentTypePage
      title="Product Overviews"
      examples={[
        {
          name: "Simple",
          path: `${base}/ProductOverviewSimple.tsx`,
          component: <ProductOverviewSimple />,
        },
      ]}
    />
  )
}
