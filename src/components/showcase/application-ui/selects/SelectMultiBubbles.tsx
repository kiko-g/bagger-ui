"use client"

import { useMemo, useState } from "react"
import { MultiSelect, MultiSelectOption } from "@/components/ui/select-multi"

export function SelectMultiBubbles() {
  const options: MultiSelectOption[] = useMemo(
    () => [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Cherry", value: "cherry" },
      { label: "Durian", value: "durian" },
      { label: "Elderberry", value: "elderberry" },
      { label: "Fig", value: "fig" },
      { label: "Grape", value: "grape" },
      { label: "Honeydew", value: "honeydew" },
    ],
    [],
  )

  const [value, setValue] = useState<string[]>([])

  return (
    <div className="w-full max-w-xl">
      <MultiSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Select fruits"
        bubblesPlacement="bottom"
      />
    </div>
  )
}

export default SelectMultiBubbles
