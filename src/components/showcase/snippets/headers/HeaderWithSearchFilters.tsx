"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDownIcon, FilterIcon, PlusIcon } from "lucide-react"

export function HeaderWithSearchFilters({ className }: { className?: string }) {
  return (
    <header className={cn("bg-background flex w-full items-center justify-between px-3 py-2", className)}>
      <div className="flex w-full max-w-xl items-center gap-2">
        <Input placeholder="Search projects" className="h-9" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-1">
              <FilterIcon className="size-4" />
              Filters
              <ChevronDownIcon className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-40">
            <DropdownMenuItem>Owner: You</DropdownMenuItem>
            <DropdownMenuItem>Status: Active</DropdownMenuItem>
            <DropdownMenuItem>Type: App</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm">
          Reset
        </Button>
        <Button size="sm" className="gap-1">
          <PlusIcon className="size-4" />
          New Project
        </Button>
      </div>
    </header>
  )
}

export default HeaderWithSearchFilters
