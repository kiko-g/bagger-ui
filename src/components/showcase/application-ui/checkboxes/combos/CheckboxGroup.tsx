"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

type Option = {
  id: string
  label: string
}

interface CheckboxGroupProps {
  options: Option[]
  label?: string
  onChange?: (selectedIds: string[]) => void
  className?: string
  orientation?: "horizontal" | "vertical"
}

export function CheckboxGroup({ options, label, onChange, className, orientation = "vertical" }: CheckboxGroupProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  const handleChange = (id: string, checked: boolean) => {
    const newSelectedIds = checked ? [...selectedIds, id] : selectedIds.filter((selectedId) => selectedId !== id)

    setSelectedIds(newSelectedIds)
    onChange?.(newSelectedIds)
  }

  return (
    <div className={className}>
      {label && <div className="mb-3 text-sm font-medium">{label}</div>}
      <div className={cn("space-y-3", orientation === "horizontal" && "flex flex-wrap gap-4 space-y-0")}>
        {options.map((option) => (
          <div key={option.id} className="flex items-center space-x-2">
            <Checkbox
              id={option.id}
              checked={selectedIds.includes(option.id)}
              onCheckedChange={(checked) => handleChange(option.id, checked as boolean)}
            />
            <Label htmlFor={option.id}>{option.label}</Label>
          </div>
        ))}
      </div>
    </div>
  )
}

// Example usage
export function CheckboxGroupExample() {
  const categories = [
    { id: "electronics", label: "Electronics" },
    { id: "clothing", label: "Clothing" },
    { id: "books", label: "Books" },
    { id: "home", label: "Home & Kitchen" },
  ]

  return (
    <CheckboxGroup
      options={categories}
      label="Filter by category"
      onChange={(selected) => console.log("Selected:", selected)}
    />
  )
}
