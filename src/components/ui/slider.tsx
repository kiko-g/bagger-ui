"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const trackVariants = cva("relative w-full grow overflow-hidden bg-foreground/15 dark:bg-foreground/20", {
  variants: {
    thickness: {
      xs: "h-1",
      sm: "h-1.5",
      md: "h-2",
      lg: "h-3",
    },
    roundedness: {
      none: "rounded-none",
      sm: "rounded",
      md: "rounded-md",
      lg: "rounded-full",
    },
  },
  defaultVariants: {
    thickness: "sm",
    roundedness: "lg",
  },
})

const thumbVariants = cva(
  "block rounded-full border border-foreground/50 bg-background shadow-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        xs: "h-3 w-3",
        sm: "h-3.5 w-3.5",
        md: "h-4 w-4",
        lg: "h-5 w-5",
      },
    },
    defaultVariants: { size: "md" },
  },
)

export interface SliderProps
  extends
    React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    VariantProps<typeof trackVariants>,
    VariantProps<typeof thumbVariants> {
  stops?: number
  trackClassName?: string
  rangeClassName?: string
  thumbClassName?: string
}

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  (
    { className, thickness, roundedness, size, stops, trackClassName, rangeClassName, thumbClassName, ...props },
    ref,
  ) => (
    <SliderPrimitive.Root
      ref={ref}
      className={cn("relative flex w-full touch-none items-center select-none", className)}
      {...props}
    >
      <SliderPrimitive.Track className={cn(trackVariants({ thickness, roundedness }), trackClassName)}>
        <SliderPrimitive.Range className={cn("bg-foreground absolute h-full", rangeClassName)} />
        {typeof stops === "number" && stops > 0 && stops <= 10 && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-between">
            {Array.from({ length: stops + 1 }).map((_, i) => (
              <span key={i} className="bg-foreground/20 dark:bg-background/40 h-2 w-0.5 rounded-full" />
            ))}
          </div>
        )}
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className={cn(thumbVariants({ size }), thumbClassName)} />
    </SliderPrimitive.Root>
  ),
)
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
