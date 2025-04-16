"use client"

type Props = {
  current: number
  target: number
  label: string
}

export function BarComparison({ current, target, label }: Props) {
  const percentage = Math.min(Math.max((current / target) * 100, 0), 100)

  return (
    <div className="relative max-w-full rounded bg-white/80 p-4 dark:bg-black/20 xl:max-w-xs">
      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{label}</h3>
      <p className="mt-1 min-h-[5rem] text-sm">Comparing current performance against target goals.</p>

      <div className="mt-2 p-4">
        <div className="mb-2 flex items-end justify-between">
          <span className="text-3xl font-bold">{current.toLocaleString()}</span>
          <span className="text-sm text-zinc-500">Target: {target.toLocaleString()}</span>
        </div>

        <div className="h-4 w-full overflow-hidden rounded-full bg-blue-100 dark:bg-blue-900/30">
          <div
            className="h-full rounded-full bg-blue-500 transition-all duration-500 ease-in-out"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div className="mt-2 text-right text-sm">
          <span className={percentage >= 100 ? "text-green-500" : "text-amber-500"}>
            {percentage.toFixed(1)}% of target
          </span>
        </div>
      </div>
    </div>
  )
}
