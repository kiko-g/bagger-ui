"use client"

import { Badge } from "@/components/ui/badge"

type TimelineEvent = {
  id: string
  time: string
  title: string
  description?: string
  status?: "default" | "info" | "success" | "warning" | "destructive"
}

const events: TimelineEvent[] = [
  {
    id: "1",
    time: "09:10",
    title: "Order received",
    description: "We have received your order and it's now being processed.",
    status: "info",
  },
  {
    id: "2",
    time: "10:22",
    title: "Payment confirmed",
    description: "Your payment was validated successfully.",
    status: "success",
  },
  {
    id: "3",
    time: "12:05",
    title: "Packed",
    description: "Your items were securely packed and are ready to ship.",
    status: "default",
  },
  {
    id: "4",
    time: "15:40",
    title: "Shipped",
    description: "The package left our facility and is on the way.",
    status: "warning",
  },
]

export function TimelineVertical() {
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="bg-border absolute top-0 bottom-0 left-[11px] w-px" aria-hidden />

      <ul className="space-y-6">
        {events.map((event, index) => (
          <li key={event.id} className="relative flex gap-4 pl-8">
            <div className="bg-background border-foreground/20 absolute top-1 left-0 flex size-6 items-center justify-center rounded-full border">
              <div className="bg-foreground size-2 rounded-full" />
            </div>

            <div className="flex min-w-16 flex-col items-start pt-0.5">
              <span className="text-muted-foreground text-xs tabular-nums">{event.time}</span>
            </div>

            <div className="flex-1">
              <div className="mb-1 flex items-center gap-2">
                <h4 className="text-sm leading-tight font-semibold">{event.title}</h4>
                {event.status && labelForStatus(event.status) && (
                  <Badge variant={badgeVariant(event.status)} className="h-5 px-1.5 text-[10px]">
                    {labelForStatus(event.status)}
                  </Badge>
                )}
              </div>
              {event.description && <p className="text-muted-foreground text-sm leading-snug">{event.description}</p>}
              {index < events.length - 1 && <div className="mt-3" />}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function badgeVariant(status: TimelineEvent["status"]) {
  switch (status) {
    case "success":
      return "success"
    case "warning":
      return "warning"
    case "destructive":
      return "destructive"
    case "info":
      return "secondary"
    default:
      return "outline"
  }
}

function labelForStatus(status: NonNullable<TimelineEvent["status"]>) {
  switch (status) {
    case "success":
      return "Success"
    case "warning":
      return "Pending"
    case "destructive":
      return "Failed"
    case "info":
      return "Info"
    default:
      return "" as never
  }
}

export default TimelineVertical
