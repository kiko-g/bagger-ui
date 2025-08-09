"use client"

import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ReactIcon, TailwindIcon, TypescriptIcon, ShadCnIcon } from "@/components/icons"
import { applicationUiNav, snippetsNav, Section } from "@/utils/data"

import { Layout } from "@/components/Layout"
import { SectionCard } from "@/components/SectionCard"

export default function Home() {
  return (
    <Layout location="Home" sidebar>
      <Hero />
      <div className="mb-24 w-full">
        <p className="mb-4 max-w-4xl text-sm">
          Start exploring the types of components we have available and visit their individual pages where you can find
          the web components and their source code. Make sure you have checked out the{" "}
          <Link href="/setup" className="text-primary font-medium transition hover:underline">
            configuration
          </Link>{" "}
          page. Your setup should be similar, otherwise some components might not work as expected in your project.
        </p>

        <ComponentsSection items={snippetsNav} title="Snippets" />
        <ComponentsSection items={applicationUiNav} title="Components" />
      </div>
    </Layout>
  )
}

function ComponentsSection({ items, title }: { items: Section[]; title: string }) {
  return (
    <div className="mt-16 border-t pt-4">
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 xl:gap-5 2xl:grid-cols-6 2xl:gap-4">
        {items.map((section) => (
          <SectionCard key={`showcase-${title}-${section.href}`} section={section} />
        ))}
      </div>
    </div>
  )
}

function Hero() {
  const technologies = [
    { TechIcon: ReactIcon, name: "React", className: "text-[#149eca]" },
    { TechIcon: TypescriptIcon, name: "Typescript", className: "text-[#3178c6]" },
    { TechIcon: TailwindIcon, name: "TailwindCSS", className: "text-[#38bdf8]" },
    { TechIcon: ShadCnIcon, name: "Shadcn", className: "text-white rounded-sm p-px bg-zinc-950" },
  ]

  return (
    <div className="max-w-xl space-y-3 py-4 lg:py-6">
      <div className="flex flex-wrap items-center gap-3">
        {technologies.map(({ TechIcon, name, className }) => (
          <TechIcon key={name} className={cn(`inline-flex size-5 align-middle lg:h-7 lg:w-7`, className)} />
        ))}
      </div>
      <h2
        className={cn(
          "flex flex-wrap items-center text-lg font-bold tracking-tighter lg:text-2xl lg:tracking-tight xl:text-3xl 2xl:text-4xl",
        )}
      >
        Reusable React Typescript Components with TailwindCSS and Shadcn
      </h2>
    </div>
  )
}
