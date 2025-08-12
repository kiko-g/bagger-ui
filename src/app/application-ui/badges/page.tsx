import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { ComponentSample } from "@/components/ComponentSample"

import { BadgeDefault } from "@/components/showcase/application-ui/badges/BadgeDefault"
import { BadgeSecondary } from "@/components/showcase/application-ui/badges/BadgeSecondary"
import { BadgeStatus } from "@/components/showcase/application-ui/badges/BadgeStatus"
import { BadgeOutline } from "@/components/showcase/application-ui/badges/BadgeOutline"

import { BadgeSituation } from "@/components/showcase/application-ui/badges/combos/BadgeSituation"

export default function Badges() {
  const base = "application-ui/badges"

  return (
    <ComponentTypePage
      title="Badges"
      sample={{
        nodes: [
          {
            item: "Setup",
            component: <ComponentSample name="badge" />,
          },
        ],
      }}
      examples={[
        { name: "Default", path: `${base}/BadgeDefault.tsx`, component: <BadgeDefault /> },
        { name: "Secondary", path: `${base}/BadgeSecondary.tsx`, component: <BadgeSecondary /> },
        { name: "Status", path: `${base}/BadgeStatus.tsx`, component: <BadgeStatus /> },
        { name: "Outline", path: `${base}/BadgeOutline.tsx`, component: <BadgeOutline /> },
      ]}
      combos={[{ name: "Situation", path: `${base}/combos/BadgeSituation.tsx`, component: <BadgeSituation /> }]}
    />
  )
}
