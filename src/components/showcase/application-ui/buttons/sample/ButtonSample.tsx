import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

import { ShadCnIcon } from '@/components/icons'
import { CodeShowcaseFromAPI } from '@/components/CodeShowcaseFromAPI'

import { ExternalLink, LinkIcon } from 'lucide-react'
import { CodeShowcaseFile } from '@/components/CodeShowcaseFile'

export function ButtonSampleSetup() {
  return (
    <Accordion id="setup" className="pt-4 xl:pt-12" type="single" defaultValue="item-1" collapsible>
      <AccordionItem value="item-1" className="border-b-0">
        <AccordionTrigger className="mb-2 flex flex-wrap items-center border-b border-zinc-200 pb-1 pt-0 text-base font-semibold tracking-tighter dark:border-zinc-800 md:text-lg lg:text-xl lg:tracking-tight xl:text-2xl 2xl:text-3xl">
          <span>Setup</span>
          <LinkIcon className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-60" />
        </AccordionTrigger>

        <AccordionContent className="space-y-4">
          <p>
            As mentioned in the Setup tab, some of our components follow Shadcn UI, with some differences, namely a
            wider range of variants with opiniated yet equally deeply customizable behavior and styling. Get started by{' '}
            <strong className="underline">installing</strong> the component from{' '}
            <Button variant="default" size="xs" className="ml-0.5">
              <Link
                target="_blank"
                href="https://ui.shadcn.com/docs/components/button#installation"
                className="flex items-center gap-2"
              >
                <ShadCnIcon className="h-4.5 w-4.5 rounded bg-white p-[2px] text-zinc-900 dark:bg-zinc-900 dark:text-white" />
                <span>Shadcn UI</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </p>
          <p>
            Alternatively, you can <strong className="underline">copy</strong> the following code into your project, but
            make sure to <strong className="underline">adjust</strong> any necessary imports and styles to fit your
            setup, preference and needs.
          </p>

          <CodeShowcaseFile path="ui/button.tsx" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
