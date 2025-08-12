"use client"

import { useId, useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CurrencyAmount() {
  const id = useId()
  const [amount, setAmount] = useState("")
  const [currency, setCurrency] = useState("usd")

  return (
    <div className="flex w-full flex-col gap-1">
      <label className="text-foreground/80 text-sm font-semibold tracking-tight">Amount</label>
      <div className="flex items-center gap-2">
        <Select defaultValue={currency} onValueChange={setCurrency}>
          <SelectTrigger className="w-28">
            <SelectValue placeholder="Currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="usd">USD</SelectItem>
            <SelectItem value="eur">EUR</SelectItem>
            <SelectItem value="gbp">GBP</SelectItem>
          </SelectContent>
        </Select>
        <Input
          id={id}
          inputMode="decimal"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="flex-1"
        />
      </div>
    </div>
  )
}
