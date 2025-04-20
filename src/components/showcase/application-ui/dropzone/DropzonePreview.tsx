"use client"

import { useState, useCallback } from "react"
import type { FileRejection } from "react-dropzone"
import { File, FileText, FileImage, FileArchive, FileAudio, FileVideo, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dropzone } from "@/components/ui/dropzone"

export interface FileWithPreview extends File {
  preview: string
}

export interface DropzoneWithPreviewProps {
  className?: string
  value?: FileWithPreview[]
  onChange?: (files: FileWithPreview[]) => void
  onRemove?: (file: FileWithPreview) => void
  disabled?: boolean
  maxFiles?: number
  maxSize?: number
  accept?: Record<string, string[]>
  loading?: boolean
  progress?: number
  showProgress?: boolean
}

export function DropzoneWithPreview({
  className,
  value = [],
  onChange,
  onRemove,
  disabled = false,
  maxFiles = 5,
  maxSize = 1024 * 1024 * 2, // 2MB
  accept = {
    "image/*": [],
    "application/pdf": [],
  },
  loading = false,
  progress = 0,
  showProgress = false,
}: DropzoneWithPreviewProps) {
  const [error, setError] = useState<string | null>(null)

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      setError(null)

      if (value.length + acceptedFiles.length > maxFiles) {
        setError(`You can only upload up to ${maxFiles} files`)
        return
      }

      const filesWithPreview = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      )

      if (onChange) {
        onChange([...value, ...filesWithPreview])
      }
    },
    [value, onChange, maxFiles],
  )

  const handleDropRejected = useCallback((fileRejections: FileRejection[]) => {
    const errors = fileRejections.map((rejection) => {
      return rejection.errors.map((error) => error.message).join(", ")
    })
    setError(errors.join(". "))
  }, [])

  const handleRemove = useCallback(
    (file: FileWithPreview) => {
      if (onRemove) {
        onRemove(file)
      } else if (onChange) {
        const newFiles = value.filter((f) => f !== file)
        onChange(newFiles)
      }

      // Revoke the object URL to avoid memory leaks
      URL.revokeObjectURL(file.preview)
    },
    [value, onChange, onRemove],
  )

  // Get file icon based on file type
  const getFileIcon = (file: FileWithPreview) => {
    const type = file.type.split("/")[0]
    switch (type) {
      case "image":
        return <FileImage className="h-6 w-6 text-blue-500" />
      case "video":
        return <FileVideo className="h-6 w-6 text-red-500" />
      case "audio":
        return <FileAudio className="h-6 w-6 text-purple-500" />
      case "application":
        if (file.type === "application/pdf") {
          return <FileText className="h-6 w-6 text-red-500" />
        } else if (
          file.type === "application/zip" ||
          file.type === "application/x-rar-compressed" ||
          file.type === "application/x-7z-compressed"
        ) {
          return <FileArchive className="h-6 w-6 text-yellow-500" />
        }
        return <File className="h-6 w-6 text-gray-500" />
      default:
        return <File className="h-6 w-6 text-gray-500" />
    }
  }

  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className="w-full space-y-4">
      <Dropzone
        onDrop={handleDrop}
        onDropRejected={handleDropRejected}
        accept={accept}
        maxSize={maxSize}
        maxFiles={maxFiles - value.length}
        disabled={disabled || loading || value.length >= maxFiles}
        loading={loading}
        progress={progress}
        showProgress={showProgress}
        className={className}
        description={`${value.length} / ${maxFiles} files (up to ${formatFileSize(maxSize)} each)`}
      />

      {error && (
        <div className="text-destructive flex items-center gap-2 text-sm">
          <span>{error}</span>
        </div>
      )}

      {value.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {value.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className="group bg-background relative flex flex-col overflow-hidden rounded-lg border p-2"
            >
              <div className="relative flex-1">
                {file.type.startsWith("image/") ? (
                  <div className="relative aspect-square w-full overflow-hidden rounded-md">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={file.preview || "/placeholder.svg"}
                      alt={file.name}
                      className="h-full w-full object-cover transition-all group-hover:scale-105"
                      onLoad={() => {
                        URL.revokeObjectURL(file.preview)
                      }}
                    />
                  </div>
                ) : (
                  <div className="bg-muted flex aspect-square w-full items-center justify-center rounded-md">
                    {getFileIcon(file)}
                  </div>
                )}

                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute top-1 right-1 h-6 w-6 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleRemove(file)
                  }}
                  disabled={disabled || loading}
                >
                  <X className="h-3 w-3" />
                  <span className="sr-only">Remove file</span>
                </Button>
              </div>
              <div className="mt-2 truncate text-xs">
                <p className="truncate font-medium">{file.name}</p>
                <p className="text-muted-foreground">{formatFileSize(file.size)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

DropzoneWithPreview.displayName = "DropzoneWithPreview"
