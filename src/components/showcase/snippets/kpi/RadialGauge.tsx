"use client"

type Props = {
  value: number
  min: number
  max: number
  label: string
  colorRanges?: { threshold: number; color: string }[]
}

export function RadialGauge({ value, min, max, label, colorRanges = [] }: Props) {
  const normalizedValue = Math.min(Math.max(value, min), max)
  const percentage = ((normalizedValue - min) / (max - min)) * 100

  const diameter = 120
  const strokeWidth = 10
  const radius = (diameter - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius

  // Only show 75% of the circle (270 degrees)
  const maxAngle = 270
  const offset = circumference - (percentage / 100) * (circumference * (maxAngle / 360))

  // Determine color based on ranges or default to blue
  let color = "text-blue-500"
  for (const range of colorRanges) {
    if (percentage <= range.threshold) {
      color = range.color
      break
    }
  }

  return (
    <div className="relative max-w-full rounded bg-white/80 p-4 xl:max-w-xs dark:bg-black/20">
      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{label}</h3>
      <p className="mt-1 min-h-20 text-sm">Measuring current value within a defined range.</p>

      <div className="mt-2 flex items-center justify-center p-4">
        <div className="relative">
          <svg width={diameter} height={diameter} className="-rotate-135 transform">
            <circle
              fill="none"
              stroke="currentColor"
              className="text-gray-200 dark:text-gray-700"
              r={radius}
              cx={diameter / 2}
              cy={diameter / 2}
              strokeWidth={strokeWidth}
              strokeDasharray={`${circumference * (maxAngle / 360)} ${circumference}`}
            />
            <circle
              fill="none"
              stroke="currentColor"
              className={color}
              r={radius}
              cx={diameter / 2}
              cy={diameter / 2}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="rotate-0 text-3xl font-bold">{value.toLocaleString()}</span>
            <span className="rotate-0 text-xs text-gray-500">
              {min} - {max}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
