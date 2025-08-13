"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"

type ColorHex = `#${string}`
type ProductType = {
  info: {
    title: string
    description: string
    sku: string
    brand: string
    price: number
    image: string
    ratingAvg: number
    ratingCount: number
    colors: ColorHex[]
    new: boolean
    hot: boolean
    soldOut: boolean
    sale: {
      active: boolean
      percent: number
    }
  }
}

function ProductHorizontal({ product }: { product: ProductType }) {
  const [color, setColor] = useState<ColorHex>(product.info.colors[0])
  const priceWithDiscount = product.info.price - (product.info.price * product.info.sale.percent) / 100

  return (
    <div className="flex w-full overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      {/* Image container */}
      <div className="relative h-auto w-1/3 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={product.info.image || "/placeholder.svg"}
          alt={product.info.title}
          className="h-full w-full object-cover object-center"
          width={200}
          height={200}
        />

        {/* Status badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.info.new && (
            <div className="rounded bg-emerald-500 px-1.5 py-0.5 text-xs font-medium text-white">New</div>
          )}
          {product.info.sale.active && (
            <div className="rounded bg-rose-500 px-1.5 py-0.5 text-xs font-medium text-white">
              -{product.info.sale.percent}%
            </div>
          )}
          {product.info.soldOut && (
            <div className="rounded bg-zinc-700 px-1.5 py-0.5 text-xs font-medium text-white">Sold out</div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-xs font-medium tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
            {product.info.brand}
          </span>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={cn(
                    "size-3.5",
                    i < Math.floor(product.info.ratingAvg)
                      ? "text-amber-400"
                      : i < Math.ceil(product.info.ratingAvg)
                        ? "text-amber-400/50"
                        : "text-zinc-300 dark:text-zinc-600",
                  )}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-zinc-600 dark:text-zinc-400">({product.info.ratingCount})</span>
          </div>
        </div>

        <h3 className="mb-1 text-lg font-semibold text-zinc-900 dark:text-white">
          <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">
            {product.info.title}
          </a>
        </h3>

        <p className="mb-3 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-300">{product.info.description}</p>

        {/* Color options */}
        <div className="mb-3 flex flex-wrap gap-2">
          {product.info.colors.map((colorOption) => (
            <button
              key={colorOption}
              className={cn(
                "size-5 rounded-full transition-all",
                color === colorOption
                  ? "ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-zinc-900"
                  : "ring-1 ring-zinc-300 dark:ring-zinc-600",
              )}
              style={{ backgroundColor: colorOption }}
              onClick={() => setColor(colorOption)}
              aria-label={`Select color ${colorOption}`}
            />
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            {product.info.sale.active && (
              <span className="text-sm font-medium text-zinc-500 line-through dark:text-zinc-400">
                ${product.info.price.toFixed(2)}
              </span>
            )}
            <span
              className={cn(
                "text-lg font-bold",
                product.info.sale.active ? "text-rose-600 dark:text-rose-500" : "text-zinc-900 dark:text-white",
              )}
            >
              ${product.info.sale.active ? priceWithDiscount.toFixed(2) : product.info.price.toFixed(2)}
            </span>
          </div>

          <div className="flex gap-2">
            <button
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                product.info.soldOut
                  ? "cursor-not-allowed bg-zinc-200 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-500"
                  : "bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600",
              )}
              disabled={product.info.soldOut}
            >
              {product.info.soldOut ? "Sold Out" : "Add to Cart"}
            </button>
            <button className="rounded-md border border-zinc-300 p-1.5 text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProductCardsHorizontal() {
  const products: ProductType[] = [
    {
      info: {
        title: "Premium Wool Sweater",
        description: "Luxurious merino wool sweater with ribbed cuffs and hem, perfect for cold weather comfort.",
        sku: "WS-78901",
        brand: "Cozy Knits",
        price: 129.99,
        ratingAvg: 4.8,
        ratingCount: 756,
        colors: ["#374151", "#7f1d1d", "#1e3a8a", "#365314"],
        image:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?h=800&w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        new: false,
        soldOut: false,
        hot: true,
        sale: {
          active: true,
          percent: 25,
        },
      },
    },
    {
      info: {
        title: "Leather Crossbody Bag",
        description:
          "Handcrafted genuine leather bag with adjustable strap and multiple compartments for everyday use.",
        brand: "Urban Carry",
        sku: "LB-34567",
        price: 159.99,
        ratingAvg: 4.6,
        ratingCount: 432,
        colors: ["#44403c", "#0c4a6e", "#3f6212", "#7e22ce"],
        image:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?h=800&w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        new: true,
        soldOut: false,
        hot: false,
        sale: {
          active: false,
          percent: 0,
        },
      },
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      {products.map((product, index) => (
        <ProductHorizontal key={`product-horizontal-${index}`} product={product} />
      ))}
    </div>
  )
}
