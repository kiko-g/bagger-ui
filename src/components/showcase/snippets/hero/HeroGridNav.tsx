"use client"

import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { BookOpen, Headphones, LayoutGrid, Layers, ExternalLinkIcon } from "lucide-react"

type NavAction = {
  title: string
  text: string
  href: string
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined
      titleId?: string | undefined
    } & React.RefAttributes<SVGSVGElement>
  >
}

export function HeroGridNav() {
  const actions: NavAction[] = [
    {
      title: "Product",
      text: "Explore features, solutions, and use-cases.",
      href: "#",
      icon: Layers,
    },
    {
      title: "Templates",
      text: "Starter kits and UI patterns to move faster.",
      href: "#",
      icon: LayoutGrid,
    },
    {
      title: "Documentation",
      text: "Guides, API reference, and best practices.",
      href: "#",
      icon: BookOpen,
    },
    {
      title: "Contact sales",
      text: "Talk to a specialist about your use-case.",
      href: "#",
      icon: Headphones,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {actions.map((action, actionIdx) => (
        <Link
          href={action.href}
          key={action.title}
          className={cn(
            actionIdx === 0 ? "" : "",
            "group hover:bg-primary/10 hover:border-primary/20 dark:hover:bg-primary/10 dark:hover:border-primary/20 relative overflow-hidden rounded-xl border border-zinc-200/80 bg-white p-6 shadow-sm ring-1 ring-zinc-200/0 transition hover:shadow-md focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none motion-safe:transform motion-safe:hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:focus-visible:ring-offset-slate-950",
          )}
        >
          <span
            className={cn(
              "inline-flex rounded-md border border-zinc-200 bg-zinc-50 p-2 text-zinc-600 transition dark:border-white/10 dark:bg-white/10 dark:text-zinc-200",
            )}
          >
            <action.icon className="size-5" aria-hidden="true" />
          </span>
          <span className="mt-3 block text-base leading-6 font-semibold tracking-tight text-zinc-900 dark:text-white">
            {action.title}
          </span>
          <span className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{action.text}</span>
          <span
            className="text-muted-foreground group-hover:text-foreground pointer-events-none absolute top-6 right-6 transition"
            aria-hidden="true"
          >
            <ExternalLinkIcon className="size-4 md:size-5" />
          </span>
        </Link>
      ))}
    </div>
  )
}
