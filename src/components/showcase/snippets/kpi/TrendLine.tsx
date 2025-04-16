"use client"

type Props = {
  data: number[]
  label: string
  currentValue: number
  changePercentage: number
}

export function TrendLine({ data, label, currentValue, changePercentage }: Props) {
  const isPositive = changePercentage >= 0
  const max = Math.max(...data)

  return (
    <div className="relative max-w-full rounded bg-white/80 p-4 dark:bg-black/20 xl:max-w-xs">
      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{label}</h3>
      <p className="mt-1 min-h-[5rem] text-sm">Tracking performance trends over the recent period.</p>

      <div className="mt-2 p-4">
        <div className="flex items-baseline justify-between">
          <span className="text-3xl font-bold">{currentValue.toLocaleString()}</span>
          <span className={`text-sm font-medium ${isPositive ? "text-green-500" : "text-red-500"}`}>
            {isPositive ? "↑" : "↓"} {Math.abs(changePercentage).toFixed(1)}%
          </span>
        </div>

        <div className="mt-4 flex h-16 items-end space-x-1">
          {data.map((value, index) => {
            const height = (value / max) * 100
            return (
              <div
                key={index}
                className="flex-1 rounded-t bg-indigo-500 transition-all duration-300"
                style={{ height: `${height}%` }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
