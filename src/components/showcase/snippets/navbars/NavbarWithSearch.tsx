"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function NavbarWithSearch({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "border-border/60 bg-background/60 supports-[backdrop-filter]:bg-background/40 sticky top-0 z-10 w-full backdrop-blur-lg",
        className,
      )}
    >
      <div className="mx-auto grid h-14 w-full max-w-6xl grid-cols-3 items-center gap-3 px-4">
        <div className="flex items-center">
          <Link href="#" className="font-semibold tracking-tight">
            Acme
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex w-full max-w-md items-center gap-2">
            <Input placeholder="Search" className="h-9" />
            <Button size="sm" className="h-9">
              Search
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            Sign in
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  )
}

export default NavbarWithSearch
