"use client"

import { useId, useState } from "react"
import { Input } from "@/components/ui/input"

function Field({ label, className = "", ...props }: any) {
  const id = useId()
  // uncontrolled for simplicity in states showcase
  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={id} className="text-foreground/80 text-sm font-semibold tracking-tight">
        {label}
      </label>
      <Input id={id} className={className} {...props} />
    </div>
  )
}

export function InputStates() {
  const [val, setVal] = useState("")
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Field label="Default" placeholder="Type here" />
      <Field label="Focused" placeholder="Focus ring preview" className="ring-ring ring-1" />
      <Field label="Error" placeholder="Invalid value" className="border-destructive focus-visible:ring-destructive" />
      <Field label="Success" placeholder="Looks good" className="border-emerald-500 focus-visible:ring-emerald-500" />
      <Field label="Disabled" placeholder="Disabled" disabled />
      <div className="flex w-full flex-col gap-1">
        <label className="text-foreground/80 text-sm font-semibold tracking-tight">Read Only</label>
        <Input value="This is read-only" readOnly />
      </div>
    </div>
  )
}
