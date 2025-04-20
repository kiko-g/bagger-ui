"use client"

import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"

import { ColorPickerSample } from "@/components/showcase/application-ui/color-pickers/sample/ColorPickerSample"

import { ColorPickerDefault } from "@/components/showcase/application-ui/color-pickers/ColorPickerDefault"

import { ColorPickerWithPresets } from "@/components/showcase/application-ui/color-pickers/combos/ColorPickerPresets"

export default function ColorPickers() {
  const base = "application-ui/color-pickers"

  return (
    <ComponentTypePage
      title="Color Pickers"
      sample={{
        nodes: [
          {
            item: "Setup",
            component: <ColorPickerSample />,
          },
        ],
      }}
      examples={[
        {
          name: "Default",
          path: `${base}/ColorPickerDefault.tsx`,
          component: <ColorPickerDefault />,
        },
      ]}
      combos={[
        {
          name: "With Presets",
          path: `${base}/combos/ColorPickerPresets.tsx`,
          component: <ColorPickerWithPresets value="#202020" onChange={() => {}} />,
        },
      ]}
    />
  )
}
