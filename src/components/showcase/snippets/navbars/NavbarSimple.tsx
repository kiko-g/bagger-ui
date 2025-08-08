"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function NavbarSimple({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "border-border/60 bg-background/60 supports-[backdrop-filter]:bg-background/40 sticky top-0 z-10 w-full backdrop-blur-lg",
        className,
      )}
    >
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
        <Link href="#" className="font-semibold tracking-tight">
          Acme
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#" className="text-muted-foreground hover:text-foreground text-sm">
            Features
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground text-sm">
            Pricing
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground text-sm">
            Docs
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            Sign in
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  )
}

export default NavbarSimple
