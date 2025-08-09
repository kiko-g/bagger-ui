import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import {
  SwitchDarkMode,
  SwitchProtected,
  SwitchSimple,
  SwitchLabeled,
  SwitchSizes,
  SwitchTones,
  SwitchAsync,
} from "@/components/showcase/application-ui/switches"
import { SwitchesSample } from "@/components/showcase/application-ui/switches/sample/SwitchesSample"

export default function Switches() {
  const base = "application-ui/switches"

  return (
    <ComponentTypePage
      title="Switches"
      sample={{
        nodes: [
          {
            item: "Setup",
            component: <SwitchesSample />,
          },
        ],
      }}
      examples={[
        {
          name: "Simple",
          path: `${base}/SwitchSimple.tsx`,
          component: <SwitchSimple />,
        },
        {
          name: "Labeled",
          path: `${base}/SwitchLabeled.tsx`,
          component: <SwitchLabeled />,
        },
        {
          name: "Sizes",
          path: `${base}/SwitchSizes.tsx`,
          component: <SwitchSizes />,
        },
        {
          name: "Tones",
          path: `${base}/SwitchTones.tsx`,
          component: <SwitchTones />,
        },
        {
          name: "Dark Mode",
          path: `${base}/SwitchDarkMode.tsx`,
          component: <SwitchDarkMode />,
        },
      ]}
      combos={[
        {
          name: "Protected",
          path: `${base}/SwitchProtected.tsx`,
          component: <SwitchProtected />,
        },
        {
          name: "Async",
          path: `${base}/SwitchAsync.tsx`,
          component: <SwitchAsync />,
        },
      ]}
    />
  )
}
