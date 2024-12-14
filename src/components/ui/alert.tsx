import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { X } from 'lucide-react'

const alertVariants = cva(
  'relative w-full rounded-lg border border-gray-200 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-gray-950 dark:border-gray-800 dark:[&>svg]:text-gray-50',
  {
    variants: {
      variant: {
        default: 'bg-white text-gray-950 dark:bg-gray-950 dark:text-gray-50',
        destructive:
          'border-rose-600/50 bg-rose-600/5 text-rose-600 dark:border-rose-600 [&>svg]:text-rose-600 dark:border-rose-900/50 dark:bg-rose-900/20 dark:text-rose-50 dark:dark:border-rose-900 dark:[&>svg]:text-rose-50',
      },
      roundedness: {
        default: `rounded-md`,
        sm: `rounded-sm`,
        md: `rounded-md`,
        lg: `rounded-lg`,
        xl: `rounded-xl`,
        '2xl': `rounded-2xl`,
        none: `rounded-none`,
      },
      border: {
        yes: '',
        no: 'border-0',
      },
      transparent: {
        yes: 'bg-transparent',
        no: '',
      },
      accent: {
        yes: 'border-l-8',
        no: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      roundedness: 'default',
      border: 'yes',
      transparent: 'no',
      accent: 'no',
    },
  },
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants> & { dismissible?: boolean }
>(({ className, variant, roundedness, border, transparent, accent, dismissible = true, ...props }, ref) => {
  const [show, setShow] = useState(true)

  function closeAlert() {
    setShow(false)
  }

  if (!show) return null

  return (
    <div
      ref={ref}
      role="alert"
      className={cn(
        alertVariants({
          variant,
          roundedness,
          border,
          transparent,
          accent,
        }),
        className,
      )}
      {...props}
    >
      {props.children}
      {dismissible && (
        <button
          onClick={closeAlert}
          style={{ padding: '0.125rem' }}
          className={cn(
            'absolute right-3 top-3 rounded text-zinc-700 transition hover:bg-black/10 dark:text-white dark:hover:bg-white/10',
          )}
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
})
Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn('mb-1 font-medium leading-none tracking-tight', className)} {...props} />
  ),
)
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('text-sm [&_p]:leading-relaxed', className)} {...props} />
  ),
)
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription }
