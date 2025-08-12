import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { ComponentSample } from "@/components/ComponentSample"

import { ModalSimple } from "@/components/showcase/application-ui/modals/ModalSimple"

export default function Modals() {
  const base = "application-ui/modals"

  return (
    <ComponentTypePage
      title="Modals"
      sample={{
        nodes: [
          {
            item: "Setup",
            component: <ComponentSample name="dialog" />,
          },
        ],
      }}
      examples={[
        {
          name: "Simple",
          path: `${base}/ModalSimple.tsx`,
          component: <ModalSimple />,
        },
      ]}
    />
  )
}
