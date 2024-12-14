'use client'

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { TriangleAlert } from 'lucide-react'

export function AlertWarning() {
  return (
    <Alert variant="warning">
      <TriangleAlert className="size-4" />
      <AlertTitle>Beware of the dragon!</AlertTitle>
      <AlertDescription>This action can produce unexpected results. Better to tread lightly, Hank.</AlertDescription>
    </Alert>
  )
}
