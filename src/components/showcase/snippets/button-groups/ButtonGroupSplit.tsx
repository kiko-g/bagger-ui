'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'

export function ButtonGroupSplit() {
  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <Button className="rounded-r-none">Save</Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="default" className="rounded-l-none border-l px-2 shadow-none">
            <ChevronDown className="h-4 w-4" />
            <span className="sr-only">More save options</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Save as Draft</DropdownMenuItem>
          <DropdownMenuItem>Save as Template</DropdownMenuItem>
          <DropdownMenuItem>Export as PDF</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
