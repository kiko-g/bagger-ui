import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { SelectSingle, SelectMultiple } from "@/components/application-ui/selects"

export default function Selects() {
  const base = "application-ui/selects"

  return (
    <ComponentTypePage
      title="Selects"
      description={
        <p className="max-w-4xl mb-3 text-sm">
          Click the <strong>code</strong> tab buttons to see demos for every entry.
        </p>
      }
      components={[
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
