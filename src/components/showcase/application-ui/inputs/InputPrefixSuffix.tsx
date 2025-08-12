"use client"

import { useId, useState } from "react"
import { Input } from "@/components/ui/input"

export function InputPrefixSuffix() {
  const id = useId()
  const [value, setValue] = useState("")

  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={id} className="text-foreground/80 text-sm font-semibold tracking-tight">
        Website
      </label>
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground bg-muted rounded-md border px-2 py-1 text-xs">https://</span>
        <Input
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="example"
          className="flex-1"
        />
        <span className="text-muted-foreground bg-muted rounded-md border px-2 py-1 text-xs">.com</span>
      </div>
    </div>
  )
}
