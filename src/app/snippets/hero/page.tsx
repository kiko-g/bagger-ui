import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { HeroGridNav } from "@/components/showcase/snippets/hero"

export default function Hero() {
  const base = "snippets/hero"

  return (
    <ComponentTypePage
      title="Hero Sections"
      examples={[
        {
          name: "Navigation Grid",
          path: `${base}/HeroGridNav.tsx`,
          component: <HeroGridNav />,
        },
      ]}
    />
  )
}
