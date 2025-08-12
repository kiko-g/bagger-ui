import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { ComponentSample } from "@/components/ComponentSample"

import { SwitchDarkMode } from "@/components/showcase/application-ui/switches/SwitchDarkMode"
import { SwitchProtected } from "@/components/showcase/application-ui/switches/SwitchProtected"
import { SwitchSimple } from "@/components/showcase/application-ui/switches/SwitchSimple"
import { SwitchLabeled } from "@/components/showcase/application-ui/switches/SwitchLabeled"
import { SwitchSizes } from "@/components/showcase/application-ui/switches/SwitchSizes"
import { SwitchTones } from "@/components/showcase/application-ui/switches/SwitchTones"
import { SwitchAsync } from "@/components/showcase/application-ui/switches/SwitchAsync"

export default function Switches() {
  const base = "application-ui/switches"

  return (
    <ComponentTypePage
      title="Switches"
      sample={{
        nodes: [
          {
            item: "Setup",
            component: <ComponentSample name="switch" />,
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
