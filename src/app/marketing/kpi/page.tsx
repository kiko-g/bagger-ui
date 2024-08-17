import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { CircularProgressCard } from "@/components/marketing/kpi"

export default function KPIs() {
  const base = "marketing/kpi"

  return (
    <ComponentTypePage
      title="KPI Widgets"
      description={
        <p className="max-w-4xl mb-3 text-sm">
          Click the <strong>code</strong> tab buttons to see demos for every entry.
        </p>
      }
      components={[
        {
          name: "Circular Progress Card",
          path: `${base}/CircularProgressCard.tsx`,
          component: <CircularProgressCard success={293} failed={94} />,
        },
      ]}
    />
  )
}
