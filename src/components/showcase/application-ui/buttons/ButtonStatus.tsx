import { Button } from "@/components/ui/button"

export function ButtonStatus() {
  return (
    <div className="flex items-center gap-3">
      <Button variant="destructive">Reject</Button>
      <Button variant="success">Accept</Button>
    </div>
  )
}
