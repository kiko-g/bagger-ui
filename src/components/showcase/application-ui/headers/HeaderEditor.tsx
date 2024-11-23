'use client'

import React from 'react'
import { BuildingLibraryIcon, EllipsisHorizontalIcon, SwatchIcon } from '@heroicons/react/24/outline'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type Props = {}

const HeaderEditor = ({}: Props) => {
  return (
    <header className="flex w-full bg-white px-3 py-2 text-sm dark:bg-zinc-950">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <button className="group rounded-full p-1 transition hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <SwatchIcon className="block size-5 group-hover:hidden" />
            <BuildingLibraryIcon className="hidden size-5 group-hover:block" />
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 rounded-md px-1.5 py-1 text-sm font-medium leading-tight transition hover:bg-zinc-100 dark:hover:bg-white/10">
                <span>Theme</span>
                <EllipsisHorizontalIcon className="mt-[1px] size-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Keyboard shortcuts
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Email</DropdownMenuItem>
                      <DropdownMenuItem>Message</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>More...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  New Team
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>GitHub</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem disabled>API</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <span className="flex items-center gap-1 rounded-full bg-lime-500/10 px-2 py-0.5 text-2xs leading-tight dark:bg-lime-500/10">
            <span className="mt-[1px] size-1.5 rounded-full bg-lime-500"></span>
            <span>Current</span>
          </span>
        </div>
      </div>
    </header>
  )
}

HeaderEditor.displayName = 'HeaderEditor'

export { HeaderEditor }
