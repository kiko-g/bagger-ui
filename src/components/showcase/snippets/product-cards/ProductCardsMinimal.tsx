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

function ProductMinimal({ product }: { product: ProductType }) {
  const [color, setColor] = useState<ColorHex>(product.info.colors[0])
  const priceWithDiscount = product.info.price - (product.info.price * product.info.sale.percent) / 100

  return (
    <div className="group relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:bg-zinc-900">
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={product.info.image || "/placeholder.svg"}
          alt={product.info.title}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 300px"
        />

        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {product.info.new && (
            <span className="rounded-full bg-emerald-500 px-2 py-1 text-xs font-medium text-white">New</span>
          )}
          {product.info.sale.active && (
            <span className="rounded-full bg-rose-500 px-2 py-1 text-xs font-medium text-white">
              -{product.info.sale.percent}%
            </span>
          )}
          {product.info.soldOut && (
            <span className="rounded-full bg-zinc-700 px-2 py-1 text-xs font-medium text-white">Sold out</span>
          )}
        </div>

        {/* Quick actions */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex gap-2 rounded-full bg-white/90 p-1 backdrop-blur-sm dark:bg-black/70">
            <button
              className="rounded-full bg-white p-2 text-zinc-800 shadow-sm transition-colors hover:bg-zinc-100 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
              aria-label="Add to wishlist"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
            <button
              className="rounded-full bg-white p-2 text-zinc-800 shadow-sm transition-colors hover:bg-zinc-100 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
              aria-label="Quick view"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">{product.info.brand}</span>
          <div className="flex items-center gap-1">
            <svg className="size-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs font-medium">{product.info.ratingAvg.toFixed(1)}</span>
          </div>
        </div>

        <h3 className="mb-1 text-base font-medium text-zinc-900 dark:text-white">
          <a href="#" className="hover:underline">
            {product.info.title}
          </a>
        </h3>

        <p className="mb-4 line-clamp-2 text-xs text-zinc-600 dark:text-zinc-300">{product.info.description}</p>

        {/* Color options */}
        <div className="mb-4 flex gap-1.5">
          {product.info.colors.map((colorOption) => (
            <button
              key={colorOption}
              className={cn(
                "size-6 rounded-full border transition-all",
                color === colorOption ? "ring-1 ring-offset-2" : "opacity-70 hover:opacity-100",
              )}
              style={{
                backgroundColor: colorOption,
                borderColor: `color-mix(in srgb, ${colorOption} ${color === colorOption ? 90 : 80}%, black)`,
                ["--tw-ring-color" as string]: `color-mix(in srgb, ${colorOption} 50%, black)`,
              }}
              onClick={() => setColor(colorOption)}
              aria-label={`Select color ${colorOption}`}
            />
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            {product.info.sale.active && (
              <span className="text-xs font-medium text-zinc-500 line-through dark:text-zinc-400">
                ${product.info.price.toFixed(2)}
              </span>
            )}
            <span
              className={cn(
                "text-base font-semibold",
                product.info.sale.active ? "text-rose-600 dark:text-rose-500" : "text-zinc-900 dark:text-white",
              )}
            >
              ${product.info.sale.active ? priceWithDiscount.toFixed(2) : product.info.price.toFixed(2)}
            </span>
          </div>

          <button
            className={cn(
              "rounded-full p-2.5 text-white transition-colors",
              product.info.soldOut
                ? "cursor-not-allowed bg-zinc-300 dark:bg-zinc-700"
                : "bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white",
            )}
            disabled={product.info.soldOut}
            aria-label="Add to cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="size-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export function ProductCardsMinimal() {
  const products: ProductType[] = [
    {
      info: {
        title: "Minimal Tee",
        description: "Ultra-soft cotton t-shirt with minimalist design, perfect for everyday wear and layering.",
        sku: "MT-12345",
        brand: "Essentials",
        price: 39.99,
        ratingAvg: 4.7,
        ratingCount: 1243,
        colors: ["#000000", "#ffffff", "#6b7280", "#a78bfa"],
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?h=800&w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        new: true,
        soldOut: false,
        hot: false,
        sale: {
          active: true,
          percent: 15,
        },
      },
    },
    {
      info: {
        title: "Classic Denim Jacket",
        description: "Timeless denim jacket with vintage wash and comfortable fit for all seasons.",
        brand: "Urban Style",
        sku: "DJ-56789",
        price: 89.99,
        ratingAvg: 4.5,
        ratingCount: 867,
        colors: ["#1e3a8a", "#1f2937", "#78350f", "#fef3c7"],
        image:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?h=800&w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        new: false,
        soldOut: false,
        hot: true,
        sale: {
          active: false,
          percent: 0,
        },
      },
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product, index) => (
        <ProductMinimal key={`product-minimal-${index}`} product={product} />
      ))}
    </div>
  )
}
