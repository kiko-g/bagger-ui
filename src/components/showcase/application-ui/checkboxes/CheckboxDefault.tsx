"use client"

import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxDefault() {
  return (
    <div className="flex items-start space-x-2.5">
      <Checkbox id="email-marketing" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="email-marketing"
          className="mt-px cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 hover:opacity-80"
        >
          Email Marketing
        </label>
        <p className="text-sm opacity-50">Do you wish to receive email updates and marketing offers?</p>
      </div>
    </div>
  )
}
