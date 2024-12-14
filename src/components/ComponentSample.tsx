'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { CodeShowcaseFile } from '@/components/CodeShowcaseFile'

import { ShadCnIcon } from '@/components/icons'
import { ExternalLink } from 'lucide-react'

export function ComponentSample({ name }: { name: string }) {
  const steps = [
    {
      number: 1,
      content: (
        <p>
          As mentioned in the Setup tab, some of our components follow Shadcn UI, with differences done on top of these
          components, namely a wider range of variants and functionality, all the while keeping the deep customization
          options open. You can get started by installing the component from{' '}
          <Button variant="default" size="xs" className="ml-0.5">
            <Link
              target="_blank"
              href={`https://ui.shadcn.com/docs/components/${name}#installation`}
              className="flex items-center gap-2"
            >
              <ShadCnIcon className="h-4.5 w-4.5 rounded bg-white p-[2px] text-zinc-900 dark:bg-zinc-900 dark:text-white" />
              <span>Shadcn UI</span>
              <ExternalLink className="size-3.5" />
            </Link>
          </Button>
        </p>
      ),
    },
    {
      number: 2,
      content: (
        <p>
          To have access to our features copy the code in the block below and replace the existing code in the generated
          component file in your project, which by default is{' '}
          <code className="mx-1 rounded-full bg-teal-700 px-1.5 py-0.5 text-2xs font-semibold text-white">{`components/ui/${name}.tsx`}</code>
        </p>
      ),
    },
    {
      number: 3,
      content: <p>Make sure to adjust any necessary imports and styles to fit your setup, preference and needs.</p>,
    },
  ]

  return (
    <div className="space-y-4 pt-4 text-sm xl:pt-12" id="setup">
      <ul className="flex flex-col gap-3">
        {steps.map((step) => (
          <li key={step.number} className="flex gap-3">
            <div className="flex flex-col items-center gap-1.5">
              <span className="mt-1 flex size-5 min-w-5 items-center justify-center rounded-full border border-zinc-800 bg-zinc-800 text-center font-mono text-xs font-bold text-white">
                {step.number}
              </span>
              <span className="h-full w-[1px] bg-zinc-300 dark:bg-zinc-800"></span>
            </div>
            <p>{step.content}</p>
          </li>
        ))}
      </ul>

      <CodeShowcaseFile path={`ui/${name}.tsx`} />
    </div>
  )
}
