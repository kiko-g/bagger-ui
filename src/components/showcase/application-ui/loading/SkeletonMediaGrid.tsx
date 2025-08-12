"use client"

export function SkeletonMediaGrid() {
  return (
    <div className="bg-background w-full space-y-3 rounded-md border p-4">
      <div className="flex items-center justify-between gap-3">
        <div className="bg-muted h-4 w-40 animate-pulse rounded" />
        <div className="bg-muted h-4 w-18 animate-pulse rounded" />
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-muted aspect-[4/3] animate-pulse rounded-md" />
        ))}
      </div>
    </div>
  )
}
