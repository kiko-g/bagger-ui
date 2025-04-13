import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { SelectSingle, SelectMultiple } from "@/components/showcase/application-ui/selects"

export default function Selects() {
  const base = "application-ui/selects"

  return (
    <ComponentTypePage
      title="Selects"
      examples={[
        {
          name: "Single",
          path: `${base}/SelectSingle.tsx`,
          component: <SelectSingle />,
        },
        {
          name: "Multiple",
          path: `${base}/SelectMultiple.tsx`,
          component: <SelectMultiple />,
        },
      ]}
    />
  )
}
