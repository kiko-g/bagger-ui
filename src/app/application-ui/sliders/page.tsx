import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { SliderSimple } from "@/components/application-ui/sliders"

export default function Sliders() {
  const base = "application-ui/sliders"

  return (
    <ComponentTypePage
      title="Sliders"
      description={
        <p className="max-w-4xl mb-3 text-sm">
          Click the <strong>code</strong> tab buttons to see demos for every entry.
        </p>
      }
      components={[{ name: "Simple", path: `${base}/SliderSimple.tsx`, component: <SliderSimple /> }]}
    />
  )
}
