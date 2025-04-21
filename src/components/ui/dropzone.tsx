"use client"

import { useCallback, useState } from "react"
import { useDropzone, type DropzoneOptions, type FileRejection } from "react-dropzone"
import { cn } from "@/lib/utils"
import { UploadCloud, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export interface DropzoneProps extends Omit<DropzoneOptions, "onDrop"> {
  className?: string
  buttonText?: string
  description?: string
  onDrop?: (acceptedFiles: File[]) => void
  onDropRejected?: (fileRejections: FileRejection[]) => void
  disabled?: boolean
  loading?: boolean
  progress?: number
  showProgress?: boolean
  variant?: "default" | "compact" | "icon"
}

export function Dropzone({
  className,
  buttonText = "Click to upload",
  description = "or drag and drop",
  onDrop,
  onDropRejected,
  disabled = false,
  loading = false,
  progress = 0,
  showProgress = false,
  variant = "default",
  ...props
}: DropzoneProps) {
  const [error, setError] = useState<string | null>(null)

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      setError(null)
      if (onDrop) onDrop(acceptedFiles)
    },
    [onDrop],
  )

  const handleDropRejected = useCallback(
    (fileRejections: FileRejection[]) => {
      const errors = fileRejections.map((rejection) => {
        return rejection.errors.map((error) => error.message).join(", ")
      })
      setError(errors.join(". "))
      if (onDropRejected) onDropRejected(fileRejections)
    },
    [onDropRejected],
  )

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop: handleDrop,
    onDropRejected: handleDropRejected,
    disabled: disabled || loading,
    ...props,
  })

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={cn(
          "hover:border-primary/50 hover:bg-primary/5 bg-accent/10 relative flex flex-col items-center justify-center rounded-lg border border-dashed transition-colors",
          isDragActive && "border-primary/50 bg-primary/5",
          isDragReject && "border-destructive/50 bg-destructive/5",
          disabled && "cursor-not-allowed opacity-60",
          loading && "cursor-wait",
          variant === "compact" ? "p-4" : "p-8",
          className,
        )}
      >
        <input {...getInputProps()} />

        {variant === "icon" ? (
          <div className="flex flex-col items-center justify-center text-center">
            <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
              <UploadCloud className="text-primary h-6 w-6" />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center">
            <UploadCloud
              className={cn(
                "text-muted-foreground mb-4",
                variant === "compact" ? "h-8 w-8" : "h-10 w-10",
                isDragActive && "text-primary",
              )}
            />
            <div className={cn("flex flex-col space-y-1", variant === "compact" ? "text-sm" : "text-base")}>
              <Button
                variant="link"
                className={cn(
                  "text-primary p-0 hover:no-underline",
                  variant === "compact" ? "text-sm" : "text-base",
                  disabled && "cursor-not-allowed",
                )}
                disabled={disabled || loading}
              >
                {buttonText}
              </Button>
              <p className="text-muted-foreground">{description}</p>
            </div>
          </div>
        )}

        {showProgress && loading && (
          <div className="bg-background/80 absolute inset-0 flex items-center justify-center rounded-lg backdrop-blur-sm">
            <div className="w-3/4 space-y-2 text-center">
              <Progress value={progress} className="h-2 w-full" />
              <p className="text-muted-foreground text-xs">{progress}% uploaded</p>
            </div>
          </div>
        )}
      </div>

      {error && (
        <div className="text-destructive mt-2 flex items-center gap-2 text-sm">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  )
}

Dropzone.displayName = "Dropzone"
