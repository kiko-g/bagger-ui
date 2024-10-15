'use client'

export function WorkInProgressBadge() {
  return (
    <div className="flex items-center justify-center gap-1.5 rounded-sm bg-amber-600/20 px-2 py-1.5 text-2xs font-normal leading-none transition dark:bg-amber-600/50">
      <span aria-hidden="true" role="img" className="h-3 w-3">
        🚧
      </span>
      <span className="hidden lg:inline-flex">BaggerUI is a Work in Progress</span>
      <span className="inline-flex lg:hidden">WIP</span>
    </div>
  )
}
