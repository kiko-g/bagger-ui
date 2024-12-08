'use client'

export function WorkInProgressBadge() {
  return (
    <div className="hidden items-center justify-center gap-1.5 rounded-sm bg-transparent px-2 py-1.5 text-2xs font-normal leading-none transition dark:bg-amber-600/20 md:flex">
      <span aria-hidden="true" role="img" className="size-3">
        🚧
      </span>
      <span className="hidden lg:inline-flex">BaggerUI is still under development</span>
      <span className="inline-flex lg:hidden">WIP</span>
    </div>
  )
}
