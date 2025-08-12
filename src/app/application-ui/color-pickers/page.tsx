"use client"

import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { ComponentSampleVanilla } from "@/components/ComponentSample"

import { ColorPickerDefault } from "@/components/showcase/application-ui/color-pickers/ColorPickerDefault"
import { ColorPickerWithPresets } from "@/components/showcase/application-ui/color-pickers/combos/ColorPickerPresets"
import { ColorPickerWithHistory } from "@/components/showcase/application-ui/color-pickers/combos/ColorPickerHistory"
import { ColorPickerAdvanced } from "@/components/showcase/application-ui/color-pickers/combos/ColorPickerAdvanced"
import { ColorPickerForm } from "@/components/showcase/application-ui/color-pickers/combos/ColorPickerForm"
import { ColorPickerBundles } from "@/components/showcase/application-ui/color-pickers/combos/ColorPickerBundles"
import { ColorPickerBundleGenerator } from "@/components/showcase/application-ui/color-pickers/combos/ColorPickerBundleGenerator"
import { ColorPickerMixer } from "@/components/showcase/application-ui/color-pickers/combos/ColorPickerMixer"
import { AiColorBundleGenerator } from "@/components/showcase/application-ui/color-pickers/combos/ColorPickerBundleAI"

export default function ColorPickers() {
  const base = "application-ui/color-pickers"

  return (
    <ComponentTypePage
      title="Color Pickers"
      sample={{
        nodes: [
          {
            item: "Setup",
            component: <ComponentSampleVanilla name="color-picker" />,
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
          name: "Advanced Picker",
          path: `${base}/combos/ColorPickerAdvanced.tsx`,
          component: <ColorPickerAdvanced value="#404044" onChange={() => {}} />,
        },
        {
          name: "Form based",
          path: `${base}/combos/ColorPickerForm.tsx`,
          component: <ColorPickerForm />,
        },
        {
          name: "Color Mixer",
          path: `${base}/combos/ColorPickerMixer.tsx`,
          component: <ColorPickerMixer />,
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
        {
          name: "Color Bundle AI Generator",
          path: `${base}/combos/ColorPickerBundleAI.tsx`,
          component: <AiColorBundleGenerator />,
        },
      ]}
    />
  )
}
