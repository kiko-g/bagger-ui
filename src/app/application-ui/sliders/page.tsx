import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { ComponentSample } from "@/components/ComponentSample"

import { SliderBasic } from "@/components/showcase/application-ui/sliders/SliderBasic"
import { SliderSimple } from "@/components/showcase/application-ui/sliders/SliderSimple"
import { SliderStops } from "@/components/showcase/application-ui/sliders/SliderStops"
import { SliderThicknessRadius } from "@/components/showcase/application-ui/sliders/SliderThicknessRadius"
import { SliderChefCombo } from "@/components/showcase/application-ui/sliders/SliderChefCombo"

export default function Sliders() {
  const base = "application-ui/sliders"

  return (
    <ComponentTypePage
      title="Sliders"
      sample={{
        nodes: [
          {
            item: "Setup",
            component: <ComponentSample name="slider" />,
          },
        ],
      }}
      examples={[
        { name: "Basic", path: `${base}/SliderBasic.tsx`, component: <SliderBasic /> },
        { name: "Simple (vanilla)", path: `${base}/SliderSimple.tsx`, component: <SliderSimple /> },
        { name: "Stops", path: `${base}/SliderStops.tsx`, component: <SliderStops /> },
        {
          name: "Thickness & Radius",
          path: `${base}/SliderThicknessRadius.tsx`,
          component: <SliderThicknessRadius />,
        },
      ]}
      combos={[
        {
          name: "Chef Combo",
          path: `${base}/SliderChefCombo.tsx`,
          component: <SliderChefCombo />,
        },
      ]}
    />
  )
}
