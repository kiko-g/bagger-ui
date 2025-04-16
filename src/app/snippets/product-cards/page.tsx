import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"

import { ProductCardsPlayful } from "@/components/showcase/snippets/product-cards/ProductCardsPlayful"
import { ProductCardsElegant } from "@/components/showcase/snippets/product-cards/ProductCardsElegant"
import { ProductCardsHorizontal } from "@/components/showcase/snippets/product-cards/ProductCardsHorizontal"
import { ProductCardsModern } from "@/components/showcase/snippets/product-cards/ProductCardsModern"
import { ProductCardsMinimal } from "@/components/showcase/snippets/product-cards/ProductCardsMinimal"

export default function ProductLists() {
  const base = "snippets/product-cards"

  return (
    <ComponentTypePage
      title="Product Cards"
      combos={[
        {
          name: "Minimal",
          path: `${base}/ProductCardsMinimal.tsx`,
          component: <ProductCardsMinimal />,
        },
        {
          name: "Modern",
          path: `${base}/ProductCardsModern.tsx`,
          component: <ProductCardsModern />,
        },
        {
          name: "Horizontal",
          path: `${base}/ProductCardsHorizontal.tsx`,
          component: <ProductCardsHorizontal />,
        },

        {
          name: "Elegant",
          path: `${base}/ProductCardsElegant.tsx`,
          component: <ProductCardsElegant />,
        },
        {
          name: "Playful",
          path: `${base}/ProductCardsPlayful.tsx`,
          component: <ProductCardsPlayful />,
        },
      ]}
    />
  )
}
