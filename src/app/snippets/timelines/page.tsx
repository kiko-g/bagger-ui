import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"

import { TimelineHorizontal } from "@/components/showcase/snippets/timelines/TimelineHorizontal"
import { TimelineVertical } from "@/components/showcase/snippets/timelines/TimelineVertical"
import { TimelineWithAvatars } from "@/components/showcase/snippets/timelines/TimelineWithAvatars"
import { TimelineWithIcons } from "@/components/showcase/snippets/timelines/TimelineWithIcons"

export default function Timelines() {
  const base = "snippets/timelines"

  return (
    <ComponentTypePage
      title="Timelines"
      examples={[
        {
          name: "Vertical",
          path: `${base}/TimelineVertical.tsx`,
          component: <TimelineVertical />,
        },
        {
          name: "With Icons",
          path: `${base}/TimelineWithIcons.tsx`,
          component: <TimelineWithIcons />,
        },
        {
          name: "With Avatars",
          path: `${base}/TimelineWithAvatars.tsx`,
          component: <TimelineWithAvatars />,
        },
        {
          name: "Horizontal",
          path: `${base}/TimelineHorizontal.tsx`,
          component: <TimelineHorizontal />,
        },
      ]}
    />
  )
}
