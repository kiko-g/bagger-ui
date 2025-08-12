"use client"

import { useId } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const schema = z.object({
  email: z.string().email("Please enter a valid email"),
})

type FormValues = z.infer<typeof schema>

export function InlineValidation() {
  const id = useId()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { email: "" } })

  const onSubmit = async (values: FormValues) => {
    await new Promise((r) => setTimeout(r, 400))
    reset({ email: "" })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-2">
      <div className="flex w-full flex-col gap-1">
        <label htmlFor={id} className="text-foreground/80 text-sm font-semibold tracking-tight">
          Email
        </label>
        <Input
          id={id}
          type="email"
          aria-invalid={!!errors.email}
          className={errors.email ? "border-destructive focus-visible:ring-destructive" : undefined}
          placeholder="you@company.com"
          {...register("email")}
        />
        {errors.email && <p className="text-destructive text-xs">{errors.email.message}</p>}
      </div>
      <Button type="submit" disabled={isSubmitting}>
        Save
      </Button>
    </form>
  )
}
