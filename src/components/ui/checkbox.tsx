'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'

import { cn } from '@/lib/utils'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & { indeterminate?: boolean }
>(({ className, indeterminate = false, ...props }, ref) => {
  const checkboxRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        'peer size-4 shrink-0 rounded-sm border border-gray-900 ring-offset-white data-[state=checked]:bg-gray-900 data-[state=indeterminate]:bg-red-400 data-[state=checked]:text-gray-50 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-50 dark:ring-offset-gray-950 dark:data-[state=checked]:bg-gray-50/90 dark:data-[state=checked]:text-gray-900 dark:focus-visible:ring-gray-300',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
