"use client"

import React from "react"
import Image, { StaticImageData } from "next/image"

import { Previews } from "@/components/ShowcasePreviews"
import { GithubIcon } from "@/components/icons"
import type { ColorHex, TailwindPalette } from "@/types"

const isDev = process.env.NODE_ENV === "development"

export const links = [
  {
    label: "Francisco Gonçalves",
    href: "https://github.com/kiko-g",
    content: <Image src="/profile.svg" alt="author" width={24} height={24} className="rounded-full" />,
    shown: false,
  },
  {
    label: "Github Repository",
    href: "https://github.com/kiko-g/bagger-ui",
    content: <GithubIcon className="size-5" />,
    shown: true,
  },
]

export interface Section {
  name: string
  href: string
  description?: string
  pattern?: any
  icon?: any
  shown?: boolean
  status?: string
  preview?: React.JSX.Element | null
}

export const generalNav: Section[] = [
  {
    name: "Home",
    href: "/",
    shown: true,
  },
  {
    name: "Setup",
    href: "/setup",
    shown: true,
  },
]

export const generatorNav: Section[] = [
  {
    name: "Palette",
    href: "/generator/palette",
    shown: false,
  },
  {
    name: "Identity",
    href: "/generator/identity",
    shown: false,
  },
]

export const snippetsNav: Section[] = [
  {
    name: "Button Groups",
    href: "/snippets/button-groups",
    description: "Sections with multiple buttons with different layouts and functionalities.",
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
    status: "",
    shown: true,
    preview: <Previews.ButtonGroups />,
  },
  {
    name: "CTA Sections",
    href: "/snippets/ctas",
    description: "Diversely styled sections to appeal the user to click on them.",
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
    status: "",
    shown: true,
    preview: <Previews.CTASections />,
  },
  {
    name: "Hero Sections",
    href: "/snippets/hero",
    description: "Opening sections to amaze and impress the user.",
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
    status: "",
    shown: true,
    preview: <Previews.HeroSections />,
  },
  {
    name: "Headers",
    href: "/snippets/headers",
    description: "Command-like bars for editor/tooling surfaces (undo/redo, actions).",
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
    status: "updated",
    shown: true,
    preview: <Previews.Headers />,
  },
  {
    name: "KPI Widgets",
    href: "/snippets/kpi",
    description: "Key Performance Indicators to show the user the most important metrics.",
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
    status: "",
    shown: true,
    preview: <Previews.KPIWidgets />,
  },
  {
    name: "Product Cards",
    href: "/snippets/product-cards",
    description: "Views for product listing entries with different styles and purposes.",
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
    status: "",
    shown: true,
    preview: <Previews.ProductCards />,
  },
  {
    name: "Timelines",
    href: "/snippets/timelines",
    description: "Chronological event blocks with variants for icons, avatars, and steppers.",
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
    status: "new",
    shown: true,
    preview: <Previews.Timelines />,
  },
  {
    name: "Navbars",
    href: "/snippets/navbars",
    description: "Header navigation bars with dropdowns, search, and mobile drawers.",
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
    status: "updated",
    shown: true,
    preview: <Previews.Navbars />,
  },
].sort((a, b) => a.name.localeCompare(b.name))

