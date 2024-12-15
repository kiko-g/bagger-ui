'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { applicationUiNav, generalNav, generatorNav, marketingNav, eCommerceNav, buildingBlocksNav } from '@/utils/data'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'

import { SquareMenuIcon } from 'lucide-react'

export function NavigationDrawer({ location }: { location: string }) {
  const generalNavFiltered = generalNav.filter((item) => item.shown)
  const generatorNavFiltered = generatorNav.filter((item) => item.shown)
  const applicationUiNavFiltered = applicationUiNav.filter((item) => item.shown)
  const buildingBlocksNavFiltered = buildingBlocksNav.filter((item) => item.shown)

  return (
    <Drawer>
      <DrawerTrigger className="flex items-center justify-center p-[7px] md:hidden">
        <SquareMenuIcon className="size-4" />
      </DrawerTrigger>
      <DrawerContent className="px-1 pb-4 pt-1">
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

          {buildingBlocksNavFiltered.length > 0 && (
            <>
              <p className="mb-2 ml-4 text-lg font-semibold">Building Blocks</p>
              <ul className="flex w-full flex-col gap-0.5 pl-0">
                {buildingBlocksNavFiltered.map((item, itemIdx) => {
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
        isActive ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100' : 'text-zinc-500 dark:text-zinc-400',
        'mx-3 flex cursor-pointer items-center justify-start gap-2 rounded-md border-0 px-3 py-2.5 leading-none transition ease-in-out',
      )}
    >
      <div className="w-full items-center gap-1.5 pr-4 lg:pr-16">
        <span>{name}</span>
        {isNew && (
          <span className="inline-flex items-center rounded-full bg-teal-700 px-[5px] py-[3px] text-white dark:bg-teal-600">
            <span className="text-3xs font-semibold leading-none tracking-tight">New</span>
          </span>
        )}
      </div>
    </Link>
  )
}
