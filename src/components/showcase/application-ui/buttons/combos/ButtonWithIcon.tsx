import { Button } from '@/components/ui/button'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

export function ButtonWithIcon() {
  return (
    <Button>
      <span>Button</span>
      <ChevronRightIcon className="size-4" />
    </Button>
  )
}
