"use client"

import type { HTMLAttributes, ElementType, ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Hash } from "lucide-react"

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: HeadingLevel
  children: ReactNode
  id?: string
  noMargin?: boolean
  withDivider?: boolean
  withAnchor?: boolean
  className?: string
}

const headingSizes: Record<HeadingLevel, string> = {
  h1: "text-xl font-bold tracking-tighter md:text-2xl lg:text-3xl lg:tracking-tight xl:text-4xl 2xl:text-5xl",
  h2: "text-lg font-bold tracking-tighter md:text-xl lg:text-2xl lg:tracking-tight xl:text-3xl 2xl:text-4xl",
  h3: "text-base font-bold tracking-tighter md:text-lg lg:text-xl lg:tracking-tight xl:text-2xl 2xl:text-3xl",
  h4: "text-sm font-bold tracking-tighter md:text-base lg:text-lg lg:tracking-tight xl:text-xl 2xl:text-2xl",
  h5: "text-xs font-bold tracking-tighter md:text-sm lg:text-base lg:tracking-tight xl:text-lg 2xl:text-xl",
  h6: "text-xs font-bold tracking-tighter md:text-xs lg:text-sm lg:tracking-tight xl:text-base 2xl:text-lg",
}

const headingAnchorTopMargin: Record<HeadingLevel, string> = {
  h1: "12px",
  h2: "11px",
  h3: "10px",
  h4: "9px",
  h5: "8px",
  h6: "8px",
}

const headingAnchorSize: Record<HeadingLevel, string> = {
  h1: "h-4.5 w-4.5",
  h2: "h-4 w-4",
  h3: "h-3.5 w-3.5",
  h4: "h-3 w-3",
  h5: "h-3 w-3",
  h6: "h-3 w-3",
}

const headingMargins: Record<HeadingLevel, string> = {
  h1: "mb-4",
  h2: "mb-3",
  h3: "mb-2.5",
  h4: "mb-2",
  h5: "mb-1.5",
  h6: "mb-1",
}

const headingDividers: Record<HeadingLevel, string> = {
  h1: "border-b pb-3",
  h2: "border-b pb-2.5",
  h3: "border-b pb-2",
  h4: "border-b pb-1.5",
  h5: "border-b pb-1",
  h6: "border-b pb-0.5",
}

export function Heading({
  level,
  children,
  id,
  noMargin = false,
  withDivider = false,
  withAnchor = false,
  className,
  ...props
}: HeadingProps) {
  const Component = level as ElementType

  const headingId =
    id ||
    (typeof children === "string"
      ? children
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "")
      : undefined)

  if (!withAnchor || !headingId) {
    return (
      <Component
        id={headingId}
        className={cn(
          headingSizes[level],
          !noMargin && headingMargins[level],
          withDivider && headingDividers[level],
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }

  return (
    <div className="group flex items-start">
      <a
        href={`#${headingId}`}
        style={{ marginTop: headingAnchorTopMargin[level] }}
        className="mr-2 opacity-0 transition-opacity group-hover:opacity-100"
        aria-label={`Link to ${typeof children === "string" ? children : "section"}`}
      >
        <Hash className={cn("text-muted-foreground", headingAnchorSize[level])} />
      </a>
      <Component
        id={headingId}
        className={cn(
          "w-full",
          headingSizes[level],
          !noMargin && headingMargins[level],
          withDivider && headingDividers[level],
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    </div>
  )
}

export function H1(props: Omit<HeadingProps, "level">) {
  return <Heading level="h1" {...props} />
}

export function H2(props: Omit<HeadingProps, "level">) {
  return <Heading level="h2" {...props} />
}

export function H3(props: Omit<HeadingProps, "level">) {
  return <Heading level="h3" {...props} />
}

export function H4(props: Omit<HeadingProps, "level">) {
  return <Heading level="h4" {...props} />
}

export function H5(props: Omit<HeadingProps, "level">) {
  return <Heading level="h5" {...props} />
}

export function H6(props: Omit<HeadingProps, "level">) {
  return <Heading level="h6" {...props} />
}
