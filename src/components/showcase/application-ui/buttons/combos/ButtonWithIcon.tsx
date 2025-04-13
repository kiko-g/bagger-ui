import { Button } from "@/components/ui/button"
import { ChevronRightIcon } from "lucide-react"

export function ButtonWithIcon() {
  return (
    <Button>
      <span>Button</span>
      <ChevronRightIcon className="size-4" />
    </Button>
  )
}
