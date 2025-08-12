import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { ComponentSample } from "@/components/ComponentSample"

import { SidebarSections } from "@/components/showcase/application-ui/sidebars/SidebarSections"
import { SidebarSimple } from "@/components/showcase/application-ui/sidebars/SidebarSimple"

export default function Sidebars() {
  const base = "application-ui/sidebars"

  return (
    <ComponentTypePage
      title="Sidebars"
      sample={{
        nodes: [
          {
            item: "Setup",
            component: <ComponentSample name="sidebar" />,
          },
        ],
      }}
      examples={[
        {
          name: "Simple",
          path: `${base}/SidebarSimple.tsx`,
          component: <SidebarSimple location="Home" />,
        },
        {
          name: "Simple w/ Sections",
          path: `${base}/SidebarSections.tsx`,
          component: <SidebarSections location="Home" />,
        },
      ]}
    />
  )
}
