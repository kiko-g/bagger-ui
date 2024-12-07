import { Button } from '@/components/ui/button'
import { ArrowRightIcon, CableCarIcon, CheckIcon, FactoryIcon, TrashIcon, WrenchIcon } from 'lucide-react'

export function ButtonIcon() {
  return (
    <div className="flex items-center gap-3">
      <Button variant="default" size="icon">
        <ArrowRightIcon className="size-4" />
      </Button>

      <Button variant="secondary" size="icon">
        <CableCarIcon className="size-4" />
      </Button>

      <Button variant="outline" size="icon">
        <FactoryIcon className="size-4" />
      </Button>

      <Button variant="ghost" size="icon">
        <WrenchIcon className="size-4" />
      </Button>
    </div>
  )
}
