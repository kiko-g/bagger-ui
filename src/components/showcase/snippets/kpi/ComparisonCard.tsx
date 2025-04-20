"use client"

type Props = {
  current: number
  previous: number
  label: string
  format?: (value: number) => string
}

export function ComparisonCard({ current, previous, label, format = (v) => v.toLocaleString() }: Props) {
  const difference = current - previous
  const percentChange = previous !== 0 ? (difference / previous) * 100 : 0
  const isPositive = difference >= 0

  return (
    <div className="relative max-w-full rounded bg-white/80 p-4 xl:max-w-xs dark:bg-black/20">
      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{label}</h3>
      <p className="mt-1 min-h-[5rem] text-sm">Comparing current period with previous period performance.</p>

      <div className="mt-2 p-4">
        <div className="text-4xl font-bold">{format(current)}</div>

        <div className="mt-4 flex items-center space-x-2">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              isPositive ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
            } dark:bg-opacity-20`}
          >
            {isPositive ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>

          <div>
            <span className={isPositive ? "text-green-600" : "text-destructive"}>
              {isPositive ? "+" : ""}
              {format(difference)} ({Math.abs(percentChange).toFixed(1)}%)
            </span>
            <div className="text-muted-foreground text-xs">vs. previous period</div>
          </div>
        </div>
      </div>
    </div>
  )
}
