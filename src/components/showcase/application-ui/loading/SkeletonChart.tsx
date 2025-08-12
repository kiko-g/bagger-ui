"use client"

export function SkeletonChart() {
  return (
    <div className="bg-background w-full max-w-xl space-y-3 rounded-lg border p-4">
      <div className="bg-muted h-4 w-1/3 animate-pulse rounded" />
      <div className="grid grid-cols-12 items-end gap-1">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="bg-muted mx-auto w-full animate-pulse rounded"
            style={{ height: `${50 + (i % 12) * 20}px` }}
          />
        ))}
      </div>
    </div>
  )
}
