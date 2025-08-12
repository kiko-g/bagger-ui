"use client"

import { useId } from "react"
import { Input } from "@/components/ui/input"

function SizedField({ label, sizeClass }: { label: string; sizeClass: string }) {
  const id = useId()
  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={id} className="text-foreground/80 text-sm font-semibold tracking-tight">
        {label}
      </label>
      <Input id={id} placeholder={label} className={sizeClass} />
    </div>
  )
}

export function InputSizes() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <SizedField label="Small" sizeClass="h-8 text-xs" />
      <SizedField label="Medium" sizeClass="h-9 text-sm" />
      <SizedField label="Large" sizeClass="h-11 text-base px-4" />
    </div>
  )
}
