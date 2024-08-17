"use client"

import React from "react"

export function BlurredCTA() {
  const unsplashGenerate = "https://source.unsplash.com/random/500x500?productivity,city"

  return (
    <a href="#" className="group relative max-w-lg overflow-hidden bg-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="Random Image from Unsplash"
        src="https://images.unsplash.com/photo-1496016943515-7d33598c11e6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZHVjdGl2aXR5LGNpdHl8fHx8fHwxNjk1MjQ2MzQz&ixlib=rb-4.0.3&q=80&w=500"
        className="h-full w-full object-cover blur-sm transition duration-300 group-hover:blur-0 lg:blur-md"
      />
      <div className="absolute inset-0 flex h-full w-full items-center justify-center">
        <div className="absolute h-full w-full bg-black/60 transition group-hover:bg-black/40" />
        <div className="font-lexend z-50 flex h-full w-auto items-center justify-center gap-x-2 px-4 text-center text-lg font-normal text-white opacity-80 duration-500 group-hover:opacity-100 lg:w-full lg:text-3xl lg:opacity-50">
          <span className="transition group-hover:translate-x-2 hover:opacity-80">Action Text</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="hidden h-8 w-8 transition group-hover:translate-x-2 lg:flex"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </div>
      </div>
    </a>
  )
}
