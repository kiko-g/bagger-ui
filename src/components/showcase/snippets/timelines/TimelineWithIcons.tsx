"use client"

import { Badge } from "@/components/ui/badge"
import { CheckCircle2Icon, ClockIcon, PackageIcon, XCircleIcon } from "lucide-react"

type IconTimelineEvent = {
  id: string
  time: string
  title: string
  description?: string
  status: "success" | "pending" | "failed" | "shipped"
}

const events: IconTimelineEvent[] = [
  { id: "1", time: "08:30", title: "Order placed", description: "Initiated by customer.", status: "pending" },
  { id: "2", time: "09:20", title: "Payment authorized", description: "Visa •••• 4242", status: "success" },
  { id: "3", time: "11:15", title: "Packed", description: "Warehouse A", status: "success" },
  { id: "4", time: "14:05", title: "Shipped", description: "Tracking #1Z999AA10123456784", status: "shipped" },
]

export function TimelineWithIcons() {
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="bg-border absolute top-0 bottom-0 left-[15px] w-px" aria-hidden />

      <ul className="space-y-6">
        {events.map((event) => (
          <li key={event.id} className="relative flex gap-4 pl-10">
            <div className="bg-background absolute top-0 left-0 flex size-8 items-center justify-center rounded-full border">
              {statusIcon(event.status)}
            </div>
            <div className="min-w-16 pt-1">
              <span className="text-muted-foreground text-xs tabular-nums">{event.time}</span>
            </div>
            <div className="flex-1">
              <div className="mb-1 flex items-center gap-2">
                <h4 className="text-sm leading-tight font-semibold">{event.title}</h4>
                <Badge variant={badgeVariant(event.status)} className="h-5 px-1.5 text-[10px]">
                  {labelForStatus(event.status)}
                </Badge>
              </div>
              {event.description && <p className="text-muted-foreground text-sm leading-snug">{event.description}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function statusIcon(status: IconTimelineEvent["status"]) {
  const base = "size-4"
  switch (status) {
    case "success":
      return <CheckCircle2Icon className={`text-emerald-600 dark:text-emerald-500 ${base}`} />
    case "pending":
      return <ClockIcon className={`text-yellow-600 dark:text-yellow-500 ${base}`} />
    case "failed":
      return <XCircleIcon className={`text-rose-600 dark:text-rose-500 ${base}`} />
    case "shipped":
      return <PackageIcon className={`text-blue-600 dark:text-blue-500 ${base}`} />
  }
}

function badgeVariant(status: IconTimelineEvent["status"]) {
  switch (status) {
    case "success":
      return "outline-success"
    case "pending":
      return "outline-warning"
    case "failed":
      return "outline-destructive"
    case "shipped":
      return "secondary"
  }
}

function labelForStatus(status: IconTimelineEvent["status"]) {
  switch (status) {
    case "success":
      return "Success"
    case "pending":
      return "Pending"
    case "failed":
      return "Failed"
    case "shipped":
      return "Shipped"
  }
}

export default TimelineWithIcons
