'use client'

import Link from 'next/link'

export function QuickNavSidebar({ navigation }: { navigation?: { name: string; href: string }[] }) {
  return (
    <aside className="sticky mt-8 hidden shrink-0 flex-col space-y-4 self-stretch overflow-auto bg-opacity-80 p-3 xl:flex xl:w-72">
      <h4 className="mb-4 text-xl font-semibold">On this page</h4>
      <ul className="flex w-full flex-col gap-2">
        {navigation &&
          navigation.map((item, itemIdx) => (
            <li key={`nav-${itemIdx}`}>
              <Link
                href={item.href}
                className="text-sm font-normal tracking-tight text-gray-800 hover:underline dark:text-white"
              >
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
      </ul>
    </aside>
  )
}
