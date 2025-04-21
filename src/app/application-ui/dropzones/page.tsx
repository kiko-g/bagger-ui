"use client"

import React, { useState } from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"

import { DropzoneSample } from "@/components/showcase/application-ui/dropzone/sample/DropzoneSample"

import {
  DropzoneWithPreview,
  type FileWithPreview,
} from "@/components/showcase/application-ui/dropzone/DropzonePreview"
import { DropzoneAvatar } from "@/components/showcase/application-ui/dropzone/DropzoneAvatar"

export default function Dropzones() {
  const base = "application-ui/dropzone"
  const [previewFiles, setPreviewFiles] = useState<FileWithPreview[]>([])
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)

  return (
    <ComponentTypePage
      title="Dropzones"
      sample={{
        nodes: [
          {
            item: "Setup",
            component: <DropzoneSample />,
          },
        ],
      }}
      combos={[
        {
          name: "With Preview",
          path: `${base}/DropzonePreview.tsx`,
          component: (
            <DropzoneWithPreview
              value={previewFiles}
              onChange={setPreviewFiles}
              maxFiles={5}
              accept={{
                "image/*": [],
                "application/pdf": [".pdf"],
              }}
            />
          ),
        },
        {
          name: "Avatar",
          path: `${base}/DropzoneAvatar.tsx`,
          component: (
            <DropzoneAvatar
              fallback="FG"
              value={avatarPreview}
              onChange={(file) => {
                if (file) {
                  setAvatarPreview(URL.createObjectURL(file))
                } else {
                  setAvatarPreview(null)
                }
              }}
            />
          ),
        },
      ]}
    />
  )
}
