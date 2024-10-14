'use client'

import { SidebarItem } from './SidebarItem'
import { applicationUiNav, generalNav, generatorNav, marketingNav, eCommerceNav } from '@/utils/data'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function Navigation({ location }: { location: string }) {
  const generalNavFiltered = generalNav.filter((item) => item.shown)
  const generatorNavFiltered = generatorNav.filter((item) => item.shown)
  const applicationUiNavFiltered = applicationUiNav.filter((item) => item.shown)
  const marketingNavFiltered = marketingNav.filter((item) => item.shown)
  const eCommerceNavFiltered = eCommerceNav.filter((item) => item.shown)

  return (
    <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] shrink-0 flex-col space-y-4 self-stretch overflow-hidden bg-opacity-80 p-5 pb-8 hover:overflow-auto md:sticky md:block lg:flex lg:min-w-min lg:border-r lg:border-zinc-900/10 dark:lg:border-white/10">
      <ul className="flex w-full flex-col border-b border-zinc-900/10 pb-4 dark:border-white/10">
        {generalNavFiltered.map((item, itemIdx) => {
          const isActive = location.toLowerCase() === item.name.toLowerCase()
          return (
            <li key={`nav-${itemIdx}`}>
              <SidebarItem name={item.name} href={item.href} isActive={isActive} isNew={item.new} />
            </li>
          )
        })}
      </ul>

      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className="py-1 text-sm font-bold hover:no-underline hover:opacity-80">
            <span className="pr-20">Generator</span>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex w-full flex-col pl-0">
              {generatorNavFiltered.map((item, itemIdx) => {
                const isActive = location.toLowerCase() === item.name.toLowerCase()
                return (
                  <li key={`nav-${itemIdx}`}>
                    <SidebarItem name={item.name} href={item.href} isActive={isActive} isNew={item.new} />
                  </li>
                )
              })}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible defaultValue="item-2">
        <AccordionItem value="item-2">
          <AccordionTrigger className="py-1 text-sm font-bold hover:no-underline hover:opacity-80">
            <span className="pr-20">Application UI</span>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex w-full flex-col pl-0">
              {applicationUiNavFiltered.map((item, itemIdx) => {
                const isActive = location.toLowerCase() === item.name.toLowerCase()
                return (
                  <li key={`nav-${itemIdx}`}>
                    <SidebarItem name={item.name} href={item.href} isActive={isActive} isNew={item.new} />
                  </li>
                )
              })}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-3">
          <AccordionTrigger className="py-1 text-sm font-bold hover:no-underline hover:opacity-80">
            <span className="pr-20">Marketing</span>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex w-full flex-col pl-0">
              {marketingNavFiltered.map((item, itemIdx) => {
                const isActive = location.toLowerCase() === item.name.toLowerCase()
                return (
                  <li key={`nav-${itemIdx}`}>
                    <SidebarItem name={item.name} href={item.href} isActive={isActive} isNew={item.new} />
                  </li>
                )
              })}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-4" className="">
          <AccordionTrigger className="py-1 text-sm font-bold hover:no-underline hover:opacity-80">
            <span className="pr-20">Ecommerce</span>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex w-full flex-col pl-0">
              {eCommerceNavFiltered.map((item, itemIdx) => {
                const isActive = location.toLowerCase() === item.name.toLowerCase()
                return (
                  <li key={`nav-${itemIdx}`}>
                    <SidebarItem name={item.name} href={item.href} isActive={isActive} isNew={item.new} />
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
