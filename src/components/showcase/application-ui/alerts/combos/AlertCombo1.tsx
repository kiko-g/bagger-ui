"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { BadgeEuroIcon, CheckCircleIcon, InfoIcon, ShieldOffIcon, TriangleAlertIcon } from "lucide-react"

export function AlertCombo1() {
  return (
    <div className="w-full space-y-4">
      <Alert variant="default" accent="yes" dismissible={false}>
        <BadgeEuroIcon className="size-4" />
        <AlertTitle>Alert</AlertTitle>
        <AlertDescription>Content of your alert.</AlertDescription>
      </Alert>

      <Alert variant="info" accent="yes" dismissible={false}>
        <InfoIcon className="size-4" />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>Content of your information alert.</AlertDescription>
      </Alert>

      <Alert variant="success" accent="yes" dismissible={false}>
        <CheckCircleIcon className="size-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Content of your success alert.</AlertDescription>
      </Alert>

      <Alert variant="warning" accent="yes" dismissible={false}>
        <TriangleAlertIcon className="size-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Content of your warning alert.</AlertDescription>
      </Alert>

      <Alert variant="destructive" accent="yes" dismissible={false}>
        <ShieldOffIcon className="size-4" />
        <AlertTitle>Destructive</AlertTitle>
        <AlertDescription>Content of your destructive alert.</AlertDescription>
      </Alert>
    </div>
  )
}
