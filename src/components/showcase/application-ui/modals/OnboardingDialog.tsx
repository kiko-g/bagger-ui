"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

const steps = [
  { title: "Welcome", description: "Let’s get your account set up." },
  { title: "Profile", description: "Tell us about yourself." },
  { title: "Finish", description: "You're all set!" },
]

export function OnboardingDialog() {
  const [step, setStep] = useState(0)

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1))
  const prev = () => setStep((s) => Math.max(s - 1, 0))

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Onboarding</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{steps[step].title}</DialogTitle>
          <DialogDescription>{steps[step].description}</DialogDescription>
        </DialogHeader>
        <div className="bg-muted h-2 w-full rounded">
          <div className="bg-primary h-full rounded" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={prev} disabled={step === 0}>
            Back
          </Button>
          {step < steps.length - 1 ? <Button onClick={next}>Next</Button> : <Button>Finish</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
