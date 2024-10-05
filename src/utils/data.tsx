import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Footage from '../images/screenshots'
import {
  Bars3Icon,
  BuildingOffice2Icon,
  Cog8ToothIcon,
  EyeDropperIcon,
  FlagIcon,
  HomeIcon,
  MegaphoneIcon,
  RectangleStackIcon,
  SwatchIcon,
  WrenchIcon,
} from '@heroicons/react/24/outline'
import { GithubIcon, ButtonIcon, LoadingIcon, SidebarIcon, SwitchIcon } from '@/components/icons'

const isDev = process.env.NODE_ENV === 'development'

export const links = [
  {
    label: 'Francisco Gonçalves',
    href: 'https://github.com/kiko-g',
    content: <Image src="/profile.svg" alt="author" width={24} height={24} className="rounded-full" />,
    shown: false,
  },
  {
    label: 'Github Repository',
    href: 'https://github.com/kiko-g/bagger-ui',
    content: <GithubIcon className="h-5 w-5" />,
    shown: true,
  },
]

type BaseNav = {
  name: string
  href: string
  shown?: boolean
  new?: boolean
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined
      titleId?: string | undefined
    } & React.RefAttributes<SVGSVGElement>
  >
}

export const generalNav: BaseNav[] = [
  {
    name: 'Home',
    href: '/',
    shown: true,
    icon: HomeIcon,
  },
  {
    name: 'Setup',
    href: '/setup',
    shown: true,
    icon: WrenchIcon,
  },
]

type GeneratorNav = {
  name: string
  href: string
  shown?: boolean
  new?: boolean
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined
      titleId?: string | undefined
    } & React.RefAttributes<SVGSVGElement>
  >
}

export const generatorNav: GeneratorNav[] = [
  {
    name: 'Backstage',
    href: '/backstage',
    shown: isDev,
    icon: BuildingOffice2Icon,
  },
  {
    name: 'Palette',
    href: '/generator/palette',
    shown: true,
    icon: Cog8ToothIcon,
  },
]

type SectionNav = {
  name: string
  href: string
  count: number
  description: string
  icon?: any
  image?: StaticImageData | undefined
  shown?: boolean
  new?: boolean
}

export const applicationUiNav: SectionNav[] = [
  {
    name: 'Alerts',
    href: '/application-ui/alerts',
    count: 5,
    description: 'Customizable alerts to send information to the user with different icons, colors, and actions.',
    icon: MegaphoneIcon,
    image: Footage.Alerts,
    shown: true,
  },
  {
    name: 'Badges',
    href: '/application-ui/badges',
    count: 5,
    description: 'Small badges for signaling short pieces of information.',
    icon: FlagIcon,
    image: Footage.Badges,
    shown: true,
  },
  {
    name: 'Buttons',
    href: '/application-ui/buttons',
    count: 9,
    description: 'Button components with different styles, animations and purposes.',
    icon: ButtonIcon,
    image: Footage.Buttons,
    shown: true,
  },
  {
    name: 'Button Groups',
    href: '/application-ui/button-groups',
    count: 4,
    description: 'Sections with multiple buttons with different layouts and functionalities.',
    icon: SwatchIcon,
    image: Footage.ButtonGroups,
    shown: true,
  },
  {
    name: 'Checkboxes',
    href: '/application-ui/checkboxes',
    count: 2,
    description: 'Checkboxes for selecting one or multiple options.',
    icon: SwatchIcon,
    image: Footage.Checkboxes,
    shown: true,
    new: true,
  },
  {
    name: 'Loading',
    href: '/application-ui/loading',
    count: 2,
    description: 'Components for informing the user that data is loading.',
    icon: LoadingIcon,
    image: Footage.Loading,
    shown: true,
  },
  {
    name: 'Inputs',
    href: '/application-ui/inputs',
    count: 1,
    description: 'Input components for receiving data from the user.',
    icon: SwatchIcon,
    image: Footage.Inputs,
    shown: true,
  },
  {
    name: 'Modals',
    href: '/application-ui/modals',
    count: 1,
    description: 'Modal dialogs for displaying information or prompting the user for action.',
    icon: SwatchIcon,
    image: Footage.Modals,
    shown: true,
  },
  {
    name: 'Navbars',
    href: '/application-ui/navbars',
    count: 1,
    description: 'Customizable and expansible top menu components.',
    icon: Bars3Icon,
    shown: true,
  },
  {
    name: 'Selects',
    href: '/application-ui/selects',
    count: 2,
    description: 'Accessible and fancy dropdown components for selecting one or multiple options.',
    icon: EyeDropperIcon,
    image: Footage.Selects,
    shown: true,
  },
  {
    name: 'Sidebars',
    href: '/application-ui/sidebars',
    count: 2,
    description: 'Customizable and expansible side menu components.',
    icon: SidebarIcon,
    image: Footage.Sidebar,
    shown: true,
  },
  {
    name: 'Sliders',
    href: '/application-ui/sliders',
    count: 2,
    description: 'Interactive sliders for selecting a value from a range.',
    icon: SwatchIcon,
    image: undefined, //Footage.Sliders,
    shown: true,
  },
  {
    name: 'Switches',
    href: '/application-ui/switches',
    count: 2,
    description: 'Toggle between two states with our customized switches with different styles and purposes.',
    icon: SwitchIcon,
    image: Footage.Switch,
    shown: true,
  },
].sort((a, b) => a.name.localeCompare(b.name))

export const marketingNav: SectionNav[] = [
  {
    name: 'Hero Sections',
    href: '/marketing/hero',
    count: 1,
    description: 'Opening sections to amaze and impress the user.',
    icon: SwatchIcon,
    image: Footage.Hero,
    shown: true,
  },
  {
    name: 'CTA Sections',
    href: '/marketing/ctas',
    count: 2,
    description: 'Diversely styled sections to appeal the user to click on them.',
    icon: RectangleStackIcon,
    image: Footage.CTA,
    shown: true,
  },
  {
    name: 'KPI Widgets',
    href: '/marketing/kpi',
    count: 1,
    description: 'Key Performance Indicators to show the user the most important metrics.',
    icon: SwatchIcon,
    image: Footage.KPI,
    shown: true,
  },
].sort((a, b) => a.name.localeCompare(b.name))

export const eCommerceNav: SectionNav[] = [
  {
    name: 'Product Overviews',
    href: '/ecommerce/product-overviews',
    count: 1,
    description: 'Product overview page components',
    icon: SwatchIcon,
    shown: true,
  },
  {
    name: 'Product Cards',
    href: '/ecommerce/product-cards',
    count: 1,
    description: 'Product list page components',
    icon: SwatchIcon,
    image: Footage.ProductCards,
    shown: true,
  },
].sort((a, b) => a.name.localeCompare(b.name))
