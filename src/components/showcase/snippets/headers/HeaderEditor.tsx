"use client"

import React from "react"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Building2Icon, EllipsisIcon, PaintBucketIcon, RedoIcon, UndoIcon } from "lucide-react"

export function HeaderEditor({ className }: { className?: string }) {
  return (
    <header className={cn("flex w-full bg-white px-3 py-2 text-sm dark:bg-zinc-950", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 border-r border-zinc-200 pr-2 dark:border-zinc-800">
          <Button variant="ghost" size="icon" className="group">
            <PaintBucketIcon className="block size-5 group-hover:hidden" />
            <Building2Icon className="hidden size-5 group-hover:block" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 rounded-md px-1.5 py-1 text-sm leading-tight font-medium transition hover:bg-zinc-100 dark:hover:bg-white/10">
                <span className="max-w-[120px] truncate">Theme</span>
                <EllipsisIcon className="mt-[1px] size-4" />
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

          <span className="text-2xs flex items-center gap-1 rounded-full bg-lime-500/10 px-2 py-0.5 leading-tight dark:bg-lime-500/10">
            <span className="mt-[1px] size-1.5 rounded-full bg-lime-500"></span>
            <span>Current</span>
          </span>
        </div>
      </div>

      <div className="flex w-full items-center justify-end gap-4">
        <div className="flex items-center gap-1.5">
          <Button variant="outline" size="icon" disabled>
            <UndoIcon className="size-4" />
          </Button>
          <Button variant="outline" size="icon">
            <RedoIcon className="size-4" />
          </Button>
        </div>

        <Button variant="success" size="sm">
          Save
        </Button>
      </div>
    </header>
  )
}

HeaderEditor.displayName = "HeaderEditor"
