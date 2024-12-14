'use client'

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { CheckCircleIcon, EuroIcon, InfoIcon, ShieldOffIcon, TriangleAlertIcon } from 'lucide-react'

export function AlertCombo2() {
  return (
    <div className="w-full space-y-4">
      <Alert variant="default" transparent="yes" roundedness="none" border="yes">
        <EuroIcon className="size-4" />
        <AlertTitle>Alert</AlertTitle>
        <AlertDescription>Content of your alert.</AlertDescription>
      </Alert>

      <Alert variant="info" transparent="yes" roundedness="none" border="yes">
        <InfoIcon className="size-4" />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>Content of your information alert.</AlertDescription>
      </Alert>

      <Alert variant="success" transparent="yes" roundedness="none" border="yes">
        <CheckCircleIcon className="size-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Content of your success alert.</AlertDescription>
      </Alert>

      <Alert variant="warning" transparent="yes" roundedness="none" border="yes">
        <TriangleAlertIcon className="size-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Content of your warning alert.</AlertDescription>
      </Alert>

      <Alert variant="destructive" transparent="yes" roundedness="none" border="yes">
        <ShieldOffIcon className="size-4" />
        <AlertTitle>Destructive</AlertTitle>
        <AlertDescription>Content of your destructive alert.</AlertDescription>
      </Alert>
    </div>
  )
}
