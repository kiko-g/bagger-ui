"use client"

export function InlineSpinner() {
  return (
    <div className="text-muted-foreground flex items-center gap-2 text-sm">
      <svg viewBox="0 0 24 24" className="h-4 w-4 animate-spin" aria-hidden>
        <circle className="opacity-10" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8V0A12 12 0 000 12h4z" />
      </svg>
      Loading…
    </div>
  )
}
