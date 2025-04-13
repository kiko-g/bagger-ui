"use client"

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { CheckIcon } from "lucide-react"

export function AlertSuccess() {
  return (
    <Alert variant="success">
      <CheckIcon className="size-4" />
      <AlertTitle>Action successful!</AlertTitle>
      <AlertDescription>Your action was successful. Pretty cool, huh?</AlertDescription>
    </Alert>
  )
}
