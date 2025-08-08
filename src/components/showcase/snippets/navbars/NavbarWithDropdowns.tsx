"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function NavbarWithDropdowns({ className }: { className?: string }) {
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
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent className="p-4">
                <div className="grid w-[320px] grid-cols-1 gap-2">
                  <Link href="#" className="hover:bg-accent rounded-md p-2">
                    Analytics
                  </Link>
                  <Link href="#" className="hover:bg-accent rounded-md p-2">
                    Messaging
                  </Link>
                  <Link href="#" className="hover:bg-accent rounded-md p-2">
                    Workflows
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent className="p-4">
                <div className="grid w-[320px] grid-cols-1 gap-2">
                  <Link href="#" className="hover:bg-accent rounded-md p-2">
                    Docs
                  </Link>
                  <Link href="#" className="hover:bg-accent rounded-md p-2">
                    Guides
                  </Link>
                  <Link href="#" className="hover:bg-accent rounded-md p-2">
                    API Reference
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
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

export default NavbarWithDropdowns
