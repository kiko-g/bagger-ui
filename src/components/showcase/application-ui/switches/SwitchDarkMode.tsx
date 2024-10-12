'use client'

import React from 'react'
import clsx from 'clsx'

export function SwitchDarkMode() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  return (
    <button type="button" onClick={toggleMode} aria-label="Toggle dark mode" className="group">
      {/* Sun */}
      <svg
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={clsx(
          'h-8 w-8 transition dark:hidden',
          'fill-white',
          'stroke-blue-500',
          '[@media(prefers-color-scheme:dark)]:fill-orange-400',
          '[@media(prefers-color-scheme:dark)]:stroke-orange-400',
          'group-hover:opacity-80',
          '[@media(prefers-color-scheme:dark)]:group-hover:opacity-80',
        )}
      >
        <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
        <path
          d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
          fill="none"
        ></path>
      </svg>

      {/* Moon */}
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={clsx(
          'hidden h-8 w-8 transition dark:block',
          'stroke-blue-50',
          '[@media(prefers-color-scheme:dark)]:fill-blue-400',
          '[@media(prefers-color-scheme:dark)]:stroke-blue-400',
          'group-hover:opacity-80',
          '[@media(prefers-color-scheme:dark)]:group-hover:opacity-80',
        )}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
        />
      </svg>
    </button>
  )
}
