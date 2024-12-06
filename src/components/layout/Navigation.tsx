'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { applicationUiNav, generalNav, generatorNav, marketingNav, eCommerceNav, buildingBlocksNav } from '@/utils/data'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function Navigation({ location }: { location: string }) {
  const generalNavFiltered = generalNav.filter((item) => item.shown)
  const generatorNavFiltered = generatorNav.filter((item) => item.shown)
  const applicationUiNavFiltered = applicationUiNav.filter((item) => item.shown)
  const buildingBlocksNavFiltered = buildingBlocksNav.filter((item) => item.shown)
  const marketingNavFiltered = marketingNav.filter((item) => item.shown)
  const eCommerceNavFiltered = eCommerceNav.filter((item) => item.shown)

  return (
    <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] min-w-64 shrink-0 flex-col space-y-4 self-stretch overflow-auto bg-opacity-80 px-8 py-8 pr-10 hover:overflow-auto md:sticky md:block lg:flex lg:border-r lg:border-zinc-900/10 dark:lg:border-white/10">
      <ul className="flex w-full flex-col border-b-0 border-zinc-900/10 dark:border-white/10">
        {generalNavFiltered.map((item, itemIdx) => {
          const isActive = location.toLowerCase() === item.name.toLowerCase()
          return (
            <li key={`nav-${itemIdx}`}>
              <NavItem name={item.name} href={item.href} isActive={isActive} isNew={item.new} />
            </li>
          )
        })}
      </ul>

      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1" className="border-b-0 border-zinc-900/10 dark:border-white/10">
          <AccordionTrigger className="py-1 text-sm font-bold hover:no-underline hover:opacity-80">
            <span className="whitespace-nowrap text-left">Generator</span>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex w-full flex-col pl-0">
              {generatorNavFiltered.map((item, itemIdx) => {
                const isActive = location.toLowerCase() === item.name.toLowerCase()
                return (
                  <li key={`nav-${itemIdx}`}>
                    <NavItem name={item.name} href={item.href} isActive={isActive} isNew={item.new} />
                  </li>
                )
              })}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible defaultValue="item-2">
        <AccordionItem value="item-2" className="border-b-0 border-zinc-900/10 dark:border-white/10">
          <AccordionTrigger className="py-1 text-sm font-bold hover:no-underline hover:opacity-80">
            <span className="whitespace-nowrap text-left">Components</span>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex w-full flex-col pl-0">
              {applicationUiNavFiltered.map((item, itemIdx) => {
                const isActive = location.toLowerCase() === item.name.toLowerCase()
                return (
                  <li key={`nav-${itemIdx}`}>
                    <NavItem name={item.name} href={item.href} isActive={isActive} isNew={item.new} />
                  </li>
                )
              })}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible defaultValue="item-3">
        <AccordionItem value="item-3" className="border-b-0 border-zinc-900/10 dark:border-white/10">
          <AccordionTrigger className="py-1 text-sm font-bold hover:no-underline hover:opacity-80">
            <span className="whitespace-nowrap text-left">Building Blocks</span>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex w-full flex-col pl-0">
              {buildingBlocksNavFiltered.map((item, itemIdx) => {
                const isActive = location.toLowerCase() === item.name.toLowerCase()
                return (
                  <li key={`nav-${itemIdx}`}>
                    <NavItem name={item.name} href={item.href} isActive={isActive} isNew={item.new} />
                  </li>
                )
              })}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-4" className="border-b-0 border-zinc-900/10 dark:border-white/10">
          <AccordionTrigger className="py-1 text-sm font-bold hover:no-underline hover:opacity-80">
            <span className="whitespace-nowrap text-left">Marketing</span>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex w-full flex-col pl-0">
              {marketingNavFiltered.map((item, itemIdx) => {
                const isActive = location.toLowerCase() === item.name.toLowerCase()
                return (
                  <li key={`nav-${itemIdx}`}>
                    <NavItem name={item.name} href={item.href} isActive={isActive} isNew={item.new} />
                  </li>
                )
              })}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-5" className="border-b-0 border-zinc-900/10 dark:border-white/10">
          <AccordionTrigger className="py-1 text-sm font-bold hover:no-underline hover:opacity-80">
            <span className="whitespace-nowrap text-left">Ecommerce</span>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex w-full flex-col pl-0">
              {eCommerceNavFiltered.map((item, itemIdx) => {
                const isActive = location.toLowerCase() === item.name.toLowerCase()
                return (
                  <li key={`nav-${itemIdx}`}>
                    <NavItem name={item.name} href={item.href} isActive={isActive} isNew={item.new} />
                  </li>
                )
              })}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  )
}

function NavItem({ name, href, isActive, isNew }: { name: string; href: string; isActive: boolean; isNew?: boolean }) {
  return (
    <Link
      title={name}
      href={href}
      className={clsx(
        isActive
          ? 'border-primary-500 bg-primary-500/10 dark:bg-primary-300/5'
          : 'border-zinc-900/10 hover:bg-zinc-500/5 dark:border-white/10 dark:hover:bg-zinc-50/10',
        'flex cursor-pointer items-center justify-start gap-2 border-l py-0.5 pl-3 text-sm transition ease-in-out',
      )}
    >
      <div className="hidden w-full items-center gap-1.5 pr-4 md:flex lg:pr-12">
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
