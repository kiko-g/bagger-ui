import { Badge } from "@/components/ui/badge"

export function BadgeOutline() {
  return (
    <div className="flex items-center gap-3">
      <Badge variant="outline">Normal</Badge>
      <Badge variant="outline-success">Outstanding</Badge>
      <Badge variant="outline-destructive">Terrible</Badge>
      <Badge variant="outline-warning">Not so good</Badge>
    </div>
  )
}
