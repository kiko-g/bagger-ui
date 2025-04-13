import { Badge } from "@/components/ui/badge"

export function BadgeSituation() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Badge size="sm" variant="outline-destructive" bubble className="border-transparent">
          Offline
        </Badge>
        <Badge size="sm" variant="outline-success" bubble className="border-transparent">
          Online
        </Badge>
      </div>
      <div className="flex items-center gap-3">
        <Badge size="sm" variant="outline-destructive" bubble>
          Offline
        </Badge>
        <Badge size="sm" variant="outline-success" bubble>
          Online
        </Badge>
      </div>
    </div>
  )
}
