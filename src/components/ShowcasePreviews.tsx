import {
  BellIcon,
  StarIcon,
  MessageSquareIcon,
  ChevronRightIcon,
  LineChartIcon,
  ShoppingBagIcon,
  CheckCircleIcon,
  MousePointerIcon,
} from "lucide-react"

export const Previews = {
  ButtonGroups: ButtonGroupsPreview,
  CTASections: CTASectionsPreview,
  HeroSections: HeroSectionsPreview,
  KPIWidgets: KPIWidgetsPreview,
  ProductCards: ProductCardsPreview,
  ProductOverviews: ProductOverviewsPreview,
  Alerts: AlertsPreview,
  Badges: BadgesPreview,
  Buttons: ButtonsPreview,
  Checkboxes: CheckboxesPreview,
  ColorPickers: ColorPickerPreview,
  Dropzones: DropzonePreview,
  Heading: HeadingPreview,
}

export function ButtonGroupsPreview() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3">
      <div className="flex gap-2">
        <div className="bg-primary flex h-8 w-20 items-center justify-center rounded-md">
          <span className="text-primary-foreground text-xs">Primary</span>
        </div>
        <div className="bg-background flex h-8 w-20 items-center justify-center rounded-md border">
          <span className="text-xs">Secondary</span>
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full">
          <StarIcon className="text-primary-foreground h-3 w-3" />
        </div>
        <div className="bg-background flex h-8 w-8 items-center justify-center rounded-full border">
          <BellIcon className="h-3 w-3" />
        </div>
        <div className="bg-background flex h-8 w-8 items-center justify-center rounded-full border">
          <MessageSquareIcon className="h-3 w-3" />
        </div>
      </div>
    </div>
  )
}

export function CTASectionsPreview() {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="bg-primary/10 flex h-12 w-full items-center justify-between rounded-md p-2">
        <div className="bg-primary/30 h-3 w-24 rounded" />
        <div className="bg-primary flex h-6 w-16 items-center justify-center rounded-md">
          <span className="text-primary-foreground text-[8px]">Get Started</span>
        </div>
      </div>
      <div className="bg-muted flex h-8 w-full items-center justify-between rounded-md p-2">
        <div className="bg-foreground/20 h-2 w-16 rounded" />
        <ChevronRightIcon className="text-foreground/40 h-3 w-3" />
      </div>
    </div>
  )
}

export function HeroSectionsPreview() {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="from-primary/30 to-primary/10 flex h-16 w-full flex-col justify-center rounded-md bg-gradient-to-r p-2">
        <div className="bg-primary/40 mb-1 h-3 w-32 rounded" />
        <div className="bg-foreground/20 h-2 w-24 rounded" />
      </div>
      <div className="flex justify-end">
        <div className="bg-primary flex h-6 w-16 items-center justify-center rounded-md">
          <span className="text-primary-foreground text-[8px]">Learn More</span>
        </div>
      </div>
    </div>
  )
}

export function KPIWidgetsPreview() {
  return (
    <div className="grid w-full grid-cols-2 gap-2">
      <div className="bg-card flex flex-col rounded-md border p-2">
        <div className="text-muted-foreground text-[8px]">Revenue</div>
        <div className="text-xs font-bold">$24.5k</div>
        <div className="text-[8px] text-green-500">+12%</div>
      </div>
      <div className="bg-card flex flex-col rounded-md border p-2">
        <div className="text-muted-foreground text-[8px]">Users</div>
        <div className="text-xs font-bold">2,543</div>
        <div className="text-[8px] text-green-500">+8%</div>
      </div>
      <div className="bg-card col-span-2 h-8 rounded-md border p-1">
        <div className="bg-muted/50 flex h-full w-full items-center justify-center rounded-sm">
          <LineChartIcon className="text-primary h-4 w-4" />
        </div>
      </div>
    </div>
  )
}

export function ProductCardsPreview() {
  return (
    <div className="grid w-full grid-cols-2 gap-2">
      <div className="bg-card flex flex-col overflow-hidden rounded-md border">
        <div className="bg-muted/50 flex h-12 items-center justify-center">
          <ShoppingBagIcon className="text-muted-foreground h-5 w-5" />
        </div>
        <div className="p-1">
          <div className="bg-foreground/20 mb-1 h-2 w-10 rounded" />
          <div className="bg-foreground/10 h-1.5 w-8 rounded" />
        </div>
      </div>
      <div className="bg-card flex flex-col overflow-hidden rounded-md border">
        <div className="bg-muted/50 flex h-12 items-center justify-center">
          <ShoppingBagIcon className="text-muted-foreground h-5 w-5" />
        </div>
        <div className="p-1">
          <div className="bg-foreground/20 mb-1 h-2 w-10 rounded" />
          <div className="bg-foreground/10 h-1.5 w-8 rounded" />
        </div>
      </div>
    </div>
  )
}

