"use client"

export function SkeletonTable() {
  return (
    <div className="bg-background w-full overflow-hidden rounded-lg border">
      <div className="bg-accent grid grid-cols-5 gap-8 border-b p-4 text-sm">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="bg-muted h-4 w-full animate-pulse rounded" />
        ))}
      </div>

      <div className="divide-y">
        {Array.from({ length: 6 }).map((_, r) => (
          <div key={r} className="grid grid-cols-5 gap-8 px-4 py-3">
            {Array.from({ length: 5 }).map((_, c) => (
              <div key={c} className="bg-muted h-4 w-full animate-pulse rounded" />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
