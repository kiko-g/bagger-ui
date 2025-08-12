"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"

export function FilterDialog() {
  const [inStock, setInStock] = useState(true)
  const [sort, setSort] = useState("popular")

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Filters</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Filters</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Checkbox checked={inStock} onCheckedChange={(v) => setInStock(Boolean(v))} />
            <span className="text-sm">In stock only</span>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Sort by</label>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most popular</SelectItem>
                <SelectItem value="rating">Top rated</SelectItem>
                <SelectItem value="new">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="ghost">Reset</Button>
          <Button>Apply</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
