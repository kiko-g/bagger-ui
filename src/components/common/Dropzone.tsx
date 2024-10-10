import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useDropzone } from 'react-dropzone'
import { useCallback, useState } from 'react'
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline'

type Props = {
  accept?: Record<string, string[]>
  multiple?: boolean
  onDrop: (acceptedFiles: File[]) => void
  className?: string
}

export function DropzoneArea({ accept = {}, multiple = true, onDrop, className = '' }: Props) {
  const [src, setSrc] = useState<File | null>(null)

  const handleDrop = useCallback(
    (acceptedFiles: any) => {
      if (onDrop) onDrop(acceptedFiles)
    },
    [onDrop],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept,
    multiple,
  })

  return (
    <div
      {...getRootProps()}
      className={cn(
        'group flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded border border-dashed border-zinc-300 bg-white p-4 text-center transition hover:border-primary-600/80 hover:bg-primary-600/5 dark:border-zinc-200/30 dark:bg-zinc-100/5 dark:hover:border-primary-600/80 dark:hover:bg-primary-600/5',
        className,
      )}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center text-zinc-700 group-hover:text-primary-950 dark:text-zinc-300 dark:group-hover:text-primary-50">
        <ArrowUpTrayIcon className="h-8 w-8 transition" />
        <p className="mt-2 text-sm transition">
          <span className="font-bold">Click to upload</span> or drag and drop
        </p>
      </div>
      {/* {src ? (
        <Image src={src} alt="Preview" className="max-h-40 w-auto" />
      ) : isDragActive ? (
        <DisplayNoImage isDragActive={isDragActive} />
      ) : null} */}
    </div>
  )
}

function DisplayNoImage({ isDragActive }: { isDragActive: boolean }) {
  return (
    <div className="flex h-48 w-full items-center justify-center">
      <p className="text-sm text-zinc-500 dark:text-zinc-400">No image selected</p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">Drag & drop some files here, or click to select files</p>
    </div>
  )
}
