import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { SelectSingle, SelectMultiBubbles } from "@/components/showcase/application-ui/selects"
import { SelectsSample } from "@/components/showcase/application-ui/selects/sample/SelectsSample"

export default function Selects() {
  const base = "application-ui/selects"

  return (
    <ComponentTypePage
      title="Selects"
      sample={{
        nodes: [
          {
            item: "Setup",
            component: <SelectsSample />,
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