export function ProductOverviewsPreview() {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex gap-2">
        <div className="bg-foreground/20 flex h-16 w-16 items-center justify-center rounded-md">
          <ShoppingBagIcon className="text-muted-foreground h-6 w-6" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="bg-foreground/20 mb-1 h-2.5 w-20 rounded" />
          <div className="bg-foreground/10 mb-1 h-2 w-16 rounded" />
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <StarIcon key={i} className="h-2 w-2 text-amber-400" />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-foreground/20 h-4 w-full rounded-sm" />
      <div className="bg-foreground/20 h-4 w-3/4 rounded-sm" />
    </div>
  )
}

export function AlertsPreview() {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex h-10 w-full items-center rounded-md border border-green-500/20 bg-green-500/10 p-2">
        <CheckCircleIcon className="mr-2 h-4 w-4 text-green-500" />
        <div className="bg-foreground/20 h-2 w-24 rounded" />
      </div>
      <div className="bg-destructive/10 border-destructive/20 flex h-10 w-full items-center rounded-md border p-2">
        <CheckCircleIcon className="text-destructive mr-2 h-4 w-4" />
        <div className="bg-foreground/20 h-2 w-24 rounded" />
      </div>
    </div>
  )
}

export function BadgesPreview() {
  return (
    <div className="flex w-full flex-wrap justify-center gap-2">
      <div className="bg-primary flex h-5 items-center justify-center rounded-full px-2">
        <span className="text-primary-foreground text-[8px]">New</span>
      </div>
      <div className="flex h-5 items-center justify-center rounded-full bg-green-500/20 px-2">
        <span className="text-[8px] text-green-700">Success</span>
      </div>
      <div className="flex h-5 items-center justify-center rounded-full bg-amber-500/20 px-2">
        <span className="text-[8px] text-amber-700">Warning</span>
      </div>
      <div className="bg-destructive/20 flex h-5 items-center justify-center rounded-full px-2">
        <span className="text-destructive text-[8px]">Error</span>
      </div>
    </div>
  )
}

export function ButtonsPreview() {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex justify-center gap-2">
        <div className="bg-primary flex h-8 w-20 items-center justify-center rounded-md">
          <span className="text-primary-foreground text-xs">Primary</span>
        </div>
        <div className="bg-background flex h-8 w-20 items-center justify-center rounded-md border">
          <span className="text-xs">Secondary</span>
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <div className="bg-destructive flex h-8 w-20 items-center justify-center rounded-md">
          <span className="text-destructive-foreground text-xs">Destructive</span>
        </div>
        <div className="bg-muted flex h-8 w-20 items-center justify-center rounded-md">
          <span className="text-xs">Ghost</span>
        </div>
      </div>
    </div>
  )
}

export function CheckboxesPreview() {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex items-center gap-2">
        <div className="flex h-4 w-4 items-center justify-center rounded border">
          <CheckCircleIcon className="text-primary h-3 w-3" />
        </div>
        <div className="bg-foreground/20 h-2 w-20 rounded" />
      </div>
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 rounded border" />
        <div className="bg-foreground/20 h-2 w-16 rounded" />
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-muted h-4 w-4 rounded border" />
        <div className="bg-foreground/10 h-2 w-24 rounded" />
      </div>
    </div>
  )
}

export function ColorPickerPreview() {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex gap-2">
        <div className="bg-primary h-8 w-8 rounded-md border" />
        <div className="bg-card flex h-8 flex-1 items-center rounded-md border px-2">
          <div className="bg-foreground/20 h-2 w-16 rounded" />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-1">
        {["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"].map((color, i) => (
          <div key={i} className={`h-5 w-5 rounded-md ${color}`} />
        ))}
      </div>
    </div>
  )
}

export function DropzonePreview() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="border-muted-foreground/20 flex h-24 w-full flex-col items-center justify-center rounded-md border-2 border-dashed">
        <div className="bg-muted/50 mb-1 flex h-8 w-8 items-center justify-center rounded-full">
          <MousePointerIcon className="text-muted-foreground h-3 w-3" />
        </div>
        <div className="bg-foreground/20 h-2 w-16 rounded" />
      </div>
    </div>
  )
}

export function HeadingPreview() {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex items-center">
        <div className="bg-foreground/40 h-5 w-32 rounded" />
        <div className="text-muted-foreground ml-1">#</div>
      </div>
      <div className="flex items-center">
        <div className="bg-foreground/30 h-4 w-24 rounded" />
        <div className="text-muted-foreground ml-1">#</div>
      </div>
      <div className="flex items-center">
        <div className="bg-foreground/20 h-3 w-20 rounded" />
        <div className="text-muted-foreground ml-1">#</div>
      </div>
    </div>
  )
}
