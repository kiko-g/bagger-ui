"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { ColorPicker } from "@/components/ui/color-picker"
import { ColorPickerWithPresets } from "@/components/showcase/application-ui/color-pickers/combos/ColorPickerPresets"
import { ColorPickerAdvanced } from "@/components/showcase/application-ui/color-pickers/combos/ColorPickerAdvanced"

const formSchema = z.object({
  primaryColor: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
    message: "Please enter a valid hex color code",
  }),
  secondaryColor: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
    message: "Please enter a valid hex color code",
  }),
  accentColor: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
    message: "Please enter a valid hex color code",
  }),
})

export function ColorPickerForm() {
  const [formData, setFormData] = useState<z.infer<typeof formSchema> | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      primaryColor: "#3b82f6",
      secondaryColor: "#10b981",
      accentColor: "#f43f5e",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setFormData(values)
  }

  return (
    <div className="w-full max-w-xl space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
          <FormField
            control={form.control}
            name="primaryColor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Primary Color</FormLabel>
                <FormDescription>Select the primary color for your brand.</FormDescription>
                <FormControl>
                  <ColorPicker value={field.value} onChange={field.onChange} onBlur={field.onBlur} showEyeDropper />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="secondaryColor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Secondary Color</FormLabel>
                <FormDescription>Select the secondary color for your brand.</FormDescription>
                <FormControl>
                  <ColorPickerWithPresets
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    presets={[
                      "#10b981", // emerald-500
                      "#059669", // emerald-600
                      "#047857", // emerald-700
                      "#0d9488", // teal-600
                      "#0891b2", // cyan-600
                      "#0284c7", // sky-600
                      "#2563eb", // blue-600
                      "#4f46e5", // indigo-600
                      "#7c3aed", // violet-600
                      "#9333ea", // purple-600
                    ]}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="accentColor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Accent Color</FormLabel>
                <FormDescription>Select an accent color for highlights and calls to action.</FormDescription>
                <FormControl>
                  <ColorPickerAdvanced value={field.value} onChange={field.onChange} onBlur={field.onBlur} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Save Theme</Button>
        </form>
      </Form>

      {formData && (
        <div className="rounded-md border p-4">
          <h3 className="mb-2 font-medium">Form Data</h3>
          <pre className="bg-muted overflow-auto rounded p-2 text-sm">{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

ColorPickerForm.displayName = "ColorPickerForm"
