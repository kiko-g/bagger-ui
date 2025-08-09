import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import {
  HeaderEditor,
  HeaderWithBreadcrumbs,
  HeaderWithSearchFilters,
  HeaderWithTabsActions,
} from "@/components/showcase/snippets/headers"

export default function HeadersSnippet() {
  const base = "snippets/headers"

  return (
    <ComponentTypePage
      title="Headers"
      examples={[
        { name: "Editor", path: `${base}/HeaderEditor.tsx`, component: <HeaderEditor className="rounded-md border" /> },
        {
          name: "With Breadcrumbs",
          path: `${base}/HeaderWithBreadcrumbs.tsx`,
          component: <HeaderWithBreadcrumbs className="rounded-md border" />,
        },
        {
          name: "Tabs & Actions",
          path: `${base}/HeaderWithTabsActions.tsx`,
          component: <HeaderWithTabsActions className="rounded-md border" />,
        },
        {
          name: "Search & Filters",
          path: `${base}/HeaderWithSearchFilters.tsx`,
          component: <HeaderWithSearchFilters className="rounded-md border" />,
        },
      ]}
    />
  )
}
