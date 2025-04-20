"use client"

import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"

import { HeadingSample } from "@/components/showcase/application-ui/headings/sample"

import { HeadingDefault } from "@/components/showcase/application-ui/headings/HeadingDefault"
import { HeadingFull } from "@/components/showcase/application-ui/headings/HeadingFull"
import { HeadingHandy } from "@/components/showcase/application-ui/headings/HeadingHandy"
import { HeadingAnchor } from "@/components/showcase/application-ui/headings/HeadingAnchor"

export default function Dropzones() {
  const base = "application-ui/headings"

  return (
    <ComponentTypePage
      title="Headings"
      sample={{
        nodes: [
          {
            item: "Setup",
            component: <HeadingSample />,
          },
        ],
      }}
      examples={[
        {
          name: "Basic",
          path: `${base}/HeadingDefault.tsx`,
          component: <HeadingDefault />,
        },
        {
          name: "Anchor",
          path: `${base}/HeadingAnchor.tsx`,
          component: <HeadingAnchor />,
        },
      ]}
      combos={[
        {
          name: "Complete",
          path: `${base}/HeadingFull.tsx`,
          component: <HeadingFull />,
        },
        {
          name: "Handy exports",
          path: `${base}/HeadingHandy.tsx`,
          component: <HeadingHandy />,
        },
      ]}
    />
  )
}
