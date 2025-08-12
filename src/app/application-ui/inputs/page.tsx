import React from "react"
import { ComponentSample } from "@/components/ComponentSample"
import { ComponentTypePage } from "@/components/ComponentTypePage"

import { InputBasic } from "@/components/showcase/application-ui/inputs/InputBasic"
import { InputWithLabelHelper } from "@/components/showcase/application-ui/inputs/InputWithLabelHelper"
import { InputWithIcon, InputWithTrailingIcon } from "@/components/showcase/application-ui/inputs/InputWithIcon"
import { InputPasswordToggle } from "@/components/showcase/application-ui/inputs/InputPasswordToggle"
import { InputPrefixSuffix } from "@/components/showcase/application-ui/inputs/InputPrefixSuffix"
import { InputStates } from "@/components/showcase/application-ui/inputs/InputStates"
import { InputSizes } from "@/components/showcase/application-ui/inputs/InputSizes"
import { SearchInput } from "@/components/showcase/application-ui/inputs/SearchInput"
import { EmailSubscribe } from "@/components/showcase/application-ui/inputs/EmailSubscribe"
import { CurrencyAmount } from "@/components/showcase/application-ui/inputs/CurrencyAmount"
import { InlineValidation } from "@/components/showcase/application-ui/inputs/InlineValidation"

export default function Inputs() {
  const base = "application-ui/inputs"

  return (
    <ComponentTypePage
      title="Inputs"
      sample={{
        nodes: [
          {
            item: "Setup",
            component: <ComponentSample name="input" />,
          },
        ],
      }}
      examples={[
        { name: "Basic", path: `${base}/InputBasic.tsx`, component: <InputBasic /> },
        { name: "With helper", path: `${base}/InputWithLabelHelper.tsx`, component: <InputWithLabelHelper /> },
        { name: "With leading icon", path: `${base}/InputWithIcon.tsx`, component: <InputWithIcon /> },
        { name: "With trailing icon", path: `${base}/InputWithIcon.tsx`, component: <InputWithTrailingIcon /> },
        { name: "Password toggle", path: `${base}/InputPasswordToggle.tsx`, component: <InputPasswordToggle /> },
        { name: "Prefix/Suffix", path: `${base}/InputPrefixSuffix.tsx`, component: <InputPrefixSuffix /> },
        { name: "States", path: `${base}/InputStates.tsx`, component: <InputStates /> },
        { name: "Sizes", path: `${base}/InputSizes.tsx`, component: <InputSizes /> },
      ]}
      combos={[
        { name: "Search input", path: `${base}/SearchInput.tsx`, component: <SearchInput /> },
        { name: "Email subscribe", path: `${base}/EmailSubscribe.tsx`, component: <EmailSubscribe /> },
        { name: "Currency amount", path: `${base}/CurrencyAmount.tsx`, component: <CurrencyAmount /> },
        { name: "Inline validation", path: `${base}/InlineValidation.tsx`, component: <InlineValidation /> },
      ]}
    />
  )
}
