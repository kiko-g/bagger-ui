import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { HeroGridNav } from "@/components/marketing/hero"

export default function Hero() {
  const base = "marketing/hero"

  return (
    <ComponentTypePage
      title="Hero Sections"
      description={
        <p className="max-w-4xl mb-3 text-sm">
          Click the <strong>code</strong> tab buttons to see demos for every entry.
        </p>
      }
      components={[{ name: "Navigation Grid", path: `${base}/HeroGridNav.tsx`, component: <HeroGridNav /> }]}
    />
  )
}
