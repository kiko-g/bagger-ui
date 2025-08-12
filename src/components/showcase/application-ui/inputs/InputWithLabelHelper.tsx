"use client"

import { useId, useState } from "react"
import { Input } from "@/components/ui/input"

export function InputWithLabelHelper() {
  const id = useId()
  const [value, setValue] = useState("")

  return (
    <div className="flex w-full flex-col gap-1">
      <div className="flex items-end justify-between gap-2">
        <label htmlFor={id} className="text-foreground/80 text-sm font-semibold tracking-tight">
          Email
        </label>
        <span className="text-muted-foreground text-xs">We'll never share your email.</span>
      </div>
      <Input
        id={id}
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="you@company.com"
      />
    </div>
  )
}
