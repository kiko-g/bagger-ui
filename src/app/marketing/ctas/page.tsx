import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { BlurredCTA, HoverDivCTA } from "@/components/marketing/ctas"

export default function CTA() {
  const base = "marketing/ctas"

  return (
    <ComponentTypePage
      title="CTA Sections"
      description={
        <p className="max-w-4xl mb-3 text-sm">
          Click the <strong>code</strong> tab buttons to see demos for every entry.
        </p>
      }
      components={[
        { name: "Blurred", path: `${base}/BlurredCTA.tsx`, component: <BlurredCTA /> },
        { name: "Div Pop on Hover", path: `${base}/HoverDivCTA.tsx`, component: <HoverDivCTA /> },
      ]}
    />
  )
}
