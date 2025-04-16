"use client"

type GridItem = {
  label: string
  value: number
  target: number
  color?: string
}

type Props = {
  items: GridItem[]
  title: string
}

export function ProgressGrid({ items, title }: Props) {
  return (
    <div className="relative max-w-full rounded bg-white/80 p-4 dark:bg-black/20 xl:max-w-xs">
      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{title}</h3>
      <p className="mt-1 min-h-[5rem] text-sm">Grid view of multiple progress indicators at a glance.</p>

      <div className="mt-2 grid grid-cols-2 gap-4 p-2">
        {items.map((item, index) => {
          const percentage = Math.min(Math.max((item.value / item.target) * 100, 0), 100)
          const color = item.color || "bg-teal-500"

          return (
            <div key={index} className="flex flex-col">
              <div className="mb-1 flex justify-between text-sm">
                <span className="truncate font-medium">{item.label}</span>
                <span className="text-gray-500">{percentage.toFixed(0)}%</span>
              </div>

              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                  className={`h-full ${color} rounded-full transition-all duration-500`}
                  style={{ width: `${percentage}%` }}
                />
              </div>

              <div className="mt-1 text-right text-xs text-gray-500">
                {item.value.toLocaleString()} / {item.target.toLocaleString()}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
