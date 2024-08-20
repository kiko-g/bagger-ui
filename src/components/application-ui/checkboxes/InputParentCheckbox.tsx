'use client'

import React, { useState, useEffect } from 'react'
import { InputCheckbox } from './InputCheckbox'

export function InputParentCheckbox() {
  const [childCheckboxes, setChildCheckboxes] = useState([
    { id: 1, checked: false },
    { id: 2, checked: false },
    { id: 3, checked: false },
  ])
  const [parentChecked, setParentChecked] = useState(false)
  const [isIntermediate, setIsIntermediate] = useState(false)

  useEffect(() => {
    const checkedCount = childCheckboxes.filter((box) => box.checked).length

    if (checkedCount === childCheckboxes.length) {
      setParentChecked(true)
      setIsIntermediate(false)
    } else if (checkedCount > 0) {
      setParentChecked(false)
      setIsIntermediate(true)
    } else {
      setParentChecked(false)
      setIsIntermediate(false)
    }
  }, [childCheckboxes])

  const handleChildChange = (id: number) => {
    setChildCheckboxes((prev) => prev.map((box) => (box.id === id ? { ...box, checked: !box.checked } : box)))
  }

  const handleParentChange = () => {
    const newValue = !parentChecked
    setParentChecked(newValue)
    setChildCheckboxes((prev) => prev.map((box) => ({ ...box, checked: newValue })))
  }

  return (
    <div>
      <InputCheckbox
        labelText="Parent Checkbox"
        checked={parentChecked}
        isIntermediate={isIntermediate}
        onChange={handleParentChange}
      />
      <div className="ml-4 mt-2 flex flex-col gap-y-2">
        {childCheckboxes.map((box) => (
          <InputCheckbox
            key={box.id}
            labelText={`Child Checkbox ${box.id}`}
            checked={box.checked}
            onChange={() => handleChildChange(box.id)}
          />
        ))}
      </div>
    </div>
  )
}
