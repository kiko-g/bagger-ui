import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { CircularProgressCard } from "@/components/showcase/snippets/kpi/CircularProgressCard"
import { BarComparison } from "@/components/showcase/snippets/kpi/BarComparison"
import { TrendLine } from "@/components/showcase/snippets/kpi/TrendLine"
import { RadialGauge } from "@/components/showcase/snippets/kpi/RadialGauge"
import { ProgressGrid } from "@/components/showcase/snippets/kpi/ProgressGrid"
import { MultiMetric } from "@/components/showcase/snippets/kpi/MultiMetric"
import { Heatmap } from "@/components/showcase/snippets/kpi/Heatmap"
import { DonutChart } from "@/components/showcase/snippets/kpi/DonutChart"
import { ComparisonCard } from "@/components/showcase/snippets/kpi/ComparisonCard"

export default function KPIs() {
  const base = "snippets/kpi"

  return (
    <ComponentTypePage
      title="KPI Widgets"
      combos={[
        {
          name: "Circular Progress Card",
          path: `${base}/CircularProgressCard.tsx`,
          component: <CircularProgressCard success={293} failed={94} />,
        },
        {
          name: "Bar Comparison",
          path: `${base}/BarCompa rison.tsx`,
          component: <BarComparison current={293} target={400} label="Sales" />,
        },
        {
          name: "Trend Line",
          path: `${base}/TrendLine.tsx`,
          component: (
            <TrendLine data={[293, 400, 350, 500, 450]} label="Sales" currentValue={293} changePercentage={17.6} />
          ),
        },
        {
          name: "Radial Gauge",
          path: `${base}/RadialGauge.tsx`,
          component: <RadialGauge value={293} min={0} max={400} label="Sales" />,
        },
        {
          name: "Progress Grid",
          path: `${base}/ProgressGrid.tsx`,
          component: <ProgressGrid items={[{ label: "Sales", value: 293, target: 400 }]} title="Sales" />,
        },
        {
          name: "Multi Metric",
          path: `${base}/MultiMetric.tsx`,
          component: (
            <MultiMetric
              title="Sales"
              metrics={[{ label: "Sales", value: 293, change: 17.6, data: [293, 400, 350, 500, 450] }]}
            />
          ),
        },
        {
          name: "Heatmap",
          path: `${base}/Heatmap.tsx`,
          component: (
            <Heatmap
              data={[{ label: "Sales", values: [293, 400, 350, 500, 450] }]}
              title="Sales"
              columnLabels={["Sales", "Sales", "Sales", "Sales", "Sales"]}
            />
          ),
        },
        {
          name: "Donut Chart",
          path: `${base}/DonutChart.tsx`,
          component: <DonutChart segments={[{ label: "Sales", value: 293, color: "bg-blue-500" }]} title="Sales" />,
        },
        {
          name: "Comparison Card",
          path: `${base}/ComparisonCard.tsx`,
          component: <ComparisonCard current={293} previous={200} label="Sales" />,
        },
      ]}
    />
  )
}
