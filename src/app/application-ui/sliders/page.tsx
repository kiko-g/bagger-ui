import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"

import { SlidersSample } from "@/components/showcase/application-ui/sliders/sample/SlidersSample"

import {
  SliderBasic,
  SliderSimple,
  SliderStops,
  SliderThicknessRadius,
  SliderChefCombo,
} from "@/components/showcase/application-ui/sliders"

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
