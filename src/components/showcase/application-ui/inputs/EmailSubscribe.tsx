"use client"

import { useId, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function EmailSubscribe() {
  const id = useId()
  const [value, setValue] = useState("")

  return (
    <form
      className="flex w-full flex-col gap-2 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault()
        // noop for showcase
      }}
    >
      <div className="flex-1">
        <label htmlFor={id} className="sr-only">
          Email
        </label>
        <Input
          id={id}
          type="email"
          placeholder="you@company.com"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <Button type="submit">Subscribe</Button>
    </form>
  )
}
