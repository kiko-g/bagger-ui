import React from 'react'
import Link from 'next/link'
import { Layout } from '@/components/Layout'
import { Hero } from '@/components/layout/Hero'
import { SectionCard } from '@/components/SectionCard'
import { applicationUiNav, eCommerceNav, marketingNav } from '@/utils/data'

export default function Home() {
  return (
    <Layout location="Home" sidebar>
      <Hero />
      <div className="mb-24 w-full">
        <p className="mb-4 max-w-4xl">
          Start exploring the types of components we have available and visit their individual pages where you can find
          the web components and their source code. Make sure you have checked out the{' '}
          <Link href="/setup" className="font-bold transition hover:underline">
            <code>configuration</code>
          </Link>{' '}
          page. Your setup should be similar, otherwise some components might not work as expected in your project.
        </p>

        <div className="border-dimmed mt-8 border-t pt-4">
          <h3 className="mb-3 text-xl font-bold">Application UI Components</h3>
          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 xl:gap-5">
            {applicationUiNav.map(({ name, count, description, image, href, pattern }) => (
              <SectionCard
                key={`showcase-application-ui-${name}`}
                title={name}
                href={href}
                description={description}
                pattern={pattern}
              />
            ))}
          </div>
        </div>

        <div className="border-dimmed mt-16 border-t pt-4">
          <h3 className="mb-3 text-xl font-bold">Marketing Components</h3>
          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 xl:gap-5">
            {marketingNav.map(({ name, count, description, image, href, pattern }) => (
              <SectionCard
                key={`showcase-marketing-${name}`}
                title={name}
                description={description}
                pattern={pattern}
                href={href}
              />
            ))}
          </div>
        </div>

        <div className="border-dimmed mt-16 border-t pt-4">
          <h3 className="mb-3 text-xl font-bold">Ecommerce Components</h3>
          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 xl:gap-5">
            {eCommerceNav.map(({ name, count, description, image, href, pattern }) => (
              <SectionCard
                key={`showcase-ecommerce-${name}`}
                title={name}
                description={description}
                pattern={pattern}
                href={href}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
