import { GridPattern } from "@/components/layout/GridPattern"

export function HeroPattern() {
  return (
    <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
      <div className="absolute top-0 left-1/2 -ml-120 h-64 w-325 dark:mask-[linear-gradient(white,transparent)]">
        <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-slate-600 mask-[radial-gradient(farthest-side_at_top,white,transparent)] opacity-30 dark:from-blue-500/40 dark:to-slate-600/40 dark:opacity-100">
          <GridPattern
            width={60}
            height={40}
            x={0}
            y={0}
            squares={[
              [4, 3],
              [2, 1],
              [7, 3],
              [10, 6],
            ]}
            className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
          />
        </div>
        <svg
          viewBox="0 0 1113 440"
          aria-hidden="true"
          className="absolute top-0 left-1/2 -ml-76 w-278.25 fill-white blur-[26px] dark:hidden"
        >
          <path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z" />
        </svg>
      </div>
    </div>
  )
}
