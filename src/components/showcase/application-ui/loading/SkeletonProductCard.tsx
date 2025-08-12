"use client"

export function SkeletonProductCard() {
  return (
    <div className="bg-background w-full max-w-xs space-y-3 rounded-lg border p-4">
      <div className="bg-muted aspect-square w-full animate-pulse rounded-md" />
      <div className="bg-muted h-4 w-2/3 animate-pulse rounded" />
      <div className="bg-muted h-3 w-1/2 animate-pulse rounded" />
      <div className="flex items-center gap-2">
        <div className="bg-muted h-8 w-20 animate-pulse rounded-md" />
        <div className="bg-muted h-8 w-14 animate-pulse rounded-md" />
      </div>
    </div>
  )
}
