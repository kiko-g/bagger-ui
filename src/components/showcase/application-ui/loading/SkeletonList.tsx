"use client"

export function SkeletonList() {
  return (
    <div className="bg-background w-full max-w-md rounded-lg border p-4">
      <div className="bg-muted mb-3 h-4 w-1/3 animate-pulse rounded" />
      <ul className="space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <li key={i} className="flex items-center gap-3">
            <div className="bg-muted h-10 w-10 animate-pulse rounded-full" />
            <div className="flex-1 space-y-2">
              <div className="bg-muted h-3 w-2/3 animate-pulse rounded" />
              <div className="bg-muted h-3 w-1/3 animate-pulse rounded" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
