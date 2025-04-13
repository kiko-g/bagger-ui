import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"

import { SlidersSample } from "@/components/showcase/application-ui/sliders/sample/SlidersSample"

import { SliderBasic } from "@/components/showcase/application-ui/sliders/SliderBasic"

export default function Sliders() {
  const base = "application-ui/sliders"

  return (
    <ComponentTypePage
      title="Sliders"
      sample={{
        nodes: [
          {
            item: "Setup",
            component: <SlidersSample />,
          },
        ],
      }}
      examples={[
        {
          name: "Basic",
          path: `${base}/SliderBasic.tsx`,
          component: <SliderBasic />,
        },
      ]}
    />
  )
}
