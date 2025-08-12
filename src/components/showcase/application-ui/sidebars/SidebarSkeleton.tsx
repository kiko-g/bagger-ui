"use client"

export function SidebarSkeleton() {
  return (
    <div className="bg-background flex w-full rounded-lg border">
      <div className="w-64 border-r p-3">
        <div className="bg-muted mb-3 h-8 w-full animate-pulse rounded" />

        <ul className="space-y-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className="bg-muted h-5 w-5 flex-shrink-0 animate-pulse rounded" />
              <div
                className="bg-muted h-3 animate-pulse rounded"
                style={{ width: `${30 + i * Math.random() * 15}%` }}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 p-6">
        <div className="bg-muted mb-4 h-8 w-40 animate-pulse rounded" />
        <div className="space-y-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-muted h-4 w-full animate-pulse rounded" />
          ))}
        </div>
      </div>
    </div>
  )
}
