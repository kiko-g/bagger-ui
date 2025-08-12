import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { ComponentSampleVanilla } from "@/components/ComponentSample"

import { SelectMultiBubbles } from "@/components/showcase/application-ui/selects/SelectMultiBubbles"

export default function MultiSelectPage() {
  const base = "application-ui/selects"

  return (
    <ComponentTypePage
      title="Selects Multi"
      sample={{
        nodes: [
          {
            item: "Setup",
            component: <ComponentSampleVanilla name="select-multi" />,
          },
        ],
      }}
      examples={[
        {
          name: "Bubbles + Search",
          path: `${base}/SelectMultiBubbles.tsx`,
          component: <SelectMultiBubbles />,
        },
      ]}
    />
  )
}
