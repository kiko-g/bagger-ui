import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { ComponentSample } from "@/components/ComponentSample"
import { SidebarBasic } from "@/components/showcase/application-ui/sidebars/SidebarBasic"
import { SidebarCollapsed } from "@/components/showcase/application-ui/sidebars/SidebarCollapsed"
import { SidebarSections } from "@/components/showcase/application-ui/sidebars/SidebarSections"
import { SidebarScrollableLong } from "@/components/showcase/application-ui/sidebars/SidebarScrollableLong"
import { SidebarWithAvatars } from "@/components/showcase/application-ui/sidebars/SidebarWithAvatars"
import { SidebarSkeleton } from "@/components/showcase/application-ui/sidebars/SidebarSkeleton"

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
      examples={[]}
      combos={[
        { name: "Basic", path: `${base}/SidebarBasic.tsx`, component: <SidebarBasic /> },
        { name: "Collapsed (icon-only)", path: `${base}/SidebarCollapsed.tsx`, component: <SidebarCollapsed /> },
        { name: "Grouped sections", path: `${base}/SidebarSections.tsx`, component: <SidebarSections /> },
        {
          name: "Scrollable long list",
          path: `${base}/SidebarScrollableLong.tsx`,
          component: <SidebarScrollableLong />,
        },
        { name: "With avatars", path: `${base}/SidebarWithAvatars.tsx`, component: <SidebarWithAvatars /> },
        { name: "Skeleton (loading)", path: `${base}/SidebarSkeleton.tsx`, component: <SidebarSkeleton /> },
      ]}
    />
  )
}
