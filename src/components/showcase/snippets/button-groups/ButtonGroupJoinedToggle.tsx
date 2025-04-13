"use client"

import React from "react"
import { Button } from "@/components/ui/button"

export function ButtonGroupJoinedToggle() {
  const [basicSelected, setBasicSelected] = React.useState("day")

  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <Button
        variant={basicSelected === "day" ? "default" : "outline"}
        className="rounded-r-none"
        onClick={() => setBasicSelected("day")}
      >
        Day
      </Button>
      <Button
        variant={basicSelected === "week" ? "default" : "outline"}
        className="rounded-none border-x-0"
        onClick={() => setBasicSelected("week")}
      >
        Week
      </Button>
      <Button
        variant={basicSelected === "month" ? "default" : "outline"}
        className="rounded-l-none"
        onClick={() => setBasicSelected("month")}
      >
        Month
      </Button>
    </div>
  )
}
