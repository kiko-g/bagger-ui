'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Menu } from '@headlessui/react'
import { BuildingOfficeIcon, ChartBarIcon, ChevronDownIcon, CpuChipIcon } from '@heroicons/react/24/outline'

export function ButtonGroupSplit() {
  const items = [
    { icon: BuildingOfficeIcon, text: 'Option 1' },
    { icon: ChartBarIcon, text: 'Option 2' },
    { icon: CpuChipIcon, text: 'Option 3' },
  ]

  function myFunction() {
    // your onClick code here
  }

  return (
    <div className="relative flex items-center justify-center text-sm font-medium shadow">
      <button
        onClick={myFunction}
        className="rounded-l bg-slate-700 px-4 py-3 text-white transition hover:bg-slate-700 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-slate-500/60 dark:hover:bg-slate-700"
      >
        Main Action
      </button>

      <Menu>
        <Menu.Button className="h-full flex-1 self-stretch rounded-r bg-slate-700 px-3 py-3 text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-25 dark:bg-slate-500/60 dark:hover:bg-slate-700">
          <ChevronDownIcon className="h-5 w-5" />
        </Menu.Button>
        <Menu.Items className="absolute right-0 top-2 mt-12 flex min-w-full flex-col rounded bg-white py-0 shadow dark:bg-black/50">
          {items.map((item, itemIdx) => (
            <Menu.Item key={`button-split-item-${itemIdx}`}>
              {({ active }) => (
                <button
                  className={cn(
                    'flex items-center gap-2 px-3 py-2.5 text-sm transition',
                    itemIdx === 0 && 'rounded-t',
                    itemIdx === items.length - 1 && 'rounded-b',
                    active && 'bg-slate-700 text-white',
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>Option {itemIdx + 1}</span>
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  )
}
