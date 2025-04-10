import React from 'react'
import { ComponentTypePage } from '@/components/ComponentTypePage'
import { ProductCardsSimple } from '@/components/showcase/snippets/product-cards'

export default function ProductLists() {
  const base = 'snippets/product-cards'

  return (
    <ComponentTypePage
      title="Product Cards"
      examples={[
        {
          name: 'Simple',
          path: `${base}/ProductCardsSimple.tsx`,
          component: <ProductCardsSimple />,
        },
      ]}
    />
  )
}
