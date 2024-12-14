'use client'

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { ShieldOffIcon } from 'lucide-react'

export function AlertDestructive() {
  return (
    <Alert variant="destructive">
      <ShieldOffIcon className="size-4" />
      <AlertTitle>Proceed with caution!</AlertTitle>
      <AlertDescription>
        This action will remove your account and all of your data and cannot be undone.
      </AlertDescription>
    </Alert>
  )
}
