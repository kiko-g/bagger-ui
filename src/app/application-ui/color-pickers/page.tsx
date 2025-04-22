"use client"

import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"

import { ColorPickerSample } from "@/components/showcase/application-ui/color-pickers/sample/ColorPickerSample"

import { ColorPickerDefault } from "@/components/showcase/application-ui/color-pickers/ColorPickerDefault"

import { ColorPickerWithPresets } from "@/components/showcase/application-ui/color-pickers/combos/ColorPickerPresets"
import { ColorPickerWithHistory } from "@/components/showcase/application-ui/color-pickers/combos/ColorPickerHistory"
import { ColorPickerAdvanced } from "@/components/showcase/application-ui/color-pickers/combos/ColorPickerAdvanced"
import { ColorPickerForm } from "@/components/showcase/application-ui/color-pickers/combos/ColorPickerForm"
import { ColorPickerBundles } from "@/components/showcase/application-ui/color-pickers/combos/ColorPickerBundles"
import { ColorPickerBundleGenerator } from "@/components/showcase/application-ui/color-pickers/combos/ColorPickerBundleGenerator"

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
        {
          name: "With History",
          path: `${base}/combos/ColorPickerHistory.tsx`,
          component: <ColorPickerWithHistory value="#404044" onChange={() => {}} />,
        },
        {
          name: "With Advanced",
          path: `${base}/combos/ColorPickerAdvanced.tsx`,
          component: <ColorPickerAdvanced value="#404044" onChange={() => {}} />,
        },
        {
          name: "With Form",
          path: `${base}/combos/ColorPickerForm.tsx`,
          component: <ColorPickerForm />,
        },
        {
          name: "Color Bundle Editor",
          path: `${base}/combos/ColorPickerBundles.tsx`,
          component: <ColorPickerBundles />,
        },
        {
          name: "Color Bundle Generator",
          path: `${base}/combos/ColorPickerBundleGenerator.tsx`,
          component: <ColorPickerBundleGenerator />,
        },
      ]}
    />
  )
}
