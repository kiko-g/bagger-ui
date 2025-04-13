import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "lucide-react"

export function ButtonFilling() {
  return (
    <div className="flex items-center gap-3">
      <Button
        variant="outline"
        className="group relative overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700"
      >
        <span className="absolute inset-y-0 left-0 w-[4px] bg-zinc-200 transition-all group-hover:w-full dark:bg-zinc-700/80"></span>
        <span className="relative">Button</span>
        <ArrowRightIcon className="z-[1] size-4" />
      </Button>

      <Button
        variant="outline"
        className="group relative overflow-hidden hover:border-indigo-200 dark:hover:border-indigo-700"
      >
        <span className="absolute inset-y-0 left-0 w-[4px] bg-indigo-100 transition-all group-hover:w-full dark:bg-indigo-700/80"></span>
        <span className="relative">Button</span>
        <ArrowRightIcon className="z-[1] size-4" />
      </Button>
    </div>
  )
}