export const applicationUiNav: Section[] = [
  {
    name: "Alerts",
    href: "/application-ui/alerts",
    description: "Customizable alerts to send information to the user.",
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
    status: "",
    shown: true,
    preview: <Previews.Alerts />,
  },
  {
    name: "Badges",
    href: "/application-ui/badges",
    description: "Small badges for signaling short pieces of information.",
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
    status: "",
    shown: true,
    preview: <Previews.Badges />,
  },
  {
    name: "Buttons",
    href: "/application-ui/buttons",
    description: "Button components with different styles, animations and purposes.",
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
    status: "",
    shown: true,
    preview: <Previews.Buttons />,
  },
  {
    name: "Checkboxes",
    href: "/application-ui/checkboxes",
    description: "Checkboxes for selecting one or multiple options.",
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
    status: "",
    shown: true,
    preview: <Previews.Checkboxes />,
  },
  {
    name: "Color Pickers",
    href: "/application-ui/color-pickers",
    description: "Color pickers for selecting colors within different scenarios.",
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
    status: "new",
    shown: true,
    preview: <Previews.ColorPickers />,
  },
  {
    name: "Dropzones",
    href: "/application-ui/dropzones",
    description: "Dropzones for receiving data from the user.",
    pattern: {
      y: 16,
      squares: [[0, 1]],
    },
    status: "",
    shown: true,
    preview: <Previews.Dropzones />,
  },
  {
    name: "Loading",
    href: "/application-ui/loading",
    description: "Components for informing the user that data is loading.",
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
    status: "updated",
    shown: true,
    preview: null,
  },
  {
    name: "Inputs",
    href: "/application-ui/inputs",
    description: "Input components for receiving data from the user.",
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
    status: "updated",
    shown: true,
    preview: null,
  },
  {
    name: "Modals",
    href: "/application-ui/modals",
    description: "Modal dialogs for displaying information or prompting the user for action.",
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
    status: "updated",
    shown: true,
    preview: null,
  },
  {
    name: "Headings",
    href: "/application-ui/headings",
    description: "Customizable and expansible top menu components.",
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
    status: "",
    shown: true,
    preview: null,
  },
  {
    name: "Selects",
    href: "/application-ui/selects",
    description: "Accessible and fancy dropdown components for selecting one or multiple options.",
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
    status: "",
    shown: true,
    preview: null,
  },
  {
    name: "Selects Multi",
    href: "/application-ui/selects/multi",
    description: "Custom select-multi built on shadcn primitives with bubbles and search.",
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
    status: "new",
    shown: true,
    preview: null,
  },
  {
    name: "Sidebars",
    href: "/application-ui/sidebars",
    description: "Customizable and expansible side menu components.",
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
    status: "",
    shown: true,
    preview: null,
  },
  {
    name: "Sliders",
    href: "/application-ui/sliders",
    description: "Interactive sliders for selecting a value from a range.",
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
    status: "",
    shown: true,
    preview: null,
  },
  {
    name: "Switches",
    href: "/application-ui/switches",
    description: "Toggle between two states with our customized switches with different styles and purposes.",
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
    status: "",
    shown: true,
    preview: null,
  },
].sort((a, b) => a.name.localeCompare(b.name))

const tailwindConfigToCombo = (config: { [key: string]: string }) => {
  return Object.entries(config).map(([id, color]) => {
    return { id: parseInt(id), color: color as ColorHex }
  })
}

const writeTailwindConfig = (config: { [key: string]: string }) => {
  return Object.entries(config)
    .map(([id, color]) => {
      return `${id}: ${color}`
    })
    .join("\n")
}

const palettes = {
  primary: {
    50: "#f0f8ff",
    100: "#dff1fe",
    200: "#bce0fd",
    300: "#85cafe",
    400: "#4db0f9",
    500: "#3393f8",
    600: "#1474d6",
    700: "#115ea4",
    800: "#114a97",
    900: "#132f78",
    950: "#0d2a4d",
  },
  secondary: {
    50: "#f5fffb",
    100: "#ddf0e9",
    200: "#c4e1d7",
    300: "#acd3c5",
    400: "#93c4b3",
    500: "#7bb5a2",
    600: "#62a690",
    700: "#4a977e",
    800: "#31896c",
    900: "#197a5a",
    950: "#005649",
  },
}

export const suggestedPalettes: TailwindPalette[] = [
  {
    name: "Primary",
    combos: tailwindConfigToCombo(palettes.primary),
    config: writeTailwindConfig(palettes.primary),
  },
  {
    name: "Secondary",
    combos: tailwindConfigToCombo(palettes.secondary),
    config: writeTailwindConfig(palettes.secondary),
  },
]
