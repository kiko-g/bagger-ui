"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { PlusIcon, MinusIcon, ArrowUpRightIcon } from "lucide-react"

export function ButtonGroupJoined() {
  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <Button variant="outline" className="rounded-r-none">
        <PlusIcon className="h-4 w-4" />
        Stake
      </Button>
      <Button variant="outline" className="rounded-none border-x-0">
        <MinusIcon className="h-4 w-4" />
        Unstake
      </Button>
      <Button variant="outline" className="rounded-l-none">
        <ArrowUpRightIcon className="h-4 w-4" />
        Claim
      </Button>
    </div>
  )
}
