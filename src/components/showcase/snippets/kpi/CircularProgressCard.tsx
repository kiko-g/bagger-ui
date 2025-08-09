"use client"

type Props = {
  success: number
  failed: number
}

export function CircularProgressCard({ success, failed }: Props) {
  const completedRatio = success / (success + failed)
  const progress = Math.min(Math.max(completedRatio, 0), 1) * 100
  const diameter = 120 // Adjusted diameter value
  const strokeWidth = 7 // Adjusted strokeWidth value
  const radius = (diameter - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="relative max-w-full rounded bg-white/80 p-4 dark:bg-black/20 xl:max-w-xs">
      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Success Rate</h3>
      <p className="mt-1 min-h-20 text-sm">Ratio of completed actions vs. all the actions registered.</p>

      <div className="mt-2 flex items-center justify-center p-4">
        <svg viewBox={`0 0 ${diameter} ${diameter}`} xmlns="http://www.w3.org/2000/svg">
          <circle
            fill="none"
            stroke="currentColor"
            className="text-emerald-500 opacity-20"
            r={radius}
            cx={diameter / 2}
            cy={diameter / 2}
            strokeWidth={strokeWidth}
          />
          <circle
            fill="none"
            className="origin-center -rotate-90 transform stroke-current text-emerald-500"
            r={radius}
            cx={diameter / 2}
            cy={diameter / 2}
            strokeWidth={strokeWidth}
            strokeDashoffset={offset}
            strokeDasharray={circumference}
          />
        </svg>
        <div className="absolute flex w-full flex-col text-center">
          <span className="text-4xl font-bold">{`${progress.toFixed(1)}%`}</span>
          <span className="text-xl">
            {success}/{success + failed}
          </span>
        </div>
      </div>
    </div>
  )
}
