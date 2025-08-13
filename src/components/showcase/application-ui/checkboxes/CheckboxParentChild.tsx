"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

type Item = {
  id: string
  label: string
  checked: boolean
}

export function CheckboxParentChild() {
  const [items, setItems] = useState<Item[]>([
    { id: "item-1", label: "Email notifications", checked: false },
    { id: "item-2", label: "SMS notifications", checked: false },
    { id: "item-3", label: "Push notifications", checked: false },
  ])

  // Calculate parent state based on children
  const checkedItems = items.filter((item) => item.checked)
  const isAllChecked = checkedItems.length === items.length
  const isIndeterminate = checkedItems.length > 0 && checkedItems.length < items.length

  // Handle parent checkbox change
  const onParentChange = (checked: boolean) => {
    setItems(items.map((item) => ({ ...item, checked })))
  }

  // Handle child checkbox change
  const onChildChange = (id: string, checked: boolean) => {
    setItems(items.map((item) => (item.id === id ? { ...item, checked } : item)))
  }

  return (
    <div className="bg-background w-full max-w-md space-y-2 rounded-md border p-4">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="parent"
          checked={isAllChecked}
          className={isIndeterminate ? "data-[state=checked]:bg-primary/80" : ""}
          data-state={isIndeterminate ? "indeterminate" : isAllChecked ? "checked" : "unchecked"}
          onCheckedChange={onParentChange}
        />
        <Label htmlFor="parent" className="text-base font-medium">
          Notification preferences
        </Label>
      </div>

      <div className="border-muted ml-4 space-y-3 border-l-2 pt-1 pl-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center space-x-2">
            <Checkbox
              id={item.id}
              checked={item.checked}
              onCheckedChange={(checked) => onChildChange(item.id, checked as boolean)}
            />
            <Label htmlFor={item.id}>{item.label}</Label>
          </div>
        ))}
      </div>
    </div>
  )
}
