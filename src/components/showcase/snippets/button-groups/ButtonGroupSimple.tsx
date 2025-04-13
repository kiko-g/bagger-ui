"use client"

import React from "react"
import { Button } from "@/components/ui/button"

export function ButtonGroupSimple() {
  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <Button className="w-full sm:w-auto">Save Changes</Button>
      <Button variant="outline" className="w-full sm:w-auto">
        Preview
      </Button>
      <Button variant="outline" className="w-full sm:w-auto">
        Cancel
      </Button>
    </div>
  )
}
