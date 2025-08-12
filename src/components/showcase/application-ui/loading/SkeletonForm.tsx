"use client"

export function SkeletonForm() {
  return (
    <div className="bg-background w-full max-w-md space-y-4 rounded-lg border p-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="space-y-2">
          <div className="bg-muted h-3 w-24 animate-pulse rounded" />
          <div className="bg-muted h-9 w-full animate-pulse rounded-md" />
        </div>
      ))}
      <div className="flex justify-end gap-2">
        <div className="bg-muted h-8 w-20 animate-pulse rounded-md" />
        <div className="bg-muted h-8 w-24 animate-pulse rounded-md" />
      </div>
    </div>
  )
}
