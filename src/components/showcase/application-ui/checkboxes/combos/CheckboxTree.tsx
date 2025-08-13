"use client"

import { useState, useEffect } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type TreeNode = {
  id: string
  label: string
  children?: TreeNode[]
}

interface CheckboxTreeProps {
  data: TreeNode[]
  expanded?: boolean
  onChange?: (selectedIds: string[]) => void
}

export function CheckboxTree({ data, expanded = false, onChange }: CheckboxTreeProps) {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(() => {
    if (expanded) {
      const expandableIds = new Set<string>()
      const collectExpandableIds = (nodes: TreeNode[]) => {
        nodes.forEach((node) => {
          if (node.children && node.children.length > 0) {
            expandableIds.add(node.id)
            collectExpandableIds(node.children)
          }
        })
      }
      collectExpandableIds(data)
      return expandableIds
    }
    return new Set<string>()
  })

  const [selectedNodes, setSelectedNodes] = useState<Set<string>>(new Set())

  const getAllDescendantIds = (node: TreeNode): string[] => {
    const ids = [node.id]
    if (node.children) {
      node.children.forEach((child) => {
        ids.push(...getAllDescendantIds(child))
      })
    }
    return ids
  }

  const getAncestorIds = (nodeId: string, nodes: TreeNode[], path: string[] = []): string[] => {
    for (const node of nodes) {
      if (node.id === nodeId) {
        return path
      }
      if (node.children) {
        const result = getAncestorIds(nodeId, node.children, [...path, node.id])
        if (result.length) return result
      }
    }
    return []
  }

  const areAllChildrenSelected = (node: TreeNode): boolean => {
    if (!node.children) return true
    return node.children.every((child) => {
      if (child.children) {
        return areAllChildrenSelected(child) && selectedNodes.has(child.id)
      }
      return selectedNodes.has(child.id)
    })
  }

  const areSomeChildrenSelected = (node: TreeNode): boolean => {
    if (!node.children) return false
    return (
      node.children.some((child) => {
        if (child.children) {
          return areSomeChildrenSelected(child) || selectedNodes.has(child.id)
        }
        return selectedNodes.has(child.id)
      }) && !areAllChildrenSelected(node)
    )
  }

  const toggleExpand = (nodeId: string) => {
    setExpandedNodes((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId)
      } else {
        newSet.add(nodeId)
      }
      return newSet
    })
  }

  const handleCheckboxChange = (node: TreeNode, checked: boolean) => {
    setSelectedNodes((prev) => {
      const newSet = new Set(prev)

      if (checked) newSet.add(node.id)
      else newSet.delete(node.id)

      if (node.children) {
        const descendantIds = getAllDescendantIds(node).filter((id) => id !== node.id)
        if (checked) descendantIds.forEach((id) => newSet.add(id))
        else descendantIds.forEach((id) => newSet.delete(id))
      }

      const ancestors = getAncestorIds(node.id, data)
      ancestors.forEach((ancestorId) => {
        const findNode = (id: string, nodes: TreeNode[]): TreeNode | null => {
          for (const n of nodes) {
            if (n.id === id) return n
            if (n.children) {
              const found = findNode(id, n.children)
              if (found) return found
            }
          }
          return null
        }

        const ancestorNode = findNode(ancestorId, data)
        if (ancestorNode) {
          if (areAllChildrenSelected(ancestorNode)) newSet.add(ancestorId)
          else newSet.delete(ancestorId)
        }
      })

      return newSet
    })
  }

  useEffect(() => {
    onChange?.(Array.from(selectedNodes))
  }, [selectedNodes, onChange])

  const renderNode = (node: TreeNode, level = 0) => {
    const isExpanded = expandedNodes.has(node.id)
    const isSelected = selectedNodes.has(node.id)
    const hasChildren = node.children && node.children.length > 0
    const isIndeterminate = hasChildren && areSomeChildrenSelected(node)

    return (
      <div key={node.id} className="select-none">
        <div className={cn("flex items-center py-1", level > 0 && "ml-4")}>
          {hasChildren && (
            <ChevronRight
              className={cn(
                "text-muted-foreground mr-1 h-4 w-4 shrink-0 cursor-pointer transition-transform",
                isExpanded && "rotate-90 transform",
              )}
              onClick={() => toggleExpand(node.id)}
            />
          )}
          {!hasChildren && <div className="mr-2 w-4" />}

          <Checkbox
            id={node.id}
            checked={isSelected}
            className={isIndeterminate ? "data-[state=checked]:bg-primary/80" : ""}
            data-state={isIndeterminate ? "indeterminate" : isSelected ? "checked" : "unchecked"}
            onCheckedChange={(checked) => handleCheckboxChange(node, checked as boolean)}
          />

          <label
            htmlFor={node.id}
            className="ml-2 cursor-pointer text-sm"
            onClick={() => hasChildren && toggleExpand(node.id)}
          >
            {node.label}
          </label>
        </div>

        {hasChildren && isExpanded && (
          <div className="border-border/50 ml-4 border-l pl-2">
            {node.children!.map((child) => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  return <div className="checkbox-tree">{data.map((node) => renderNode(node))}</div>
}

export function CheckboxTreeExample() {
  const treeData = [
    {
      id: "electronics",
      label: "Electronics",
      children: [
        {
          id: "smartphones",
          label: "Smartphones",
          children: [
            { id: "iphone", label: "iPhone" },
            { id: "samsung", label: "Samsung" },
            { id: "google", label: "Google Pixel" },
          ],
        },
        {
          id: "laptops",
          label: "Laptops",
          children: [
            { id: "macbook", label: "MacBook" },
            { id: "dell", label: "Dell" },
            { id: "hp", label: "HP" },
          ],
        },
      ],
    },
    {
      id: "clothing",
      label: "Clothing",
      children: [
        { id: "mens", label: "Men's" },
        { id: "womens", label: "Women's" },
        { id: "kids", label: "Kids" },
      ],
    },
  ]

  return (
    <div className="bg-background w-full max-w-xl rounded-md border p-4">
      <h3 className="mb-3 font-medium">Product Categories</h3>
      <CheckboxTree data={treeData} onChange={(selected) => console.log("Selected:", selected)} expanded />
    </div>
  )
}
