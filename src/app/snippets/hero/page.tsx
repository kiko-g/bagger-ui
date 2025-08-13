import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"

import { HeroGridNav } from "@/components/showcase/snippets/hero/HeroGridNav"
import { HeroCenteredGradient } from "@/components/showcase/snippets/hero/HeroCenteredGradient"
import { HeroBlurredBlobs } from "@/components/showcase/snippets/hero/HeroBlurredBlobs"
import { HeroWithGridPattern } from "@/components/showcase/snippets/hero/HeroWithGridPattern"
import { HeroSplitWithImage } from "@/components/showcase/snippets/hero/HeroSplitWithImage"
import { HeroMotionMinimal } from "@/components/showcase/snippets/hero/HeroMotionMinimal"
import { HeroProductCTA } from "@/components/showcase/snippets/hero/HeroProductCTA"

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
        {
          name: "Centered Gradient",
          path: `${base}/HeroCenteredGradient.tsx`,
          component: <HeroCenteredGradient />,
        },
        {
          name: "Blurred Blobs",
          path: `${base}/HeroBlurredBlobs.tsx`,
          component: <HeroBlurredBlobs />,
        },
        {
          name: "With Grid Pattern",
          path: `${base}/HeroWithGridPattern.tsx`,
          component: <HeroWithGridPattern />,
        },
        {
          name: "Split with Image",
          path: `${base}/HeroSplitWithImage.tsx`,
          component: <HeroSplitWithImage />,
        },
        {
          name: "Motion Minimal",
          path: `${base}/HeroMotionMinimal.tsx`,
          component: <HeroMotionMinimal />,
        },
        {
          name: "Product CTA",
          path: `${base}/HeroProductCTA.tsx`,
          component: <HeroProductCTA />,
        },
      ]}
    />
  )
}
