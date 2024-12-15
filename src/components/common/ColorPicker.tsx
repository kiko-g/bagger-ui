'use client'

import { useMemo, useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { cn } from '@/lib/utils'
import type { ButtonProps } from '@/components/ui/button'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Input } from '@/components/ui/input'

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
}: Omit<ButtonProps, 'value' | 'onChange' | 'onBlur'> & ColorPickerProps) {
  const [open, setOpen] = useState(false)

  const parsedValue = useMemo(() => {
    return value || '#FFFFFF'
  }, [value])

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
        <HexColorPicker
          color={parsedValue}
          onChange={onChange}
          style={{
            width: '100% !important',
          }}
        />
        <Input
          maxLength={7}
          onChange={(e) => {
            onChange(e?.currentTarget?.value)
          }}
          value={parsedValue}
          className="mt-3 rounded-none border border-zinc-900/10 bg-white px-2 py-2 text-xs font-normal transition placeholder:font-light placeholder:text-zinc-400 hover:border-teal-600/80 hover:bg-teal-600/5 focus:border-teal-600 focus:accent-teal-600 focus:outline-none focus:ring-0 focus:ring-teal-600 focus:ring-offset-0 dark:border-zinc-200/10 dark:bg-zinc-100/5 dark:placeholder:text-zinc-400 dark:hover:border-teal-600/80 dark:hover:bg-teal-600/5 dark:focus:border-teal-600/80 dark:focus:ring-0 dark:focus:ring-teal-600 lg:px-3.5 lg:text-sm"
        />
      </PopoverContent>
    </Popover>
  )
}

ColorPicker.displayName = 'ColorPicker'
