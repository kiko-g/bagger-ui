import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { ComponentSample } from "@/components/ComponentSample"

import { ModalSimple } from "@/components/showcase/application-ui/modals/ModalSimple"
import { DialogBasic } from "@/components/showcase/application-ui/modals/DialogBasic"
import { DialogSizes } from "@/components/showcase/application-ui/modals/DialogSizes"
import { DialogPositions } from "@/components/showcase/application-ui/modals/DialogPositions"
import { DialogScrollableContent } from "@/components/showcase/application-ui/modals/DialogScrollableContent"
import { DialogCustomOverlay } from "@/components/showcase/application-ui/modals/DialogCustomOverlay"
import { DialogNoOverlay } from "@/components/showcase/application-ui/modals/DialogNoOverlay"
import { DialogWithCloseActions } from "@/components/showcase/application-ui/modals/DialogWithCloseActions"
import { DialogDanger } from "@/components/showcase/application-ui/modals/DialogDanger"
import { ConfirmDeleteDialog } from "@/components/showcase/application-ui/modals/ConfirmDeleteDialog"
import { EditProfileDialog } from "@/components/showcase/application-ui/modals/EditProfileDialog"
import { FilterDialog } from "@/components/showcase/application-ui/modals/FilterDialog"
import { ShareDialog } from "@/components/showcase/application-ui/modals/ShareDialog"
import { OnboardingDialog } from "@/components/showcase/application-ui/modals/OnboardingDialog"
import { DrawerDialog } from "@/components/showcase/application-ui/modals/DrawerDialog"
import { TabsInDialog } from "@/components/showcase/application-ui/modals/TabsInDialog"
import { MediaPreviewDialog } from "@/components/showcase/application-ui/modals/MediaPreviewDialog"

export default function Modals() {
  const base = "application-ui/modals"

  return (
    <ComponentTypePage
      title="Modals"
      sample={{
        nodes: [
          {
            item: "Setup",
            component: <ComponentSample name="dialog" />,
          },
        ],
      }}
      examples={[
        { name: "Basic", path: `${base}/DialogBasic.tsx`, component: <DialogBasic /> },
        { name: "Sizes", path: `${base}/DialogSizes.tsx`, component: <DialogSizes /> },
        { name: "Positions", path: `${base}/DialogPositions.tsx`, component: <DialogPositions /> },
        {
          name: "Scrollable content",
          path: `${base}/DialogScrollableContent.tsx`,
          component: <DialogScrollableContent />,
        },
        { name: "Custom overlay", path: `${base}/DialogCustomOverlay.tsx`, component: <DialogCustomOverlay /> },
        { name: "No overlay", path: `${base}/DialogNoOverlay.tsx`, component: <DialogNoOverlay /> },
        {
          name: "Close via actions",
          path: `${base}/DialogWithCloseActions.tsx`,
          component: <DialogWithCloseActions />,
        },
        { name: "Danger emphasis", path: `${base}/DialogDanger.tsx`, component: <DialogDanger /> },
        { name: "Legacy (headlessui)", path: `${base}/ModalSimple.tsx`, component: <ModalSimple /> },
      ]}
      combos={[
        { name: "Confirm delete", path: `${base}/ConfirmDeleteDialog.tsx`, component: <ConfirmDeleteDialog /> },
        { name: "Edit profile (form)", path: `${base}/EditProfileDialog.tsx`, component: <EditProfileDialog /> },
        { name: "Filters", path: `${base}/FilterDialog.tsx`, component: <FilterDialog /> },
        { name: "Share dialog", path: `${base}/ShareDialog.tsx`, component: <ShareDialog /> },
        { name: "Onboarding (steps)", path: `${base}/OnboardingDialog.tsx`, component: <OnboardingDialog /> },
        { name: "Drawer (right)", path: `${base}/DrawerDialog.tsx`, component: <DrawerDialog /> },
        { name: "Tabs inside dialog", path: `${base}/TabsInDialog.tsx`, component: <TabsInDialog /> },
        { name: "Media preview", path: `${base}/MediaPreviewDialog.tsx`, component: <MediaPreviewDialog /> },
      ]}
    />
  )
}
