"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

type User = {
  id: string
  name: string
  email: string
  role: string
}

const users: User[] = [
  { id: "1", name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: "3", name: "Bob Johnson", email: "bob@example.com", role: "Editor" },
  { id: "4", name: "Alice Brown", email: "alice@example.com", role: "User" },
  { id: "5", name: "Charlie Wilson", email: "charlie@example.com", role: "Viewer" },
]

export function CheckboxTable() {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set())

  const isAllSelected = selectedRows.size === users.length
  const isSomeSelected = selectedRows.size > 0 && selectedRows.size < users.length

  const toggleAll = () => {
    if (isAllSelected) setSelectedRows(new Set())
    else setSelectedRows(new Set(users.map((user) => user.id)))
  }

  const toggleRow = (id: string) => {
    setSelectedRows((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const deleteSelected = () => {
    console.info("Deleting:", Array.from(selectedRows))
    setSelectedRows(new Set())
  }

  return (
    <div className="w-full max-w-2xl space-y-4 rounded-md bg-background p-6">
      {selectedRows.size > 0 && (
        <div className="flex items-center justify-between rounded-md bg-muted p-2">
          <span className="text-sm font-medium">
            {selectedRows.size} {selectedRows.size === 1 ? "item" : "items"} selected
          </span>
          <Button variant="destructive" size="sm" onClick={deleteSelected} className="h-8">
            <Trash2 className="mr-1 h-4 w-4" />
            Delete
          </Button>
        </div>
      )}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="flex w-12 items-center justify-start">
                <Checkbox
                  checked={isAllSelected}
                  className={isSomeSelected ? "data-[state=checked]:bg-primary/80" : ""}
                  data-state={isSomeSelected ? "indeterminate" : isAllSelected ? "checked" : "unchecked"}
                  onCheckedChange={toggleAll}
                />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className={selectedRows.has(user.id) ? "bg-muted/50" : ""}>
                <TableCell>
                  <Checkbox checked={selectedRows.has(user.id)} onCheckedChange={() => toggleRow(user.id)} />
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
