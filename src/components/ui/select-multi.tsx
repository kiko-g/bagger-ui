"use client"

import * as React from "react"
import { Check, ChevronsUpDown, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export type MultiSelectOption = {
  label: string
  value: string
}

type MultiSelectProps = {
  options: MultiSelectOption[]
  value: string[]
  onChange: (next: string[]) => void
  placeholder?: string
  className?: string
  bubblesPlacement?: "top" | "bottom"
  disabled?: boolean
}

export function MultiSelect({
  options,
  value,
  onChange,
  placeholder = "Select items",
  className,
  disabled,
  bubblesPlacement = "top",
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false)

  const toggle = React.useCallback(
    (val: string) => {
      const isSelected = value.includes(val)
      if (isSelected) onChange(value.filter((v) => v !== val))
      else onChange([...value, val])
    },
    [onChange, value],
  )

  const clearAll = React.useCallback(() => onChange([]), [onChange])

  return (
    <div className={cn("flex w-full flex-col gap-2.5", className)}>
      {value.length > 0 && (
        <div className={cn("flex flex-wrap items-center gap-1.5", bubblesPlacement === "bottom" && "order-2")}>
          {value.map((val) => {
            const option = options.find((o) => o.value === val)
            if (!option) return null
            return (
              <Badge key={val} variant="secondary" className="flex items-center gap-1 pr-1.5">
                <span className="text-xs leading-none">{option.label}</span>
                <button
                  type="button"
                  className="hover:bg-foreground/10 rounded p-0.5"
                  onClick={() => toggle(val)}
                  aria-label={`Remove ${option.label}`}
                >
                  <X className="size-3" />
                </button>
              </Badge>
            )
          })}
          <Button variant="ghost" size="xs" className="text-2xs h-6 px-1.5" onClick={clearAll}>
            Clear
          </Button>
        </div>
      )}

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild className="order-1">
          <Button
            type="button"
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="h-9 w-full justify-between"
            disabled={disabled}
          >
            <span className="truncate text-left text-sm">
              {value.length === 0 ? placeholder : `${value.length} selected`}
            </span>
            <ChevronsUpDown className="ml-2 size-4 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-(--radix-popover-trigger-width) p-0" align="start">
          <Command>
            <CommandInput placeholder="Search..." className="focus:bg-accent rounded-none border-none focus:ring-0" />
            <CommandEmpty>No options found.</CommandEmpty>
            <CommandList>
              <CommandGroup>
                {options.map((option) => {
                  const isSelected = value.includes(option.value)
                  return (
                    <CommandItem
                      key={option.value}
                      value={option.label}
                      onSelect={() => toggle(option.value)}
                      className="cursor-pointer"
                    >
                      <Check className={cn("mr-2 size-4", isSelected ? "opacity-100" : "opacity-0")} />
                      {option.label}
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default MultiSelect
