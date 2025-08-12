import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"

import { NavbarMobileDrawer } from "@/components/showcase/snippets/navbars/NavbarMobileDrawer"
import { NavbarSimple } from "@/components/showcase/snippets/navbars/NavbarSimple"
import { NavbarWithDropdowns } from "@/components/showcase/snippets/navbars/NavbarWithDropdowns"
import { NavbarWithSearch } from "@/components/showcase/snippets/navbars/NavbarWithSearch"

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
