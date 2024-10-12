'use client'

import { SidebarItem } from './SidebarItem'
import { applicationUiNav, generalNav, generatorNav, marketingNav, eCommerceNav } from '@/utils/data'

export function Sidebar({ location }: { location: string }) {
  const generalNavFiltered = generalNav.filter((item) => item.shown)
  const generatorNavFiltered = generatorNav.filter((item) => item.shown)
  const applicationUiNavFiltered = applicationUiNav.filter((item) => item.shown)
  const marketingNavFiltered = marketingNav.filter((item) => item.shown)
  const eCommerceNavFiltered = eCommerceNav.filter((item) => item.shown)

  return (
    <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] shrink-0 flex-col space-y-4 self-stretch overflow-hidden bg-opacity-80 p-5 hover:overflow-auto md:sticky md:block lg:flex lg:min-w-min lg:border-r lg:border-zinc-900/10 dark:lg:border-white/10">
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

      <div>
        <p className="mb-2 text-sm font-bold">Generator</p>
        <ul className="flex w-full flex-col pb-4 pl-0">
          {generatorNavFiltered.map((item, itemIdx) => {
            const isActive = location.toLowerCase() === item.name.toLowerCase()
            return (
              <li key={`nav-${itemIdx}`}>
                <SidebarItem name={item.name} href={item.href} isActive={isActive} isNew={item.new} />
              </li>
            )
          })}
        </ul>
      </div>

      <div>
        <p className="mb-2 text-sm font-bold">Application UI ({applicationUiNavFiltered.length})</p>
        <ul className="flex w-full flex-col pb-4 pl-0">
          {applicationUiNavFiltered.map((item, itemIdx) => {
            const isActive = location.toLowerCase() === item.name.toLowerCase()
            return (
              <li key={`nav-${itemIdx}`}>
                <SidebarItem name={item.name} href={item.href} isActive={isActive} isNew={item.new} />
              </li>
            )
          })}
        </ul>
      </div>

      <div>
        <p className="mb-2 text-sm font-bold">Marketing ({marketingNavFiltered.length})</p>
        <ul className="flex w-full flex-col pb-4 pl-0">
          {marketingNavFiltered.map((item, itemIdx) => {
            const isActive = location.toLowerCase() === item.name.toLowerCase()
            return (
              <li key={`nav-${itemIdx}`}>
                <SidebarItem name={item.name} href={item.href} isActive={isActive} isNew={item.new} />
              </li>
            )
          })}
        </ul>
      </div>

      <div>
        <p className="mb-2 text-sm font-bold">Ecommerce ({eCommerceNavFiltered.length})</p>
        <ul className="flex w-full flex-col pb-4 pl-0">
          {eCommerceNavFiltered.map((item, itemIdx) => {
            const isActive = location.toLowerCase() === item.name.toLowerCase()
            return (
              <li key={`nav-${itemIdx}`}>
                <SidebarItem name={item.name} href={item.href} isActive={isActive} isNew={item.new} />
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}
