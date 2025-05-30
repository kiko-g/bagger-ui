import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { NavbarSimple } from "@/components/showcase/application-ui/navbars"

export default function Navbars() {
  const base = "application-ui/navbars"

  return (
    <ComponentTypePage
      title="Navbars"
      examples={[
        {
          name: "Simple",
          path: `${base}/NavbarSimple.tsx`,
          component: <NavbarSimple location="Home" />,
        },
      ]}
    />
  )
}
