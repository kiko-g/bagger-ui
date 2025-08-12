import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { ComponentSample } from "@/components/ComponentSample"

import { AlertDefault } from "@/components/showcase/application-ui/alerts/AlertDefault"
import { AlertDestructive } from "@/components/showcase/application-ui/alerts/AlertDestructive"
import { AlertInfo } from "@/components/showcase/application-ui/alerts/AlertInfo"
import { AlertSuccess } from "@/components/showcase/application-ui/alerts/AlertSuccess"
import { AlertWarning } from "@/components/showcase/application-ui/alerts/AlertWarning"

import { AlertCombo1 } from "@/components/showcase/application-ui/alerts/combos/AlertCombo1"
import { AlertCombo2 } from "@/components/showcase/application-ui/alerts/combos/AlertCombo2"
import { AlertCombo3 } from "@/components/showcase/application-ui/alerts/combos/AlertCombo3"
import { AlertCombo4 } from "@/components/showcase/application-ui/alerts/combos/AlertCombo4"

export default function Alerts() {
  const base = "application-ui/alerts"

  return (
    <ComponentTypePage
      title="Alerts"
      sample={{
        nodes: [
          {
            item: "Setup",
            component: <ComponentSample name="alert" />,
          },
        ],
      }}
      examples={[
        { name: "Default", path: `${base}/AlertDefault.tsx`, component: <AlertDefault /> },
        { name: "Information", path: `${base}/AlertInfo.tsx`, component: <AlertInfo /> },
        { name: "Destructive", path: `${base}/AlertDestructive.tsx`, component: <AlertDestructive /> },
        { name: "Success", path: `${base}/AlertSuccess.tsx`, component: <AlertSuccess /> },
        { name: "Warning", path: `${base}/AlertWarning.tsx`, component: <AlertWarning /> },
      ]}
      combos={[
        { name: "Chef's Choice 🧑‍🍳", path: `${base}/combos/AlertCombo4.tsx`, component: <AlertCombo4 /> },
        { name: "With Accent, Not Dismissible", path: `${base}/combos/AlertCombo1.tsx`, component: <AlertCombo1 /> },
        { name: "Transparent, Not Rounded", path: `${base}/combos/AlertCombo2.tsx`, component: <AlertCombo2 /> },
        { name: "Extra Rounded, No Border", path: `${base}/combos/AlertCombo3.tsx`, component: <AlertCombo3 /> },
      ]}
    />
  )
}
