"use client"

import { useEffect, useId, useRef, useState } from "react"
import { Input } from "@/components/ui/input"
import { Search, X } from "lucide-react"

export function SearchInput() {
  const id = useId()
  const [value, setValue] = useState("")
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        ref.current?.focus()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={id} className="text-foreground/80 text-sm font-semibold tracking-tight">
        Search
      </label>
      <div className="relative">
        <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2" />
        <Input
          ref={ref}
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search products..."
          className="pr-16 pl-8"
        />
        <kbd className="text-muted-foreground bg-muted pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 rounded border px-1.5 py-0.5 text-[10px] select-none">
          ⌘K
        </kbd>
        {value && (
          <button
            type="button"
            className="text-muted-foreground hover:text-foreground absolute top-1/2 right-10 -translate-y-1/2"
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
