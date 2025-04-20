"use client"

import Link from "next/link"
import { QuickNavigation } from "@/types"

export function QuickNavSidebar({ navigation }: { navigation?: QuickNavigation }) {
  if (!navigation) return null

  return (
    <nav className="bg-opacity-80 fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] min-w-64 shrink-0 flex-col space-y-4 self-stretch overflow-auto py-8 pr-6 pl-4 hover:overflow-auto md:sticky md:block lg:flex">
      <h4 className="mb-4 text-xl font-semibold">On this page</h4>
      <ul className="flex w-full flex-col gap-2">
        {navigation.map((level, levelIdx) => {
          if ("href" in level)
            return (
              <li key={`nav-single-${levelIdx}`}>
                <a href={level.href} className="text-sm font-medium hover:underline">
                  {level.name}
                </a>
              </li>
            )

          if (!level.items || level.items.length === 0) return null

          return (
            <li key={`nav-${levelIdx}`}>
              <a href={`#${level.name.toLowerCase()}`} className="text-sm font-medium hover:underline">
                {level.name}
              </a>
              {level.items && level.items.length > 0 && (
                <ul className="my-2 ml-3 flex w-full flex-col gap-0.5">
                  {level.items.map((item, itemIdx) => (
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
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
