import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

const alertVariants = cva(
  'relative w-full rounded-lg border border-zinc-300 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-zinc-950 dark:border-zinc-700 dark:[&>svg]:text-zinc-50',
  {
    variants: {
      variant: {
        default: 'bg-zinc-400/5 text-zinc-950 dark:bg-zinc-700/20 dark:text-zinc-50',
        destructive:
          'border-rose-600/50 bg-rose-600/5 text-rose-600 dark:border-rose-600 [&>svg]:text-rose-600 dark:border-rose-900/50 dark:bg-rose-900/20 dark:text-rose-50 dark:dark:border-rose-900 dark:[&>svg]:text-rose-50',
        info: 'border-sky-600/50 bg-sky-600/5 text-sky-600 dark:border-sky-600 [&>svg]:text-sky-600 dark:border-sky-900/50 dark:bg-sky-900/20 dark:text-sky-50 dark:dark:border-sky-900 dark:[&>svg]:text-sky-50',
        success:
          'border-emerald-600/50 bg-emerald-600/5 text-emerald-600 dark:border-emerald-600 [&>svg]:text-emerald-600 dark:border-emerald-900/50 dark:bg-emerald-900/20 dark:text-emerald-50 dark:dark:border-emerald-900 dark:[&>svg]:text-emerald-50',
        warning:
          'border-amber-600/50 bg-amber-600/5 text-amber-600 dark:border-amber-600 [&>svg]:text-amber-600 dark:border-amber-900/50 dark:bg-amber-900/20 dark:text-amber-50 dark:dark:border-amber-900 dark:[&>svg]:text-amber-50',
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
  const [show, setShow] = React.useState(true)

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
          <X className="size-4" />
        </button>
      )}
    </div>
  )
})
Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn('mb-1 font-semibold leading-none tracking-tight', className)} {...props} />
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
