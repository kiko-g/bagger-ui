import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import {
  NavbarMobileDrawer,
  NavbarSimple,
  NavbarWithDropdowns,
  NavbarWithSearch,
} from "@/components/showcase/snippets/navbars"

export default function Navbars() {
  const base = "snippets/navbars"

  return (
    <ComponentTypePage
      title="Navbars"
      examples={[
        { name: "Simple", path: `${base}/NavbarSimple.tsx`, component: <NavbarSimple className="rounded border" /> },
        {
          name: "With Dropdowns",
          path: `${base}/NavbarWithDropdowns.tsx`,
          component: <NavbarWithDropdowns className="rounded border" />,
        },
        {
          name: "With Search",
          path: `${base}/NavbarWithSearch.tsx`,
          component: <NavbarWithSearch className="rounded border" />,
        },
        {
          name: "Mobile Drawer",
          path: `${base}/NavbarMobileDrawer.tsx`,
          component: <NavbarMobileDrawer className="rounded border" />,
        },
      ]}
    />
  )
}
