"use client"

import { useId, useState } from "react"
import { Input } from "@/components/ui/input"

type Props = {
  labelText?: string
  placeholder?: string
}

export function InputBasic({ labelText = "Label", placeholder = "Type here" }: Props) {
  const id = useId()
  const [value, setValue] = useState("")

  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={id} className="text-foreground/80 text-sm font-semibold tracking-tight">
        {labelText}
      </label>
      <Input id={id} value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} />
    </div>
  )
}
