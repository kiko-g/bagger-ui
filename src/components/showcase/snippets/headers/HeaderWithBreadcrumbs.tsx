"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { DownloadIcon, Share2Icon } from "lucide-react"

export function HeaderWithBreadcrumbs({ className }: { className?: string }) {
  return (
    <header className={cn("bg-background flex w-full items-center justify-between px-3 py-2", className)}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Projects</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Acme</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>2025 Roadmap</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="gap-1">
          <Share2Icon className="size-4" />
          Share
        </Button>
        <Button size="sm" className="gap-1">
          <DownloadIcon className="size-4" />
          Export
        </Button>
      </div>
    </header>
  )
}

export default HeaderWithBreadcrumbs
