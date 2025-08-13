"use client"

type MetricData = {
  label: string
  value: number
  change: number
  data: number[]
}

type Props = {
  title: string
  metrics: MetricData[]
}

export function MultiMetric({ title, metrics }: Props) {
  return (
    <div className="relative max-w-full rounded bg-white/80 p-4 xl:max-w-xs dark:bg-black/20">
      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{title}</h3>
      <p className="mt-1 min-h-20 text-sm">Overview of multiple related performance metrics.</p>

      <div className="mt-2 space-y-4">
        {metrics.map((metric, index) => {
          const isPositive = metric.change >= 0
          const max = Math.max(...metric.data)

          return (
            <div key={index} className="border-t pt-3 first:border-0 first:pt-0">
              <div className="flex items-baseline justify-between">
                <span className="font-medium text-zinc-700 dark:text-zinc-300">{metric.label}</span>
                <span className={`text-xs ${isPositive ? "text-green-500" : "text-red-500"}`}>
                  {isPositive ? "↑" : "↓"} {Math.abs(metric.change)}%
                </span>
              </div>

              <div className="mt-1 flex items-center space-x-2">
                <span className="text-xl font-semibold">{metric.value.toLocaleString()}</span>

                <div className="flex h-6 flex-1 items-end space-x-0.5">
                  {metric.data.map((value, i) => {
                    const height = max > 0 ? (value / max) * 100 : 0
                    return (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-purple-400 opacity-80 dark:bg-purple-600"
                        style={{ height: `${height}%` }}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
