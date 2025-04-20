"use client"

import { useMemo, useState } from "react"
import { HexColorPicker } from "react-colorful"
import { cn } from "@/lib/utils"
import type { ButtonProps } from "@/components/ui/button"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"

interface ColorPickerProps {
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
}

export function ColorPicker<T extends HTMLInputElement>({
  disabled,
  value,
  onChange,
  onBlur,
  name,
  className,
  ...props
}: Omit<ButtonProps, "value" | "onChange" | "onBlur"> & ColorPickerProps) {
  const [open, setOpen] = useState(false)
  const parsedValue = useMemo(() => value || "#FFFFFF", [value])

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild disabled={disabled} onBlur={onBlur}>
        <Button
          {...props}
          className={cn(className)}
          name={name}
          onClick={() => {
            setOpen(true)
          }}
          size="icon"
          style={{
            backgroundColor: parsedValue,
          }}
          variant="outline"
        >
          <div />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full">
        <HexColorPicker color={parsedValue} onChange={onChange} style={{ width: "100% !important" }} />
        <Input
          maxLength={7}
          onChange={(e) => {
            onChange(e?.currentTarget?.value)
          }}
          value={parsedValue}
          className="border-accent/10 mt-3 rounded-none border bg-white px-2 py-2 text-xs font-normal transition placeholder:font-light placeholder:text-zinc-400 focus:ring-0 focus:ring-offset-0 focus:outline-hidden lg:px-3.5 lg:text-sm dark:border-zinc-200/10 dark:bg-zinc-100/5 dark:placeholder:text-zinc-400 dark:focus:ring-0"
        />
      </PopoverContent>
    </Popover>
  )
}

ColorPicker.displayName = "ColorPicker"
