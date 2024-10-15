'use client'

export function WorkInProgressBadge() {
  return (
    <div className="flex items-center justify-center gap-1.5 rounded-sm border border-amber-600/20 bg-amber-600/10 px-2 py-1.5 text-2xs font-normal leading-none transition dark:border-amber-600/50 dark:bg-amber-600/20">
      <span aria-hidden="true" role="img" className="h-3 w-3">
        🚧
      </span>
      <span>BaggerUI is a Work in Progress</span>
    </div>
  )
}
