"use client"

import React, { useState, useEffect, useRef } from "react"
import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxParent() {
  const [parentChecked, setParentChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  const parentCheckboxRef = useRef<HTMLInputElement>(null)
  const [childCheckboxes, setChildCheckboxes] = useState([
    { id: 1, checked: false },
    { id: 2, checked: false },
    { id: 3, checked: false },
  ])

  useEffect(() => {
    const checkedCount = childCheckboxes.filter((box) => box.checked).length

    if (checkedCount === childCheckboxes.length) {
      setParentChecked(true)
      setIndeterminate(false)
    } else if (checkedCount === 0) {
      setParentChecked(false)
      setIndeterminate(false)
    } else {
      setParentChecked(false)
      setIndeterminate(true)
    }

    if (parentCheckboxRef.current) {
      parentCheckboxRef.current.indeterminate = indeterminate
    }
  }, [childCheckboxes, indeterminate])

  const handleChildChange = (id: number) => {
    setChildCheckboxes((prev) =>
      prev.map((box) => ({
        ...box,
        checked: box.id === id ? !box.checked : box.checked,
      })),
    )
  }

  const handleParentChange = () => {
    const newChecked = !parentChecked
    setParentChecked(newChecked)
    setIndeterminate(false)
    setChildCheckboxes((prev) =>
      prev.map((box) => ({
        ...box,
        checked: newChecked,
      })),
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <label className="flex items-center space-x-2">
        <Checkbox id="parent" checked={parentChecked} onCheckedChange={handleParentChange} />
        <span className="text-sm font-medium leading-none">Parent Checkbox</span>
      </label>

      <div className="ml-6 flex flex-col gap-3">
        {childCheckboxes.map((box) => (
          <label key={box.id} className="flex items-center space-x-2">
            <Checkbox id={`child-${box.id}`} checked={box.checked} onCheckedChange={() => handleChildChange(box.id)} />
            <span className="text-sm font-medium leading-none">Child Checkbox {box.id}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
