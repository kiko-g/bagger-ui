import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import {
  ButtonGroupJoined,
  ButtonGroupJoinedVertical,
  ButtonGroupSimple,
  ButtonGroupSplit,
} from "@/components/application-ui/button-groups"

export default function ButtonGroups() {
  const base = "application-ui/button-groups"

  return (
    <ComponentTypePage
      title="Button Groups"
      description={
        <p className="max-w-4xl mb-3 text-sm">
          Click the <strong>code</strong> tab buttons to see demos for every entry.
        </p>
      }
      components={[
        { name: "Simple", path: `${base}/ButtonGroupSimple.tsx`, component: <ButtonGroupSimple /> },
        { name: "Joined", path: `${base}/ButtonGroupJoined.tsx`, component: <ButtonGroupJoined /> },
        {
          name: "Joined Vertical",
          path: `${base}/ButtonGroupJoinedVertical.tsx`,
          component: <ButtonGroupJoinedVertical />,
        },
        { name: "Split", path: `${base}/ButtonGroupSplit.tsx`, component: <ButtonGroupSplit /> },
      ]}
    />
  )
}
