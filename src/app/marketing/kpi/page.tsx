import React from 'react'
import { ComponentTypePage } from '@/components/ComponentTypePage'
import { CircularProgressCard } from '@/components/showcase/marketing/kpi'

export default function KPIs() {
  const base = 'marketing/kpi'

  return (
    <ComponentTypePage
      title="KPI Widgets"
      examples={[
        {
          name: 'Circular Progress Card',
          path: `${base}/CircularProgressCard.tsx`,
          component: <CircularProgressCard success={293} failed={94} />,
        },
      ]}
    />
  )
}
