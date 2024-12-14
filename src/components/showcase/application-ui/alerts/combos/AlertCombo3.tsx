'use client'

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { CheckCircleIcon, EuroIcon, InfoIcon, ShieldOffIcon, TriangleAlertIcon } from 'lucide-react'

export function AlertCombo3() {
  return (
    <div className="w-full space-y-4">
      <Alert variant="default" roundedness="xl" border="no">
        <EuroIcon className="size-4" />
        <AlertTitle>Alert</AlertTitle>
        <AlertDescription>Content of your alert.</AlertDescription>
      </Alert>

      <Alert variant="info" roundedness="xl" border="no">
        <InfoIcon className="size-4" />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>Content of your information alert.</AlertDescription>
      </Alert>

      <Alert variant="success" roundedness="xl" border="no">
        <CheckCircleIcon className="size-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Content of your success alert.</AlertDescription>
      </Alert>

      <Alert variant="warning" roundedness="xl" border="no">
        <TriangleAlertIcon className="size-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Content of your warning alert.</AlertDescription>
      </Alert>

      <Alert variant="destructive" roundedness="xl" border="no">
        <ShieldOffIcon className="size-4" />
        <AlertTitle>Destructive</AlertTitle>
        <AlertDescription>Content of your destructive alert.</AlertDescription>
      </Alert>
    </div>
  )
}
