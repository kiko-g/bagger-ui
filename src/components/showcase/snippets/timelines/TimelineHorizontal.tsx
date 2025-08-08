"use client"

import { CheckIcon } from "lucide-react"

type Step = {
  id: number
  label: string
  complete?: boolean
  current?: boolean
}

const steps: Step[] = [
  { id: 1, label: "Cart", complete: true },
  { id: 2, label: "Shipping", complete: true },
  { id: 3, label: "Payment", current: true },
  { id: 4, label: "Review" },
]

export function TimelineHorizontal() {
  const completedCount = steps.filter((s) => s.complete).length
  const hasCurrent = steps.some((s) => s.current)
  const progressSegments = completedCount + (hasCurrent ? 0.5 : 0)
  const totalSegments = Math.max(steps.length - 1, 1)
  const progressPercent = Math.min(100, Math.max(0, (progressSegments / totalSegments) * 100))

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="relative py-6">
        <div className="bg-border absolute top-1/2 right-0 left-0 h-0.5 -translate-y-1/2" aria-hidden />
        <div
          className="absolute top-1/2 left-0 h-0.5 -translate-y-1/2 bg-emerald-600 transition-all"
          style={{ width: `${progressPercent}%` }}
          aria-hidden
        />

        <ol className="relative z-10 flex items-center justify-between">
          {steps.map((step) => (
            <li key={step.id} className="flex items-center">
              <div
                className={
                  step.complete
                    ? "flex size-8 items-center justify-center rounded-full bg-emerald-600 text-white"
                    : step.current
                      ? "bg-background flex size-8 items-center justify-center rounded-full border-2 border-emerald-600 text-emerald-600"
                      : "border-muted-foreground/30 text-muted-foreground bg-background flex size-8 items-center justify-center rounded-full border"
                }
              >
                {step.complete ? (
                  <CheckIcon className="size-4" />
                ) : (
                  <span className="text-xs font-medium">{step.id}</span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-2 flex items-start justify-between">
        {steps.map((step) => (
          <span
            key={`label-${step.id}`}
            className={
              step.current
                ? "text-foreground text-xs font-medium"
                : step.complete
                  ? "text-xs text-emerald-700 dark:text-emerald-500"
                  : "text-muted-foreground text-xs"
            }
          >
            {step.label}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TimelineHorizontal
