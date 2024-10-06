'use client'

import React, { Fragment, useState } from 'react'
import { XMarkIcon, KeyIcon } from '@heroicons/react/24/outline'
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

type Props = {
  startOpen?: boolean
}

export function ModalSimple({ startOpen }: Props) {
  const [isOpen, setIsOpen] = useState(startOpen !== undefined ? startOpen : false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Button
        onClick={openModal}
        className="h:bg-black/70 flex items-center gap-1 rounded-md bg-black/40 px-3 py-2 text-sm font-medium text-white transition data-[focus]:outline-1 focus:outline-none dark:bg-white/30 dark:data-[hover]:bg-white/50"
      >
        <span>Open dialog</span>
        <KeyIcon className="h-4 w-4" />
      </Button>

      <Dialog open={isOpen} as="div" className="relative z-[100000] focus:outline-none" onClose={closeModal}>
        <div className="fixed inset-0 w-screen overflow-y-auto bg-black/50">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="data-[closed]:transform-[scale(95%)] w-full max-w-lg rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0 dark:bg-white/10"
            >
              <div className="flex items-center justify-between gap-1">
                <DialogTitle as="h3" className="text-base/7 font-semibold">
                  Successful Action
                </DialogTitle>
                <button
                  onClick={closeModal}
                  className="flex items-center gap-x-1 rounded bg-black/10 px-1 py-1 text-sm transition hover:bg-black/30 dark:bg-black/20 dark:text-white dark:hover:bg-black/40"
                >
                  <XMarkIcon className="h-4 w-4" />{' '}
                </button>
              </div>

              <div className="text-sm/6 font-normal">
                <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit sed do eiusmod tempor.
                </p>

                <ul className="ml-3 mt-4 flex list-disc flex-col gap-y-0.5 lg:ml-4">
                  <li>Apples and oranges.</li>
                  <li>Bananas and mangos.</li>
                  <li>Strawberries and blueberries.</li>
                </ul>
              </div>

              <div className="mt-8 flex justify-end">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-zinc-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 data-[hover]:bg-zinc-600 data-[open]:bg-zinc-700 data-[focus]:outline-1 data-[focus]:outline-white focus:outline-none"
                  onClick={closeModal}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
