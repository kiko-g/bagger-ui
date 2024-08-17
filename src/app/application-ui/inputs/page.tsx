import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { InputSimple } from "@/components/application-ui/inputs"

export default function Inputs() {
  const base = "application-ui/inputs"

  return (
    <ComponentTypePage
      title="Inputs"
      description={
        <p className="max-w-4xl mb-3 text-sm">
          Click the <strong>code</strong> tab buttons to see demos for every entry.
        </p>
      }
      components={[
        {
          name: "Simple",
          path: `${base}/InputSimple.tsx`,
          component: <InputSimple />,
        },
      ]}
    />
  )
}
