import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { ModalSimple } from "@/components/application-ui/modals"

export default function Modals() {
  const base = "application-ui/modals"

  return (
    <ComponentTypePage
      title="Modals"
      description={
        <p className="max-w-4xl mb-3 text-sm">
          Click the <strong>code</strong> tab buttons to see demos for every entry.
        </p>
      }
      components={[{ name: "Simple", path: `${base}/ModalSimple.tsx`, component: <ModalSimple /> }]}
    />
  )
}
