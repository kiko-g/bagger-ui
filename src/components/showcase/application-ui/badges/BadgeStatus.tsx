import { Badge } from '@/components/ui/badge'

export function BadgeStatus() {
  return (
    <div className="flex items-center gap-3">
      <Badge variant="destructive">Forbidden</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
    </div>
  )
}
