import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { SidebarSections, SidebarSimple } from "@/components/application-ui/sidebars"

export default function Sidebars() {
  const base = "application-ui/sidebars"

  return (
    <ComponentTypePage
      title="Sidebars"
      description={
        <p className="max-w-4xl mb-3 text-sm">
          Click the <strong>code</strong> tab buttons to see demos for every entry.
        </p>
      }
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
