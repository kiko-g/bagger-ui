'use client'

import React from 'react'

export function LogoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="16 16 42 42" {...props}>
      <path fill="url(#a)" d="M18.5 36c0-9.941 8.059-18 18-18s18 8.059 18 18-8.059 18-18 18-18-8.059-18-18Z" />
      <g opacity={0.8}>
        <rect
          width={9}
          height={9}
          x={29.929}
          y={43.485}
          fill="#fff"
          fillOpacity={0.5}
          rx={2}
          transform="rotate(-45 29.93 43.485)"
        />
        <rect
          width={8.5}
          height={8.5}
          x={30.283}
          y={43.485}
          stroke="#fff"
          strokeOpacity={0.8}
          strokeWidth={0.5}
          rx={1.75}
          transform="rotate(-45 30.283 43.485)"
        />
      </g>
      <rect
        width={9}
        height={9}
        x={29.929}
        y={28.515}
        fill="#fff"
        opacity={0.8}
        rx={2}
        transform="rotate(-45 29.93 28.515)"
      />
      <rect width={9} height={9} x={37.415} y={36} fill="#fff" opacity={0.8} rx={2} transform="rotate(-45 37.415 36)" />
      <rect width={9} height={9} x={22.444} y={36} fill="#fff" opacity={0.8} rx={2} transform="rotate(-45 22.444 36)" />
      <defs>
        <linearGradient id="a" x1={18.5} x2={54.5} y1={18} y2={54} gradientUnits="userSpaceOnUse">
          <stop offset={0.014} stopColor="#2393f8" />
          <stop offset={1} stopColor="#115ea4" />
        </linearGradient>
      </defs>
    </svg>
  )
}
