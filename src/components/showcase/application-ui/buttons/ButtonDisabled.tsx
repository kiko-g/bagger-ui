import { Button } from "@/components/ui/button"
import { AlarmPlusIcon, BanIcon } from "lucide-react"

export function ButtonDisabled() {
  return (
    <Button disabled>
      <span>Unavailable</span>
      <BanIcon className="size-4" />
    </Button>
  )
}
