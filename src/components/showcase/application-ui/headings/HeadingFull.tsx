import { Heading } from "@/components/ui/heading"

export function HeadingFull() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-4">
      <Heading level="h1" withDivider withAnchor>
        Heading 1
      </Heading>
      <Heading level="h2" withDivider withAnchor>
        Heading 2
      </Heading>
      <Heading level="h3" withDivider withAnchor>
        Heading 3
      </Heading>
      <Heading level="h4" withDivider withAnchor>
        Heading 4
      </Heading>
      <Heading level="h5" withDivider withAnchor>
        Heading 5
      </Heading>
      <Heading level="h6" withDivider withAnchor>
        Heading 6
      </Heading>
    </div>
  )
}
