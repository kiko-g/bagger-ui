"use client"

type HeatmapData = {
  label: string
  values: number[]
}

type Props = {
  data: HeatmapData[]
  title: string
  columnLabels: string[]
  maxValue?: number
  colorScale?: string[]
}

export function Heatmap({
  data,
  title,
  columnLabels,
  maxValue,
  colorScale = ["#f7fafc", "#60a5fa", "#2563eb", "#1e40af"],
}: Props) {
  const calculatedMax = maxValue ?? Math.max(...data.flatMap((d) => d.values))

  // Function to get color based on value
  const getColor = (value: number) => {
    const percentage = calculatedMax > 0 ? value / calculatedMax : 0

    if (colorScale.length === 2) {
      // Linear interpolation between two colors
      return `linear-gradient(to right, ${colorScale[0]} 0%, ${colorScale[1]} 100%)`
    } else if (colorScale.length > 2) {
      // Use the color scale based on percentage
      const index = Math.min(Math.floor(percentage * (colorScale.length - 1)), colorScale.length - 2)
      const ratio = percentage * (colorScale.length - 1) - index
      return `linear-gradient(to right, ${colorScale[index]} 0%, ${colorScale[index + 1]} 100%)`
    }

    return colorScale[0]
  }

  return (
    <div className="relative max-w-full rounded bg-white/80 p-4 dark:bg-black/20 xl:max-w-xs">
      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{title}</h3>
      <p className="mt-1 min-h-20 text-sm">Visualizing data intensity across multiple dimensions.</p>

      <div className="mt-2 p-2">
        <div className="mb-1 flex">
          <div className="w-20"></div>
          {columnLabels.map((label, index) => (
            <div key={index} className="flex-1 truncate px-1 text-center text-xs">
              {label}
            </div>
          ))}
        </div>

        {data.map((row, rowIndex) => (
          <div key={rowIndex} className="mb-1 flex items-center">
            <div className="w-20 truncate pr-2 text-xs">{row.label}</div>
            {row.values.map((value, colIndex) => {
              const percentage = calculatedMax > 0 ? (value / calculatedMax) * 100 : 0

              return (
                <div key={colIndex} className="flex-1 px-0.5">
                  <div
                    className="flex h-8 w-full items-center justify-center rounded"
                    style={{
                      background: getColor(value),
                      opacity: 0.2 + (percentage * 0.8) / 100,
                    }}
                  >
                    <span className="text-xs font-medium text-gray-800 dark:text-white">{value}</span>
                  </div>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
