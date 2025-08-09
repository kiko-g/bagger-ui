"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export function NavbarMobileDrawer({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "border-border/60 bg-background/60 supports-backdrop-filter:bg-background/40 sticky top-0 z-10 w-full backdrop-blur-lg",
        className,
      )}
    >
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <MenuIcon className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Acme</SheetTitle>
              </SheetHeader>
              <nav className="mt-4 flex flex-col gap-2">
                <Link href="#" className="hover:bg-accent rounded-md p-2">
                  Features
                </Link>
                <Link href="#" className="hover:bg-accent rounded-md p-2">
                  Pricing
                </Link>
                <Link href="#" className="hover:bg-accent rounded-md p-2">
                  Docs
                </Link>
              </nav>
              <SheetFooter className="mt-6">
                <Button className="w-full">Get Started</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <Link href="#" className="font-semibold tracking-tight">
            Acme
          </Link>
        </div>
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
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm">
            Sign in
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  )
}

export default NavbarMobileDrawer
