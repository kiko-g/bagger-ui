"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { AlignJustifyIcon, AlignLeftIcon, AlignCenterIcon, AlignRightIcon } from "lucide-react"

export function ButtonGroupSegmentedControl() {
  const [alignSelected, setAlignSelected] = React.useState("left")

  return (
    <div className="inline-flex gap-1 rounded-md bg-muted p-1" role="radiogroup">
      <Button
        variant="ghost"
        size="sm"
        className={`rounded-md ${alignSelected === "left" ? "bg-background shadow-sm hover:bg-background/80" : ""}`}
        onClick={() => setAlignSelected("left")}
        aria-checked={alignSelected === "left"}
        role="radio"
      >
        <AlignLeftIcon className="mr-1 h-4 w-4" />
        Left
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "rounded-md",
          alignSelected === "center" ? "bg-background shadow-sm hover:bg-background/80" : "hover:bg-background/10",
        )}
        onClick={() => setAlignSelected("center")}
        aria-checked={alignSelected === "center"}
        role="radio"
      >
        <AlignCenterIcon className="mr-1 h-4 w-4" />
        Center
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "rounded-md",
          alignSelected === "right" ? "bg-background shadow-sm hover:bg-background/80" : "hover:bg-background/10",
        )}
        onClick={() => setAlignSelected("right")}
        aria-checked={alignSelected === "right"}
        role="radio"
      >
        <AlignRightIcon className="mr-1 h-4 w-4" />
        Right
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "rounded-md",
          alignSelected === "justify" ? "bg-background shadow-sm hover:bg-background/80" : "hover:bg-background/10",
        )}
        onClick={() => setAlignSelected("justify")}
        aria-checked={alignSelected === "justify"}
        role="radio"
      >
        <AlignJustifyIcon className="mr-1 h-4 w-4" />
        Justify
      </Button>
    </div>
  )
}
