import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { ComponentSample } from "@/components/ComponentSample"

import { CheckboxDefault } from "@/components/showcase/application-ui/checkboxes/CheckboxDefault"
import { CheckboxParentChild } from "@/components/showcase/application-ui/checkboxes/CheckboxParentChild"
import { CheckboxTable } from "@/components/showcase/application-ui/checkboxes/combos/CheckboxTable"
import { CheckboxTreeExample } from "@/components/showcase/application-ui/checkboxes/combos/CheckboxTree"
import { CheckboxGroupExample } from "@/components/showcase/application-ui/checkboxes/combos/CheckboxGroup"
import { CheckboxForm } from "@/components/showcase/application-ui/checkboxes/combos/CheckboxForm"

export default function Inputs() {
  const base = "application-ui/checkboxes"

  return (
    <ComponentTypePage
      title="Checkboxes"
      sample={{
        nodes: [
          {
            item: "Setup",
            component: <ComponentSample name="checkbox" />,
          },
        ],
      }}
      examples={[
        { name: "Label and description", path: `${base}/CheckboxDefault.tsx`, component: <CheckboxDefault /> },
        {
          name: "Parent Checkbox with children",
          path: `${base}/CheckboxParentChild.tsx`,
          component: <CheckboxParentChild />,
        },
      ]}
      combos={[
        { name: "Checkbox Tree", path: `${base}/combos/CheckboxTree.tsx`, component: <CheckboxTreeExample /> },
        { name: "Checkbox Form", path: `${base}/combos/CheckboxForm.tsx`, component: <CheckboxForm /> },
        { name: "Checkbox Group", path: `${base}/combos/CheckboxGroup.tsx`, component: <CheckboxGroupExample /> },
        { name: "Checkbox Table", path: `${base}/combos/CheckboxTable.tsx`, component: <CheckboxTable /> },
      ]}
    />
  )
}
