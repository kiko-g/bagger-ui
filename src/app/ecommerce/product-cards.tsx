import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { ProductCardsSimple } from "@/components/ecommerce/product-cards"

export default function ProductLists() {
  const base = "ecommerce/product-cards"

  return (
    <ComponentTypePage
      title="Product Cards"
      description={
        <p className="max-w-4xl mb-3 text-sm">
          Click the <strong>code</strong> tab buttons to see demos for every entry.
        </p>
      }
      components={[{ name: "Simple", path: `${base}/ProductCardsSimple.tsx`, component: <ProductCardsSimple /> }]}
    />
  )
}
