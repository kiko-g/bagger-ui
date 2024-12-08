'use client'

import Link from 'next/link'
import { QuickNavigation } from '@/types'

export function QuickNavSidebar({ navigation }: { navigation?: QuickNavigation }) {
  return (
    <aside className="sticky mt-8 hidden shrink-0 flex-col space-y-4 self-stretch overflow-auto bg-opacity-80 p-3 xl:flex xl:w-72">
      <h4 className="mb-4 text-xl font-semibold">On this page</h4>
      <ul className="flex w-full flex-col gap-3">
        {navigation &&
          navigation.map((level, levelIdx) => {
            if ('href' in level)
              return (
                <li key={`nav-single-${levelIdx}`}>
                  <a href={level.href} className="text-sm font-bold hover:underline">
                    {level.name}
                  </a>
                </li>
              )

            return (
              <li key={`nav-${levelIdx}`}>
                <a href={`#${level.name.toLowerCase()}`} className="text-sm font-bold hover:underline">
                  {level.name}
                </a>
                <ul className="my-2 ml-3 flex w-full flex-col gap-1">
                  {level.items &&
                    level.items.map((item, itemIdx) => (
                      <li key={`nav-item-${levelIdx}-${itemIdx}`}>
                        <Link
                          href={item.href}
                          className="text-sm font-normal tracking-tight text-zinc-800 hover:underline dark:text-white"
                        >
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </li>
            )
          })}
      </ul>
    </aside>
  )
}
