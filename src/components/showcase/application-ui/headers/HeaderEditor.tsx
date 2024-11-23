'use client'

import React from 'react'
import { ArrowUturnLeftIcon, ArrowUturnRightIcon } from '@heroicons/react/24/solid'
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
        <div className="flex items-center gap-1.5 border-r border-zinc-200 pr-2 dark:border-zinc-800">
          <Button variant="minimal" size="tiny" className="group">
            <SwatchIcon className="block size-5 group-hover:hidden" />
            <BuildingLibraryIcon className="hidden size-5 group-hover:block" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 rounded-md px-1.5 py-1 text-sm font-medium leading-tight transition hover:bg-zinc-100 dark:hover:bg-white/10">
                <span className="max-w-[120px] truncate">Theme</span>
                <EllipsisHorizontalIcon className="mt-[1px] size-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" side="bottom" align="start">
              <DropdownMenuLabel>Theme v4.3.1</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>View Online</DropdownMenuItem>
                <DropdownMenuItem>Theme Gallery</DropdownMenuItem>
                <DropdownMenuItem>Code Editor</DropdownMenuItem>
                <DropdownMenuItem>Edit Navigation</DropdownMenuItem>
                <DropdownMenuItem>Documentation</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <span className="flex items-center gap-1 rounded-full bg-lime-500/10 px-2 py-0.5 text-2xs leading-tight dark:bg-lime-500/10">
            <span className="mt-[1px] size-1.5 rounded-full bg-lime-500"></span>
            <span>Current</span>
          </span>
        </div>
      </div>

      <div className="flex w-full items-center justify-end gap-4">
        <div className="flex items-center gap-1.5">
          <Button variant="outline" size="tiny" disabled>
            <ArrowUturnLeftIcon className="size-4 stroke-2" />
          </Button>
          <Button variant="outline" size="tiny">
            <ArrowUturnRightIcon className="size-4 hover:stroke-2" />
          </Button>
        </div>

        <Button variant="success" size="sm">
          Save
        </Button>
      </div>
    </header>
  )
}

HeaderEditor.displayName = 'HeaderEditor'

export { HeaderEditor }
