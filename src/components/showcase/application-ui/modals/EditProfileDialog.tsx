"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

const schema = z.object({ name: z.string().min(2), email: z.string().email() })
type FormValues = z.infer<typeof schema>

export function EditProfileDialog() {
  const { register, handleSubmit, formState, reset } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "" },
  })

  const onSubmit = async (values: FormValues) => {
    await new Promise((r) => setTimeout(r, 500))
    reset()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Update your personal information.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="space-y-1">
            <label className="text-sm font-medium">Name</label>
            <Input {...register("name")} aria-invalid={!!formState.errors.name} />
            {formState.errors.name && <p className="text-destructive text-xs">{formState.errors.name.message}</p>}
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Email</label>
            <Input type="email" {...register("email")} aria-invalid={!!formState.errors.email} />
            {formState.errors.email && <p className="text-destructive text-xs">{formState.errors.email.message}</p>}
          </div>
          <DialogFooter>
            <Button type="button" variant="ghost" onClick={() => reset()}>
              Reset
            </Button>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
