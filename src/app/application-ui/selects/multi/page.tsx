import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { SelectMultiBubbles } from "@/components/showcase/application-ui/selects/SelectMultiBubbles"
import { MultiSelectSample } from "@/components/showcase/application-ui/selects/sample/MultiSelectSample"

export default function MultiSelectPage() {
  const base = "application-ui/selects"

  return (
    <ComponentTypePage
      title="Selects Multi"
      sample={{
        nodes: [
          {
            item: "Setup",
            component: <MultiSelectSample />,
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
