import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { SwitchDarkMode, SwitchProtected, SwitchSimple } from "@/components/application-ui/switches"

export default function Switches() {
  const base = "application-ui/switches"

  return (
    <ComponentTypePage
      title="Switches"
      description={
        <p className="max-w-4xl mb-3 text-sm">
          Click the <strong>code</strong> tab buttons to see demos for every entry.
        </p>
      }
      components={[
        { name: "Simple", path: `${base}/SwitchSimple.tsx`, component: <SwitchSimple /> },
        { name: "Dark Mode", path: `${base}/SwitchDarkMode.tsx`, component: <SwitchDarkMode /> },
        { name: "Protected", path: `${base}/SwitchProtected.tsx`, component: <SwitchProtected /> },
      ]}
    />
  )
}
