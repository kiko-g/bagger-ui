import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { ProductOverviewSimple } from "@/components/ecommerce/product-overviews"

export default function ProductOverviews() {
  const base = "ecommerce/product-overviews"

  return (
    <ComponentTypePage
      title="Product Overviews"
      description={
        <p className="max-w-4xl mb-3 text-sm">
          Click the <strong>code</strong> tab buttons to see demos for every entry.
        </p>
      }
      components={[{ name: "Simple", path: `${base}/ProductOverviewSimple.tsx`, component: <ProductOverviewSimple /> }]}
    />
  )
}
