import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { NavbarSimple } from "@/components/application-ui/navbars"

export default function Navbars() {
  const base = "application-ui/navbars"

  return (
    <ComponentTypePage
      title="Navbars"
      description={
        <p className="max-w-4xl mb-3 text-sm">
          Click the <strong>code</strong> tab buttons to see demos for every entry.
        </p>
      }
      components={[
        {
          name: "Simple",
          path: `${base}/NavbarSimple.tsx`,
          component: <NavbarSimple location="Home" />,
        },
      ]}
    />
  )
}
