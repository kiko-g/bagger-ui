'use client'

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { SpeakerIcon } from 'lucide-react'

export function AlertDefault() {
  return (
    <Alert>
      <SpeakerIcon className="h-5 w-5" />
      <AlertTitle>Well hello there mate!</AlertTitle>
      <AlertDescription>This alert is pretty cool, even the vanilla one. Keep scrolling.</AlertDescription>
    </Alert>
  )
}