'use client'

import React from 'react'
import clsx from 'clsx'
import { Lexend } from 'next/font/google'

type Props = {
  location: string
}

const lexend = Lexend({ subsets: ['latin'] })

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Shop', href: '#' },
  { name: 'Profile', href: '#' },
  { name: 'Inventory', href: '#' },
  { name: 'Help', href: '#' },
]

export function NavbarSimple({ location }: Props) {
  return (
    <nav className="flex w-full flex-col items-start justify-between gap-8 bg-white px-6 py-4 dark:bg-gray-900 lg:flex-row xl:px-6 xl:py-6">
      <div>
        <a href="#" className="flex items-center gap-2 transition hover:opacity-80">
          <span className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 lg:h-6 lg:w-6" />
          <h1 className={clsx(lexend.className, 'text-lg font-semibold lg:text-xl')}>AppTitle</h1>
        </a>
      </div>

      <ul className="flex flex-col items-start justify-start gap-4 lg:flex-row lg:gap-2">
        {navigation.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={clsx(
                'rounded-md px-3 py-2 text-sm font-medium transition',
                location === item.name
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800',
              )}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
