"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { HomeIcon, InfoIcon, LifeBuoyIcon } from "lucide-react"

const navigation = [
  {
    name: "Home",
    href: "#",
    icon: HomeIcon,
    shown: true,
  },
  {
    name: "About",
    href: "#",
    icon: InfoIcon,
    shown: true,
  },
  {
    name: "Help",
    href: "#",
    icon: LifeBuoyIcon,
    shown: true,
  },
]

export function SidebarSimple({ location }: { location: string }) {
  return (
    <aside className="hidden w-full max-w-xs shrink-0 flex-col space-y-4 bg-white bg-opacity-80 p-5 dark:bg-black/20 lg:flex">
      <ul className="flex w-full flex-col space-y-2">
        {navigation
          .filter((item) => item.shown !== false)
          .map((item, itemIdx) => {
            const isActive = location.toLowerCase() === item.name.toLowerCase()
            return (
              <li key={`nav-${itemIdx}`}>
                <SidebarItem
                  name={item.name}
                  href={item.href}
                  isActive={isActive}
                  icon={<item.icon className="size-5" />}
                />
              </li>
            )
          })}
      </ul>
    </aside>
  )
}

function SidebarItem({
  name,
  href,
  isActive,
  icon,
}: {
  name: string
  href: string
  isActive: boolean
  icon: React.ReactNode
}) {
  return (
    <a
      title={name}
      href={href}
      className={cn(
        isActive
          ? "bg-slate-700 text-white hover:opacity-80 dark:bg-slate-500/80"
          : "hover:bg-slate-700/10 dark:hover:bg-slate-700/30",
        "flex cursor-pointer items-center justify-center gap-2 rounded py-3 pl-3 pr-3 text-sm transition ease-in-out xl:justify-start xl:pr-10",
      )}
    >
      {icon}
      <span className="hidden xl:block">{name}</span>
    </a>
  )
}
