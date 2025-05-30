"use client"

import * as React from "react"

export function SwitchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="jam jam-switch-left"
      preserveAspectRatio="xMinYMin"
      viewBox="-2 -5 24 24"
      strokeWidth={1.5}
      {...props}
    >
      <path d="M7 2a5 5 0 1 0 0 10h6a5 5 0 0 0 0-10H7zm0-2h6a7 7 0 0 1 0 14H7A7 7 0 0 1 7 0zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
  )
}
