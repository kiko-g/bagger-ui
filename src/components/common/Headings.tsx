import React, { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import { LinkIcon } from "lucide-react"

type Props = HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode
  slideTo?: string
  noMargin?: boolean
  withDivider?: boolean
}

function H1({ children, slideTo, noMargin, withDivider, ...props }: Props) {
  const heading = (
    <h1
      {...props}
      className={cn(
        noMargin ? "mb-0" : "mb-4",
        withDivider && "border-b pb-3",
        "flex flex-wrap items-center text-xl font-bold tracking-tighter md:text-2xl lg:text-3xl lg:tracking-tight xl:text-4xl 2xl:text-5xl",
      )}
    >
      {children}
    </h1>
  )

  return slideTo ? (
    <a id={slideTo} href={`#${slideTo}`} className="group relative hover:underline">
      <span className="absolute top-8 -left-6 opacity-0 transition-all group-hover:opacity-60">
        <LinkIcon className="size-5" />
      </span>
      {heading}
    </a>
  ) : (
    heading
  )
}

function H2({ children, slideTo, noMargin, withDivider, ...props }: Props) {
  const heading = (
    <h2
      {...props}
      className={cn(
        noMargin ? "mb-0" : "mb-3",
        withDivider && "border-b pb-2.5",
        "flex flex-wrap items-center text-lg font-bold tracking-tighter md:text-xl lg:text-2xl lg:tracking-tight xl:text-3xl 2xl:text-4xl",
      )}
    >
      {children}
    </h2>
  )

  return slideTo ? (
    <a id={slideTo} href={`#${slideTo}`} className="group relative hover:underline">
      <span className="absolute top-8 -left-6 opacity-0 transition-all group-hover:opacity-60">
        <LinkIcon className="size-5" />
      </span>
      {heading}
    </a>
  ) : (
    heading
  )
}

function H3({ children, slideTo, noMargin, withDivider, ...props }: Props) {
  const heading = (
    <h3
      {...props}
      className={cn(
        noMargin ? "mb-0" : "mb-2.5",
        withDivider && "border-b pb-2",
        "flex flex-wrap items-center text-base font-bold tracking-tighter md:text-lg lg:text-xl lg:tracking-tight xl:text-2xl 2xl:text-3xl",
      )}
    >
      {children}
    </h3>
  )

  return slideTo ? (
    <a id={slideTo} href={`#${slideTo}`} className="group relative hover:underline">
      <span className="absolute top-8 -left-6 opacity-0 transition-all group-hover:opacity-60">
        <LinkIcon className="size-5" />
      </span>
      {heading}
    </a>
  ) : (
    heading
  )
}

function H4({ children, slideTo, noMargin, withDivider, ...props }: Props) {
  const heading = (
    <h4
      {...props}
      className={cn(
        noMargin ? "mb-0" : "mb-2",
        withDivider && "border-b pb-1.5",
        "flex flex-wrap items-center text-sm font-bold tracking-tighter md:text-base lg:text-lg lg:tracking-tight xl:text-xl 2xl:text-2xl",
      )}
    >
      {children}
    </h4>
  )

  return slideTo ? (
    <a id={slideTo} href={`#${slideTo}`} className="group relative hover:underline">
      <span className="absolute top-8 -left-6 opacity-0 transition-all group-hover:opacity-60">
        <LinkIcon className="size-5" />
      </span>
      {heading}
    </a>
  ) : (
    heading
  )
}

function H5({ children, slideTo, noMargin, withDivider, ...props }: Props) {
  const heading = (
    <h5
      {...props}
      className={cn(
        noMargin ? "mb-0" : "mb-1.5",
        withDivider && "border-b pb-1",
        "flex flex-wrap items-center text-sm font-bold tracking-tighter md:text-sm lg:text-base lg:tracking-tight xl:text-lg 2xl:text-xl",
      )}
    >
      {children}
    </h5>
  )

  return slideTo ? (
    <a id={slideTo} href={`#${slideTo}`} className="group relative hover:underline">
      <span className="absolute top-8 -left-6 opacity-0 transition-all group-hover:opacity-60">
        <LinkIcon className="size-5" />
      </span>
      {heading}
    </a>
  ) : (
    heading
  )
}

function H6({ children, slideTo, noMargin, withDivider, ...props }: Props) {
  const heading = (
    <h6
      {...props}
      className={cn(
        noMargin ? "mb-0" : "mb-1",
        withDivider && "border-b pb-0.5",
        "flex flex-wrap items-center text-xs font-bold tracking-tighter md:text-sm lg:text-base lg:tracking-tight xl:text-lg 2xl:text-xl",
      )}
    >
      {children}
    </h6>
  )

  return slideTo ? (
    <a id={slideTo} href={`#${slideTo}`} className="group relative hover:underline">
      <span className="absolute top-8 -left-6 opacity-0 transition-all group-hover:opacity-60">
        <LinkIcon className="size-5" />
      </span>
      {heading}
    </a>
  ) : (
    heading
  )
}

export { H1, H2, H3, H4, H5, H6 }
