"use client"

type Segment = {
  value: number
  label: string
  color: string
}

type Props = {
  segments: Segment[]
  title: string
  total?: number
}

export function DonutChart({ segments, title, total }: Props) {
  const calculatedTotal = total ?? segments.reduce((sum, segment) => sum + segment.value, 0)
  let currentAngle = 0

  return (
    <div className="relative max-w-full rounded bg-white/80 p-4 dark:bg-black/20 xl:max-w-xs">
      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{title}</h3>
      <p className="mt-1 min-h-[5rem] text-sm">Distribution of values across different categories.</p>

      <div className="mt-2 flex flex-col items-center p-4">
        <div className="relative h-32 w-32">
          <svg viewBox="0 0 100 100" className="h-full w-full">
            {segments.map((segment, index) => {
              const percentage = (segment.value / calculatedTotal) * 100
              const angle = (percentage / 100) * 360
              const startAngle = currentAngle
              const endAngle = currentAngle + angle
              currentAngle = endAngle

              // Calculate the SVG arc path
              const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180)
              const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180)
              const x2 = 50 + 40 * Math.cos((endAngle * Math.PI) / 180)
              const y2 = 50 + 40 * Math.sin((endAngle * Math.PI) / 180)

              // Determine if the arc should be drawn the long way around
              const largeArcFlag = angle > 180 ? 1 : 0

              return (
                <path
                  key={index}
                  d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                  fill={segment.color}
                  className="transition-all duration-500"
                />
              )
            })}
            <circle cx="50" cy="50" r="25" fill="white" className="dark:fill-gray-900" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">{calculatedTotal.toLocaleString()}</span>
            <span className="text-xs text-gray-500">Total</span>
          </div>
        </div>

        <div className="mt-4 grid w-full grid-cols-2 gap-2">
          {segments.map((segment, index) => (
            <div key={index} className="flex items-center text-sm">
              <div className="mr-2 h-3 w-3 rounded-full" style={{ backgroundColor: segment.color }} />
              <span className="mr-1">{segment.label}:</span>
              <span className="font-medium">{segment.value.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
