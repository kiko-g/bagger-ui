"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const rootVariants = cva(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-input",
  {
    variants: {
      size: {
        sm: "h-4 w-7",
        md: "h-5 w-9",
        lg: "h-6 w-11",
      },
      tone: {
        default: "data-[state=checked]:bg-primary",
        success: "data-[state=checked]:bg-emerald-600",
        warning: "data-[state=checked]:bg-yellow-500",
        destructive: "data-[state=checked]:bg-rose-600",
        info: "data-[state=checked]:bg-sky-600",
      },
    },
    defaultVariants: {
      size: "md",
      tone: "default",
    },
  },
)

const thumbSizeClasses: Record<NonNullable<VariantProps<typeof rootVariants>["size"]>, string> = {
  sm: "h-3 w-3 data-[state=checked]:translate-x-3",
  md: "h-4 w-4 data-[state=checked]:translate-x-4",
  lg: "h-5 w-5 data-[state=checked]:translate-x-5",
}

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>, VariantProps<typeof rootVariants> {}

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, SwitchProps>(
  ({ className, size, tone, ...props }, ref) => (
    <SwitchPrimitives.Root className={cn(rootVariants({ size, tone }), className)} {...props} ref={ref}>
      <SwitchPrimitives.Thumb
        className={cn(
          "bg-background pointer-events-none block rounded-full shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0",
          thumbSizeClasses[size ?? "md"],
        )}
      />
    </SwitchPrimitives.Root>
  ),
)
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
