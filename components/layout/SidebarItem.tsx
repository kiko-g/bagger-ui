import Link from "next/link"
import clsx from "clsx"

export function SidebarItem({
  name,
  href,
  isActive,
  isNew,
}: {
  name: string
  href: string
  isActive: boolean
  isNew?: boolean
}) {
  return (
    <Link
      title={name}
      href={href}
      className={clsx(
        isActive
          ? "border-l-2 border-primary bg-primary/10 text-black hover:opacity-80 dark:border-primary dark:bg-primary/10 dark:text-white"
          : "border-dimmed border-l hover:bg-slate-500/10 dark:hover:bg-slate-600/30",
        "flex cursor-pointer items-center justify-start gap-2 py-1 pl-3 text-sm transition ease-in-out",
      )}
    >
      <div className="hidden w-full items-center justify-between gap-2 pr-1 lg:flex">
        <span className="pr-3 lg:pr-10">{name}</span>
        {isNew && (
          <span className="inline-flex items-center rounded-sm bg-green-100 px-1 py-1 text-green-950">
            <span className="text-xs font-semibold leading-none tracking-tight">New</span>
          </span>
        )}
      </div>
    </Link>
  )
}
