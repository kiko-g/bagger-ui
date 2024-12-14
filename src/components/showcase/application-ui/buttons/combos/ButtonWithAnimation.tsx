import { Button } from '@/components/ui/button'

export function ButtonWithAnimation() {
  return (
    <div className="flex items-center gap-3">
      <Button variant="default" className="transition hover:scale-125">
        Scale
      </Button>
      <Button variant="secondary" className="transition hover:rotate-12">
        Rotate
      </Button>
      <Button variant="outline" className="transition hover:skew-x-12">
        Skew
      </Button>
      <Button variant="success" className="transition hover:-translate-y-2">
        Translate Up
      </Button>
    </div>
  )
}
