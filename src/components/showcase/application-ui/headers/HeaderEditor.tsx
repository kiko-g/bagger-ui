'use client'

import React from 'react'
import clsx from 'clsx'
import type { ColorVariant, RoundedVariant, SizeVariant } from '@/types'

type Props = {}

const HeaderEditor = ({}: Props) => {
  return (
    <header>
      <div className="flex items-center justify-between">
        <h1>Header</h1>
      </div>
    </header>
  )
}

HeaderEditor.displayName = 'HeaderEditor'

export { HeaderEditor }
