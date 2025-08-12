"use client"

import { useId, useState } from "react"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"

export function InputPasswordToggle() {
  const id = useId()
  const [show, setShow] = useState(false)
  const [value, setValue] = useState("")

  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={id} className="text-foreground/80 text-sm font-semibold tracking-tight">
        Password
      </label>
      <div className="relative">
        <Input
          id={id}
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="••••••••"
          className="pr-8"
        />
        <button
          type="button"
          className="text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2"
          onClick={() => setShow((s) => !s)}
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      </div>
    </div>
  )
}
