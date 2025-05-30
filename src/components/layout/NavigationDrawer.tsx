"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { applicationUiNav, generalNav, generatorNav, snippetsNav } from "@/utils/data"

import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerHeader,
  DrawerTrigger,
  DrawerDescription,
} from "@/components/ui/drawer"

import { MenuIcon } from "lucide-react"

export function NavigationDrawer({ location }: { location: string }) {
  const generalNavFiltered = generalNav.filter((item) => item.shown)
  const generatorNavFiltered = generatorNav.filter((item) => item.shown)
  const applicationUiNavFiltered = applicationUiNav.filter((item) => item.shown)
  const snippetsNavFiltered = snippetsNav.filter((item) => item.shown)

  return (
    <Drawer>
      <DrawerTrigger className="flex items-center justify-center p-[7px] md:hidden">
        <MenuIcon className="size-4" />
      </DrawerTrigger>
      <DrawerContent className="px-1 pt-1 pb-4">
        <DrawerHeader className="sr-only">
          <DrawerTitle className="sr-only">Navigation</DrawerTitle>
          <DrawerDescription className="sr-only">Drawer menu to navigate through the site</DrawerDescription>
        </DrawerHeader>

        <ScrollArea className="h-[400px] pt-4">
          {generalNavFiltered.length > 0 && (
            <ul className="mb-4 flex w-full flex-col gap-0.5">
              {generalNavFiltered.map((item, itemIdx) => {
                const isActive = location.toLowerCase() === item.name.toLowerCase()
                return (
                  <li key={`nav-${itemIdx}`}>
                    <NavItem name={item.name} href={item.href} isActive={isActive} isNew={item.new} />
                  </li>
                )
              })}
            </ul>
          )}

          {generatorNavFiltered.length > 0 && (
            <>
              <p className="mb-2 ml-4 text-lg font-semibold">Generator</p>
              <ul className="mb-6 flex w-full flex-col gap-0.5 pl-0">
                {generatorNavFiltered.map((item, itemIdx) => {
                  const isActive = location.toLowerCase() === item.name.toLowerCase()
                  return (
                    <li key={`nav-${itemIdx}`}>
                      <NavItem name={item.name} href={item.href} isActive={isActive} isNew={item.new} />
                    </li>
                  )
                })}
              </ul>
            </>
          )}

          {applicationUiNavFiltered.length > 0 && (
            <>
              <p className="mb-2 ml-4 text-lg font-semibold">Components</p>
              <ul className="mb-6 flex w-full flex-col gap-0.5 pl-0">
                {applicationUiNavFiltered.map((item, itemIdx) => {
                  const isActive = location.toLowerCase() === item.name.toLowerCase()
                  return (
                    <li key={`nav-${itemIdx}`}>
                      <NavItem name={item.name} href={item.href} isActive={isActive} isNew={item.new} />
                    </li>
                  )
                })}
              </ul>
            </>
          )}

          {snippetsNavFiltered.length > 0 && (
            <>
              <p className="mb-2 ml-4 text-lg font-semibold">Snippets</p>
              <ul className="flex w-full flex-col gap-0.5 pl-0">
                {snippetsNavFiltered.map((item, itemIdx) => {
                  const isActive = location.toLowerCase() === item.name.toLowerCase()
                  return (
                    <li key={`nav-${itemIdx}`}>
                      <NavItem name={item.name} href={item.href} isActive={isActive} isNew={item.new} />
                    </li>
                  )
                })}
              </ul>
            </>
          )}
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  )
}

function NavItem({ name, href, isActive, isNew }: { name: string; href: string; isActive: boolean; isNew?: boolean }) {
  return (
    <Link
      title={name}
      href={href}
      className={cn(
        isActive ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100" : "text-zinc-500 dark:text-zinc-400",
        "mx-3 flex cursor-pointer items-center justify-start gap-2 rounded-md border-0 px-3 py-2.5 leading-none transition ease-in-out",
      )}
    >
      <div className="w-full items-center gap-1.5 pr-4 lg:pr-16">
        <span>{name}</span>
        {isNew && (
          <span className="bg-primary text-primary-foreground inline-flex items-center rounded-full px-[5px] py-[3px]">
            <span className="text-3xs leading-none font-semibold tracking-tight">New</span>
          </span>
        )}
      </div>
    </Link>
  )
}
