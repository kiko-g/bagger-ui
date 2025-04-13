"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { applicationUiNav, generalNav, generatorNav, snippetsNav } from "@/utils/data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollArea } from "@radix-ui/react-scroll-area"

export function Navigation({ location }: { location: string }) {
  const generalNavFiltered = generalNav.filter((item) => item.shown)
  const generatorNavFiltered = generatorNav.filter((item) => item.shown)
  const applicationUiNavFiltered = applicationUiNav.filter((item) => item.shown)
  const snippetsNavFiltered = snippetsNav.filter((item) => item.shown)

  return (
    <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] min-w-64 shrink-0 flex-col space-y-4 self-stretch overflow-auto bg-opacity-80 py-8 pl-4 pr-6 hover:overflow-auto md:sticky md:block lg:flex lg:border-r lg:border-zinc-900/10 dark:lg:border-white/10">
      <ScrollArea className="h-full">
        {generalNavFiltered.length > 0 && (
          <ul className="mb-4 flex w-full flex-col gap-0.5 border-b-0 border-zinc-900/10 dark:border-white/10">
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
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1" className="border-b-0 border-zinc-900/10 dark:border-white/10">
              <AccordionTrigger className="py-1 text-sm font-bold hover:no-underline hover:opacity-80">
                <span className="ml-2 whitespace-nowrap text-left">Generator</span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="flex w-full flex-col gap-0.5 pl-0">
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
        )}

        {applicationUiNavFiltered.length > 0 && (
          <Accordion type="single" collapsible defaultValue="item-2">
            <AccordionItem value="item-2" className="border-b-0 border-zinc-900/10 dark:border-white/10">
              <AccordionTrigger className="py-1 text-sm font-bold hover:no-underline hover:opacity-80">
                <span className="ml-2 whitespace-nowrap text-left">Components</span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="flex w-full flex-col gap-0.5 pl-0">
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
        )}

        {snippetsNavFiltered.length > 0 && (
          <Accordion type="single" collapsible defaultValue="item-3">
            <AccordionItem value="item-3" className="border-b-0 border-zinc-900/10 dark:border-white/10">
              <AccordionTrigger className="py-1 text-sm font-bold hover:no-underline hover:opacity-80">
                <span className="ml-2 whitespace-nowrap text-left">Snippets</span>
              </AccordionTrigger>
              <AccordionContent>
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
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </ScrollArea>
    </aside>
  )
}

function NavItem({ name, href, isActive, isNew }: { name: string; href: string; isActive: boolean; isNew?: boolean }) {
  return (
    <Link
      title={name}
      href={href}
      className={cn(
        isActive
          ? "border-zinc-500 bg-zinc-500/10 dark:bg-zinc-300/5"
          : "border-zinc-900/10 hover:bg-zinc-500/10 dark:border-white/10 dark:hover:bg-zinc-50/10",
        "flex h-8 cursor-pointer items-center justify-start gap-2 rounded-md border-0 pl-2 text-sm leading-none transition ease-in-out",
      )}
    >
      <div className="hidden w-full items-center gap-1.5 pr-4 md:flex lg:pr-16">
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
