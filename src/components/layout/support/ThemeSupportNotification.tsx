'use client'

import { useMemo, useState, useEffect } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Transition } from '@headlessui/react'

import { VSCodeIcon } from '@/components/icons/VSCodeIcon'
import { XIcon } from 'lucide-react'

export function ThemeSupportNotification() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const [show, setShow] = useState(false)
  const [hasNotBeenDismissedYet, setHasNotBeenDismissedYet] = useState<boolean | null>(null)

  useEffect(() => {
    const dismissedTimestamp = localStorage.getItem('themeSupportNotificationDismissedTimestamp')
    if (!dismissedTimestamp) setHasNotBeenDismissedYet(true)
    else {
      const now = new Date().getTime()
      const dismissedTime = parseInt(dismissedTimestamp, 10)
      const sevenDaysInMillis = 7 * 24 * 60 * 60 * 1000
      if (now - dismissedTime < sevenDaysInMillis) setHasNotBeenDismissedYet(false)
      else setHasNotBeenDismissedYet(true)
    }
  }, [])

  const shouldDisplay = useMemo(() => isHome && hasNotBeenDismissedYet, [isHome, hasNotBeenDismissedYet])

  useEffect(() => {
    if (shouldDisplay) setShow(true)
    else setShow(false)
  }, [shouldDisplay])

  const handleDismiss = () => {
    setHasNotBeenDismissedYet(false)
    const now = new Date().getTime()
    localStorage.setItem('themeSupportNotificationDismissedTimestamp', now.toString())
    setShow(false)
  }

  const handleClose = () => {
    setShow(false)
  }

  if (hasNotBeenDismissedYet === null) return null

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 z-50 flex items-end justify-end px-4 py-6 sm:items-end sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition show={show}>
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white/70 shadow-lg ring-1 ring-black ring-opacity-5 backdrop-blur transition data-[closed]:data-[enter]:translate-y-2 data-[enter]:transform data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in dark:bg-zinc-950/60 data-[closed]:data-[enter]:sm:translate-x-2 data-[closed]:data-[enter]:sm:translate-y-0">
              <div className="p-3">
                <div className="flex items-start">
                  <div className="ml-1 mt-1 flex-shrink-0">
                    <Image
                      src="/bagger-flow.svg"
                      alt="Bagger Flow"
                      width={32}
                      height={32}
                      className="-ml-[1px] -mt-[1px]"
                    />
                  </div>
                  <div className="ml-2.5 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-zinc-800 dark:text-white">Check out Bagger Flow</p>
                    <p className="mt-1 text-sm/5 font-normal text-zinc-500 dark:text-zinc-300">
                      Bagger Flow is a{' '}
                      <a
                        href="vscode:extension/kikogoncalves.bagger-flow"
                        className="inline-flex items-center gap-1 font-semibold hover:underline"
                      >
                        <VSCodeIcon className="size-2.5 fill-blue-500" />
                        <span>VS Code theme</span>
                      </a>{' '}
                      with a modern and slick look, tailored for many languages.
                    </p>
                    <div className="mt-3 flex space-x-7">
                      <a
                        href="https://marketplace.visualstudio.com/items?itemName=kikogoncalves.bagger-flow"
                        target="_blank"
                        className="flex items-center gap-1 rounded-md text-sm font-medium text-primary-600 focus:underline focus:outline-none dark:text-primary-500 dark:hover:text-primary-400"
                      >
                        <span>Take me there</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleDismiss}
                        className="rounded-md text-sm font-medium text-zinc-700 hover:text-zinc-500 focus:underline focus:outline-none dark:text-zinc-100 dark:hover:text-zinc-200"
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="inline-flex rounded-md text-zinc-500 transition hover:bg-zinc-900/5 focus:outline-none dark:text-zinc-100 dark:hover:bg-white/10"
                    >
                      <span className="sr-only">Close</span>
                      <XIcon aria-hidden="true" className="size-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}
