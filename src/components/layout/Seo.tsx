"use client"

import Head from "next/head"

export function Seo({ title }: { title: string }) {
  const siteTitle = `BaggerUI`
  const author = `kikogoncalves`
  const description = `Reusable UI Components with React, Typescript, and TailwindCSS.`

  const meta = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: siteTitle,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author || ``,
    },
    {
      name: `twitter:title`,
      content: siteTitle,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ]

  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      {meta.map((meta, metaIdx) => (
        <meta key={`meta-tag-${metaIdx}`} name={meta.name} content={meta.content} />
      ))}
    </Head>
  )
}
