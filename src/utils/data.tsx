"use client"

import React from "react"
import Image, { StaticImageData } from "next/image"
import Footage from "../images/screenshots"

import { GithubIcon, ButtonIcon, LoadingIcon, SidebarIcon, SwitchIcon } from "@/components/icons"
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
  image?: StaticImageData | undefined
  shown?: boolean
  new?: boolean
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

export const applicationUiNav: Section[] = [
  {
    name: "Alerts",
    href: "/application-ui/alerts",
    description: "Customizable alerts to send information to the user with different icons, colors, and actions.",
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
    image: Footage.Alerts,
    shown: true,
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
    image: Footage.Badges,
    shown: true,
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
    image: Footage.Buttons,
    shown: true,
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
    image: Footage.Checkboxes,
    shown: true,
    new: false,
  },
  {
    name: "Color Pickers",
    href: "/application-ui/color-pickers",
    description: "Color pickers for selecting colors.",
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
    shown: true,
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
    image: Footage.Loading,
    shown: true,
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
    image: Footage.Inputs,
    shown: true,
  },
  {
    name: "Modals",
    href: "/application-ui/modals",
    description: "Modal dialogs for displaying information or prompting the user for action.",
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
    image: Footage.Modals,
    shown: true,
  },
  {
    name: "Headers",
    href: "/application-ui/headers",
    description: "Customizable and expansible top menu components.",
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
    image: undefined,
    shown: true,
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
    shown: true,
  },
  {
    name: "Navbars",
    href: "/application-ui/navbars",
    description: "Customizable and expansible top menu components.",
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
    shown: true,
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
    image: Footage.Selects,
    shown: true,
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
    image: Footage.Sidebar,
    shown: true,
  },
  {
    name: "Sliders",
    href: "/application-ui/sliders",
    description: "Interactive sliders for selecting a value from a range.",
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
    image: undefined, //Footage.Sliders,
    shown: true,
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
    image: Footage.Switch,
    shown: true,
  },
].sort((a, b) => a.name.localeCompare(b.name))

export const snippetsNav: Section[] = [
  {
    name: "Button Groups",
    href: "/snippets/button-groups",
    description: "Sections with multiple buttons with different layouts and functionalities.",
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
    image: Footage.ButtonGroups,
    shown: true,
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
    image: Footage.Hero,
    shown: true,
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
    image: Footage.CTA,
    shown: true,
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
    image: Footage.KPI,
    shown: true,
  },
  {
    name: "Product Overviews",
    href: "/snippets/product-overviews",
    description: "Product overview page components",
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
    shown: true,
  },
  {
    name: "Product Cards",
    href: "/snippets/product-cards",
    description: "Product list page components",
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
    image: Footage.ProductCards,
    shown: true,
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
