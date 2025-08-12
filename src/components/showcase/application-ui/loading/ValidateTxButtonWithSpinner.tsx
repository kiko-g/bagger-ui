"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"

type Tx = { id: string; amount: string; date: string; status: "pending" | "ok" }

export function ValidateTxButtonWithSpinner() {
  const [phase, setPhase] = useState<"idle" | "loading" | "done">("idle")
  const [items, setItems] = useState<Tx[]>([])

  const mockItems = useMemo<Tx[]>(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        id: `TX-${String(1000 + i)}`,
        amount: `$${(Math.random() * 200 + 5).toFixed(2)}`,
        date: new Date(Date.now() - i * 86_400_000).toISOString().slice(0, 10),
        status: "ok",
      })),
    [],
  )

  const handleValidate = async () => {
    setPhase("loading")
    setItems([])
    await new Promise((r) => setTimeout(r, 1200))
    setItems(mockItems)
    setPhase("done")
  }

  return (
    <div className="w-full space-y-4">
      <div className="bg-background w-full rounded-lg border p-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="text-foreground/80 text-sm font-medium">Transactions</div>
          <div className="text-muted-foreground text-xs">10 per page</div>
        </div>

        {phase === "idle" && (
          <div className="text-muted-foreground text-sm">Click validate to process 10 transactions.</div>
        )}

        {phase === "loading" && (
          <ul className="space-y-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <li key={i} className="flex items-center justify-between gap-3 rounded-md border p-3">
                <div className="flex items-center gap-3">
                  <div className="bg-muted h-9 w-9 animate-pulse rounded" />
                  <div className="space-y-2">
                    <div className="bg-muted h-3 w-40 animate-pulse rounded" />
                    <div className="bg-muted h-3 w-24 animate-pulse rounded" />
                  </div>
                </div>
                <div className="bg-muted h-3 w-16 animate-pulse rounded" />
              </li>
            ))}
          </ul>
        )}

        {phase === "done" && (
          <>
            <div className="mb-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-700 dark:text-emerald-300">
              10 transactions validated successfully
            </div>
            <ul className="divide-y rounded-md border">
              {items.map((tx) => (
                <li key={tx.id} className="flex items-center justify-between gap-3 p-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="bg-accent size-9 rounded" />
                    <div className="space-y-0.5">
                      <div className="font-medium">{tx.id}</div>
                      <div className="text-muted-foreground text-xs">{tx.date}</div>
                    </div>
                  </div>
                  <div className="text-foreground/80 font-medium">{tx.amount}</div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Button onClick={handleValidate} disabled={phase === "loading"}>
          {phase === "loading" && (
            <svg viewBox="0 0 24 24" className="mr-2 h-4 w-4 animate-spin" aria-hidden>
              <circle className="opacity-10" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8V0A12 12 0 000 12h4z" />
            </svg>
          )}
          {phase === "loading" ? "Validating…" : phase === "done" ? "Re-run validation" : "Validate transactions"}
        </Button>
      </div>
    </div>
  )
}
