"use client"

import { useId, useState } from "react"
import { Input } from "@/components/ui/input"
import { Mail, Search, X } from "lucide-react"

export function InputWithIcon() {
  const id = useId()
  const [value, setValue] = useState("")

  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={id} className="text-foreground/80 text-sm font-semibold tracking-tight">
        Search
      </label>
      <div className="relative">
        <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2" />
        <Input
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search..."
          className="pr-8 pl-8"
        />
        {value && (
          <button
            type="button"
            className="text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2"
            onClick={() => setValue("")}
            aria-label="Clear"
          >
            <X className="size-4" />
          </button>
        )}
      </div>
    </div>
  )
}

export function InputWithTrailingIcon() {
  const id = useId()
  const [value, setValue] = useState("")
  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={id} className="text-foreground/80 text-sm font-semibold tracking-tight">
        Email
      </label>
      <div className="relative">
        <Input
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="you@company.com"
          className="pr-8"
        />
        <Mail className="text-muted-foreground pointer-events-none absolute top-1/2 right-2 size-4 -translate-y-1/2" />
      </div>
    </div>
  )
}
