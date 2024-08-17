import React from "react"
import clsx from "clsx"
import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import { Lexend } from "next/font/google"
import { Layout } from "@/components/Layout"
import { ReactIcon, TailwindIcon, TypescriptIcon } from "@/components/icons"
import { applicationUiNav, eCommerceNav, marketingNav } from "@/utils/data"

const lexend = Lexend({ subsets: ["latin"] })

export default function Home() {
  return (
    <Layout location="Home" sidebar>
      <Hero />
      <Sections />
    </Layout>
  )
}

function Hero() {
  return (
    <div className="my-1 max-w-full py-4 md:max-w-xl lg:max-w-2xl lg:py-6 xl:max-w-3xl">
      <h2
        className={clsx(
          lexend.className,
          "flex flex-wrap items-center text-lg font-bold tracking-tighter md:text-xl lg:text-2xl lg:tracking-tight xl:text-3xl 2xl:text-4xl"
        )}
      >
        Reusable UI Components with
        <span>
          <ReactIcon className="ml-2 mr-1 inline-flex h-5 w-5 align-middle text-[#149eca] lg:h-7 lg:w-7" />
          <span className="text-[#149eca]">React</span>
          {", "}
        </span>
        <span>
          <TypescriptIcon className="ml-2.5 mr-1.5 inline-flex h-5 w-5 align-middle text-[#3178c6] lg:h-7 lg:w-7" />
          <span className="text-[#3178c6]">Typescript</span>
          {", and "}
        </span>
        <span>
          <TailwindIcon className="ml-2 mr-1.5 inline-flex h-5 w-5 align-middle text-[#38bdf8] lg:h-7 lg:w-7" />
          <span className="text-[#38bdf8]">TailwindCSS</span>
          <span>.</span>
        </span>
      </h2>
    </div>
  )
}

function Sections() {
  return (
    <div className="mb-24 w-full">
      <p className="mb-4 max-w-4xl">
        Start exploring the types of components we have available and visit their individual pages where you can find
        the web components and their source code. Make sure you have checked out the{" "}
        <Link href="/setup" className="font-bold underline hover:text-primary hover:opacity-80 dark:hover:text-primary">
          <code>configuration</code>
        </Link>{" "}
        page. Your setup should be similar, otherwise some components might not work as expected in your project.
      </p>

      <div className="border-dimmed mt-8 border-t pt-4">
        <h3 className="mb-3 text-xl font-bold">Application UI Components</h3>
        <ul className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4 xl:grid-cols-5 xl:gap-3">
          {applicationUiNav.map(({ name, count, description, image, href }) => (
            <li key={`showcase-application-ui-${name}`} className="group flex w-full flex-col gap-1">
              <SectionCard title={name} count={count} description={description} image={image} link={href} />
            </li>
          ))}
        </ul>
      </div>

      <div className="border-dimmed mt-16 border-t pt-4">
        <h3 className="mb-3 text-xl font-bold">Marketing Components</h3>
        <ul className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4 xl:grid-cols-5 xl:gap-3">
          {marketingNav.map(({ name, count, description, image, href }) => (
            <li key={`showcase-marketing-${name}`} className="group flex w-full flex-col gap-1">
              <SectionCard title={name} count={count} description={description} image={image} link={href} />
            </li>
          ))}
        </ul>
      </div>

      <div className="border-dimmed mt-16 border-t pt-4">
        <h3 className="mb-3 text-xl font-bold">Ecommerce Components</h3>
        <ul className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4 xl:grid-cols-5 xl:gap-3">
          {eCommerceNav.map(({ name, count, description, image, href }) => (
            <li key={`showcase-ecommerce-${name}`} className="group flex w-full flex-col gap-1">
              <SectionCard title={name} count={count} description={description} image={image} link={href} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

type SectionCardProps = {
  title: string
  count: number
  link: string
  description: string
  image?: StaticImageData
}

function SectionCard({ title, count, description, link, image }: SectionCardProps) {
  return (
    <Link
      href={link}
      className="flex flex-1 flex-col border border-slate-300/80 bg-white px-4 py-4 xl:px-3 xl:py-3 text-white transition-all group-hover:bg-primary-50 hover:border-primary dark:border-slate-100/20 dark:bg-primary/20 dark:group-hover:bg-primary/40 dark:hover:border-primary"
    >
      {image ? (
        <Image
          src={image}
          alt={title}
          height={1600}
          width={900}
          className="w-full aspect-[8/5] bg-slate-100 object-cover"
        ></Image>
      ) : (
        <div className="aspect-[8/5] w-full border border-primary-600 bg-primary-400 transition group-hover:border-primary-700 group-hover:bg-primary-500 dark:border-white/5 dark:bg-primary-900/50 dark:group-hover:border-primary-800 dark:group-hover:bg-primary-900" />
      )}
      <h4 className="mt-3 text-sm font-semibold text-slate-900 transition dark:text-white">{title}</h4>
      <p className="-mt-[2px] text-[0.7rem] font-normal text-slate-600 dark:text-gray-300 lg:text-xs">
        {count} component{count === 1 ? "" : "s"}
      </p>
    </Link>
  )
}
