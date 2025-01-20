'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CarrotIcon, LoaderCircleIcon } from 'lucide-react'

export function ButtonLoading() {
  const [loading, setLoading] = useState(false)

  const handleButtonClick = async () => {
    setLoading(true)

    try {
      const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
      await delay(1000) // this is a simulated delay for showcasing the loading state

      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!response.ok) console.warn(`Example Button Loading: HTTP error! [Status ${response.status}]`)

      const data = await response.json()
      console.info(data)
    } catch (err) {
      console.warn(`Example Button Loading: HTTP error! [Status ${err}]`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button variant="orange" size="lg" onClick={handleButtonClick} disabled={loading}>
      {loading ? (
        <>
          <LoaderCircleIcon className="size-4 animate-spin" />
          <span>Loading...</span>
        </>
      ) : (
        <>
          <CarrotIcon className="size-4" />
          <span>Click Me</span>
        </>
      )}
    </Button>
  )
}
