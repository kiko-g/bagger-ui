"use client"

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { CheckCircleIcon, EuroIcon, InfoIcon, ShieldOffIcon, TriangleAlertIcon } from "lucide-react"

export function AlertCombo4() {
  return (
    <div className="w-full space-y-4">
      <Alert variant="default" roundedness="lg">
        <EuroIcon className="size-4" />
        <AlertTitle>Alert</AlertTitle>
        <AlertDescription>Oh yes this looks like a good alert.</AlertDescription>
      </Alert>

      <Alert variant="info" roundedness="lg">
        <InfoIcon className="size-4" />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>Just letting you know you can copy this alert. Fly away little bird.</AlertDescription>
      </Alert>

      <Alert variant="success" roundedness="lg">
        <CheckCircleIcon className="size-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Great stuff! Using these alerts feels like building LEGO..</AlertDescription>
      </Alert>

      <Alert variant="warning" roundedness="lg">
        <TriangleAlertIcon className="size-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Back to serious business. You have been warned, punk.</AlertDescription>
      </Alert>

      <Alert variant="destructive" roundedness="lg">
        <ShieldOffIcon className="size-4" />
        <AlertTitle>Destructive</AlertTitle>
        <AlertDescription>The following action will blow up your computer.</AlertDescription>
      </Alert>
    </div>
  )
}
