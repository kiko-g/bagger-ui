"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { ArrowUpRightIcon, CopyIcon, EllipsisVerticalIcon, HeartIcon } from "lucide-react"

export interface StoreProduct {
  id: number
  origin_id: number
  url: string
  name: string
  brand: string | null
  pack: string | null
  price: number
  price_recommended: number | null
  price_per_major_unit: number | null
  major_unit: string | null
  discount: number | null
  image: string | null
  category: string | null
  category_2: string | null
  category_3: string | null
  priority: number | null
  product_id: number | null
  created_at: string
  updated_at: string
  is_favorited?: boolean
}

export function ProductCardSupermarket({ product }: { product: StoreProduct }) {
  const [isFavorited, setIsFavorited] = useState(false)
  const hasDiscount =
    product.price_recommended != null && product.price != null && product.price_recommended > product.price

  return (
    <div className="bg-background flex w-full flex-col rounded-lg">
      <div
        className={cn(
          "group relative mb-2 overflow-hidden rounded-md border",
          product.image ? "border-border" : "border-transparent",
        )}
      >
        <Link href={product.url} target="_blank" className="block">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className="aspect-square h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="bg-muted aspect-square w-full" />
          )}
        </Link>

        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.price_per_major_unit != null && product.major_unit ? (
            <Badge variant="warning" size="2xs" roundedness="sm" className="w-fit">
              {product.price_per_major_unit}€{product.major_unit}
            </Badge>
          ) : null}
          {product.discount ? (
            <Badge variant="destructive" size="2xs" roundedness="sm" className="w-fit truncate">
              -{(product.discount * 100).toFixed(2)}%
            </Badge>
          ) : null}
        </div>

        <div className="absolute top-2 right-2 flex items-start justify-start gap-1">
          {product.pack ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Badge
                    variant="secondary"
                    size="2xs"
                    roundedness="sm"
                    className="line-clamp-3 w-fit max-w-20 text-left tracking-tighter md:line-clamp-1 md:max-w-32"
                  >
                    {product.pack}
                  </Badge>
                </TooltipTrigger>

                <TooltipContent side="top" align="end" className="max-w-60">
                  {product.pack}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : null}
        </div>

        <div className="absolute bottom-2 left-2 flex gap-1">
          <Button
            variant="outline"
            size="icon-sm"
            className="bg-background"
            onClick={(e) => {
              e.preventDefault()
              setIsFavorited((s) => !s)
            }}
            title={isFavorited ? "Remove from favorites" : "Add to favorites"}
          >
            <HeartIcon
              className={cn(
                "h-4 w-4",
                isFavorited ? "fill-destructive stroke-destructive" : "stroke-foreground fill-none",
              )}
            />
          </Button>
        </div>

        <div className="absolute right-2 bottom-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon-sm" className="bg-background">
                <EllipsisVerticalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48" align="end">
              <DropdownMenuItem asChild>
                <Link href={product.url} target="_blank" className="flex w-full items-center justify-between gap-1">
                  Open product <ArrowUpRightIcon className="h-4 w-4" />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(product.url)}
                className="flex items-center justify-between"
              >
                Copy URL <CopyIcon className="h-4 w-4" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-start">
        <div className="flex w-full flex-col items-start">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Badge variant="outline" size="xs" roundedness="sm" className="text-2xs line-clamp-1 text-left">
                  {product.category || "No category"}
                </Badge>
              </TooltipTrigger>
              <TooltipContent className="max-w-60">{product.category || "No category set"}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <span className="text-primary-500 mt-1.5 w-full text-sm leading-4 font-semibold">
            {product.brand || <span className="text-muted-foreground opacity-30">No Brand</span>}
          </span>
          <h3 className="line-clamp-2 min-h-[44px] w-full text-sm font-medium tracking-tight">
            <Link href={product.url} target="_blank" className="hover:underline">
              {product.name}
            </Link>
          </h3>
        </div>
        <div className="mt-auto flex w-full flex-wrap items-start justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            {hasDiscount ? (
              <div className="flex flex-col">
                <span className="text-muted-foreground text-sm line-through">{product.price_recommended}€</span>
                <span className="text-lg font-bold text-green-600 dark:text-green-500">{product.price}€</span>
              </div>
            ) : product.price ? (
              <span className="text-foreground/90 text-lg font-bold">{product.price}€</span>
            ) : (
              <span className="text-foreground/70 text-lg font-bold">€€€€</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
