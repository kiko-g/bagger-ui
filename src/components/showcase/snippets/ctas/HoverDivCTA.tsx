'use client'

import React from 'react'

export function HoverDivCTA() {
  const unsplashGenerate = 'https://source.unsplash.com/random/500x500?productivity,city'

  return (
    <a href="#" className="group relative block max-w-md bg-black">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="Random Image from Unsplash"
        src="https://images.unsplash.com/photo-1462899006636-339e08d1844e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZHVjdGl2aXR5LGNpdHl8fHx8fHwxNjk1MjQ2NDk3&ixlib=rb-4.0.3&q=80&w=500"
        className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity group-hover:opacity-30"
      />

      <div className="relative p-8">
        <p className="dark:text-tertiary text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500">
          Presentation Section Header
        </p>
        <p className="text-2xl font-bold text-white">Presentation Section Subheader</p>
        <div className="mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique quis tempus id,
              ultrices in dolor. Sed iaculis, leo ut porta faucibus, urna turpis rutrum risus, nec mollis arcu nunc sed
              ex.
            </p>
          </div>
        </div>
      </div>
    </a>
  )
}
