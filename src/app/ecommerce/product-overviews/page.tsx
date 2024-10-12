import React from 'react'
import { ComponentTypePage } from '@/components/ComponentTypePage'
import { ProductOverviewSimple } from '@/components/showcase/ecommerce/product-overviews'

export default function ProductOverviews() {
  const base = 'ecommerce/product-overviews'

  return (
    <ComponentTypePage
      title="Product Overviews"
      components={[
        {
          name: 'Simple',
          path: `${base}/ProductOverviewSimple.tsx`,
          component: <ProductOverviewSimple />,
        },
      ]}
    />
  )
}
