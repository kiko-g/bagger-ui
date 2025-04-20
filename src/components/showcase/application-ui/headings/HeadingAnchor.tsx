import { Heading } from "@/components/ui/heading"

export function HeadingAnchor() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-4">
      <Heading level="h1" withAnchor>
        Heading 1
      </Heading>
      <Heading level="h2" withAnchor>
        Heading 2
      </Heading>
      <Heading level="h3" withAnchor>
        Heading 3
      </Heading>
      <Heading level="h4" withAnchor>
        Heading 4
      </Heading>
      <Heading level="h5" withAnchor>
        Heading 5
      </Heading>
      <Heading level="h6" withAnchor>
        Heading 6
      </Heading>
    </div>
  )
}
