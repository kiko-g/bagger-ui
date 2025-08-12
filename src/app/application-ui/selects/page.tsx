import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { ComponentSample } from "@/components/ComponentSample"

import { SelectSingle } from "@/components/showcase/application-ui/selects/SelectSingle"
import { SelectMultiBubbles } from "@/components/showcase/application-ui/selects/SelectMultiBubbles"

export default function Selects() {
  const base = "application-ui/selects"

  return (
    <ComponentTypePage
      title="Selects"
      sample={{
        nodes: [
          {
            item: "Setup",
            component: <ComponentSample name="selects" />,
          },
        ],
      }}
      examples={[
        {
          name: "Single",
          path: `${base}/SelectSingle.tsx`,
          component: <SelectSingle />,
        },
        {
          name: "Multi with Bubbles (Custom)",
          path: `${base}/SelectMultiBubbles.tsx`,
          component: <SelectMultiBubbles />,
        },
      ]}
    />
  )
}
