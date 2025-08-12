import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { ComponentSample } from "@/components/ComponentSample"

import { ButtonDefault } from "@/components/showcase/application-ui/buttons/ButtonDefault"
import { ButtonSecondary } from "@/components/showcase/application-ui/buttons/ButtonSecondary"
import { ButtonOutline } from "@/components/showcase/application-ui/buttons/ButtonOutline"
import { ButtonIcon } from "@/components/showcase/application-ui/buttons/ButtonIcon"
import { ButtonStatus } from "@/components/showcase/application-ui/buttons/ButtonStatus"
import { ButtonFlat } from "@/components/showcase/application-ui/buttons/ButtonFlat"
import { ButtonDisabled } from "@/components/showcase/application-ui/buttons/ButtonDisabled"

import { ButtonLoading } from "@/components/showcase/application-ui/buttons/combos/ButtonLoading"
import { ButtonWithIcon } from "@/components/showcase/application-ui/buttons/combos/ButtonWithIcon"
import { ButtonWithAnimation } from "@/components/showcase/application-ui/buttons/combos/ButtonWithAnimation"
import { ButtonFilling } from "@/components/showcase/application-ui/buttons/combos/ButtonFilling"

export default function Buttons() {
  const base = "application-ui/buttons"

  return (
    <ComponentTypePage
      title="Buttons"
      sample={{
        nodes: [
          {
            item: "Setup",
            component: <ComponentSample name="button" />,
          },
        ],
      }}
      examples={[
        { name: "Default", path: `${base}/ButtonDefault.tsx`, component: <ButtonDefault /> },
        { name: "Secondary", path: `${base}/ButtonSecondary.tsx`, component: <ButtonSecondary /> },
        { name: "Outline", path: `${base}/ButtonOutline.tsx`, component: <ButtonOutline /> },
        { name: "Status", path: `${base}/ButtonStatus.tsx`, component: <ButtonStatus /> },
        { name: "Icon", path: `${base}/ButtonIcon.tsx`, component: <ButtonIcon /> },
        { name: "Flat", path: `${base}/ButtonFlat.tsx`, component: <ButtonFlat /> },
        { name: "Disabled", path: `${base}/ButtonDisabled.tsx`, component: <ButtonDisabled /> },
      ]}
      combos={[
        { name: "Loading With Await", path: `${base}/combos/ButtonLoading.tsx`, component: <ButtonLoading /> },
        { name: "With Icon", path: `${base}/combos/ButtonWithIcon.tsx`, component: <ButtonWithIcon /> },
        { name: "With Animation", path: `${base}/combos/ButtonWithAnimation.tsx`, component: <ButtonWithAnimation /> },
        { name: "Filling Animation", path: `${base}/combos/ButtonFilling.tsx`, component: <ButtonFilling /> },
      ]}
    />
  )
}
