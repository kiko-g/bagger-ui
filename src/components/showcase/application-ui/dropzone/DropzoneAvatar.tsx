"use client"

import { useState, useCallback } from "react"
import { cn } from "@/lib/utils"
import { Camera, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dropzone } from "@/components/ui/dropzone"
import { useDropzone } from "react-dropzone"

export interface DropzoneAvatarProps {
  className?: string
  value?: string | null
  onChange?: (file: File | null) => void
  onRemove?: () => void
  disabled?: boolean
  maxSize?: number
  fallback?: string
}

export function DropzoneAvatar({
  className,
  value,
  onChange,
  onRemove,
  disabled = false,
  maxSize = 1024 * 1024 * 2, // 2MB
  fallback = "?",
}: DropzoneAvatarProps) {
  const [error, setError] = useState<string | null>(null)
  const [preview, setPreview] = useState<string | null>(value || null)

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      setError(null)

      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0]
        const previewUrl = URL.createObjectURL(file)
        setPreview(previewUrl)

        if (onChange) {
          onChange(file)
        }
      }
    },
    [onChange],
  )

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
    },
    maxSize,
    maxFiles: 1,
    multiple: false,
    disabled,
  })

  const handleRemove = useCallback(() => {
    if (preview) {
      URL.revokeObjectURL(preview)
    }

    setPreview(null)

    if (onRemove) {
      onRemove()
    } else if (onChange) {
      onChange(null)
    }
  }, [preview, onChange, onRemove])

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className={cn("group relative h-24 w-24 sm:h-32 sm:w-32", className)}>
        <div
          {...getRootProps({
            className: "absolute inset-0 cursor-pointer rounded-full border-0 p-0",
          })}
        >
          <input {...getInputProps()} />
          <Avatar className="h-full w-full">
            <AvatarImage src={preview || undefined} alt="Avatar" className="object-cover" />
            <AvatarFallback className="text-2xl">{fallback ? getInitials(fallback) : "?"}</AvatarFallback>
          </Avatar>

          <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
            <Camera className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>

      {preview && (
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-8 text-xs"
          onClick={(e) => {
            e.stopPropagation()
            handleRemove()
          }}
          disabled={disabled}
        >
          <X className="mr-1 h-3 w-3" />
          Remove
        </Button>
      )}

      {error && <p className="text-destructive text-sm">{error}</p>}
    </div>
  )
}

DropzoneAvatar.displayName = "DropzoneAvatar"
