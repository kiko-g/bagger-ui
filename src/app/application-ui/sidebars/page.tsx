import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { SidebarSections, SidebarSimple } from "@/components/application-ui/sidebars"

export default function Sidebars() {
  const base = "application-ui/sidebars"

  return (
    <ComponentTypePage
      title="Sidebars"
      components={[
        { name: "Simple", path: `${base}/SidebarSimple.tsx`, component: <SidebarSimple location="Home" /> },
        {
          name: "Simple w/ Sections",
          path: `${base}/SidebarSections.tsx`,
          component: <SidebarSections location="Home" />,
        },
      ]}
    />
  )
}
