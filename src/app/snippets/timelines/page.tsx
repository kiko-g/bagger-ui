import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import {
  TimelineHorizontal,
  TimelineVertical,
  TimelineWithAvatars,
  TimelineWithIcons,
} from "@/components/showcase/snippets/timelines"

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
