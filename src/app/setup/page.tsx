import React from "react"
import Link from "next/link"
import type { QuickNavigation } from "@/types"

import { CodeShowcaseFromAPI } from "@/components/CodeShowcaseFromAPI"
import { Layout } from "@/components/Layout"
import { Button } from "@/components/ui/button"
import { ShadCnIcon } from "@/components/icons"

import { ExternalLink } from "lucide-react"

export default function Config() {
  const quickNav: QuickNavigation = [
    {
      name: "Getting Started",
      href: "#getting-started",
    },
    {
      name: "Tailwind Config",
      href: "#tailwind-config",
    },
    {
      name: "Types",
      href: "#types",
    },
  ]

  return (
    <Layout location="Setup" sidebar quickNav={quickNav}>
      <section className="w-full border-b pt-4 pb-2 text-sm lg:pt-6 lg:pb-3 xl:pt-10 xl:pb-5">
        <h2 className="mb-3 text-xl font-semibold tracking-tighter lg:text-4xl">Setup</h2>
        <p className="max-w-3xl">
          This page covers the configuration of the tech stack, packages and tools used so that you can use our
          components to there full potential.
        </p>
      </section>

      <section id="getting-started" className="w-full border-b pt-4 pb-2 text-sm lg:pt-6 lg:pb-3 xl:pt-10 xl:pb-5">
        <h2 className="mb-3 text-lg font-semibold tracking-tighter lg:text-3xl">Getting Started</h2>
        <p className="mb-3 max-w-3xl">
          This library is aimed at delivering consistent, reusable and customizable UI components specifically for
          projects using React and TailwindCSS and (very) prefferably using Typescript.
        </p>

        <p className="mb-3 max-w-3xl">
          Outside of that stack, our project follows ShadcnUI and is built on top of it for the most part. The goal of
          BaggerUI is to expand on ShadCN&apos;s work by delivering more out of the box options for your components as
          well as putting the pieces together. We want you to come on our platform and find what you need with little to
          no additional effort.
        </p>

        <p className="mb-3 max-w-3xl">
          You can get started by following the
          <Button variant="default" size="xs" className="ml-2">
            <Link target="_blank" href={`https://ui.shadcn.com/docs/installation`} className="flex items-center gap-2">
              <ShadCnIcon className="h-4.5 w-4.5 rounded bg-white p-[2px] text-zinc-900 dark:bg-zinc-900 dark:text-white" />
              <span>Shadcn Installation</span>
              <ExternalLink className="size-3.5" />
            </Link>
          </Button>
        </p>
      </section>

      <section id="tailwind-config" className="w-full border-b-0 pt-4 pb-2 text-sm lg:pt-6 lg:pb-3 xl:pt-10 xl:pb-5">
        <h2 className="mb-3 text-lg font-semibold tracking-tighter lg:text-3xl">Tailwind Config File</h2>
        <p className="mb-3 max-w-3xl">
          This site uses a custom Tailwind config that extends the default Tailwind config. Copy our config to your{" "}
          <span className="text-primary font-semibold">tailwind.config.js</span> file that should be in the root of your
          project.
        </p>
        <div className="w-full rounded-xl">
          <CodeShowcaseFromAPI route="api/code/tailwind" language="typescript" />
        </div>
      </section>

      <section id="types" className="w-full border-b-0 pt-4 pb-2 text-sm lg:pt-6 lg:pb-3 xl:pt-10 xl:pb-5">
        <h2 className="mb-3 text-lg font-semibold tracking-tighter lg:text-3xl">Types</h2>
        <p className="mb-3 max-w-3xl">
          To keep a tidy codebase, reduce errors and have strong maintainability, we make use of TypeScript, Defined in
          the <span className="text-primary font-semibold">@/types</span> folder you can get a grasp of the types used
          to build our components and BaggerUI.
        </p>
        <div className="w-full rounded-xl">
          <CodeShowcaseFromAPI route="api/code/types" language="typescript" />
        </div>
      </section>
    </Layout>
  )
}
