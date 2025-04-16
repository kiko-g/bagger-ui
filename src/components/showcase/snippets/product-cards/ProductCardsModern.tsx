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

function ProductModern({ product }: { product: ProductType }) {
  const [color, setColor] = useState<ColorHex>(product.info.colors[0])
  const priceWithDiscount = product.info.price - (product.info.price * product.info.sale.percent) / 100

  return (
    <div className="group relative flex w-full max-w-sm flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:shadow-xl dark:bg-zinc-900">
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={product.info.image || "/placeholder.svg"}
          alt={product.info.title}
          fill
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 400px"
        />

        {/* Status badges */}
        <div className="absolute left-4 top-4 flex flex-col gap-2">
          {product.info.new && (
            <div className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-black shadow-md dark:bg-black dark:text-white">
              NEW IN
            </div>
          )}
          {product.info.sale.active && (
            <div className="rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold text-white shadow-md">
              SAVE {product.info.sale.percent}%
            </div>
          )}
          {product.info.soldOut && (
            <div className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-semibold text-white shadow-md">
              SOLD OUT
            </div>
          )}
        </div>

        {/* Quick actions */}
        <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-2 p-4 transition-all duration-300 group-hover:bottom-0">
          <button
            className={cn(
              "flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105 dark:bg-white dark:text-black",
              product.info.soldOut && "cursor-not-allowed opacity-60",
            )}
            disabled={product.info.soldOut}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span>Add to Bag</span>
          </button>
          <button className="rounded-full bg-white p-2 text-black shadow-md transition-transform hover:scale-105 dark:bg-zinc-800 dark:text-white">
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-900 dark:text-white">{product.info.brand}</span>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <svg className="size-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium">{product.info.ratingAvg.toFixed(1)}</span>
            <span className="text-xs text-zinc-500">({product.info.ratingCount})</span>
          </div>
        </div>

        <h3 className="mb-2 text-lg font-bold text-zinc-900 dark:text-white">
          <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400">
            {product.info.title}
          </a>
        </h3>

        {/* Color options */}
        <div className="mb-4 flex gap-2">
          {product.info.colors.map((colorOption) => (
            <button
              key={colorOption}
              className={cn(
                "size-7 rounded-full transition-all",
                color === colorOption
                  ? "ring-2 ring-black ring-offset-2 dark:ring-white dark:ring-offset-zinc-900"
                  : "ring-1 ring-zinc-300 dark:ring-zinc-600",
              )}
              style={{ backgroundColor: colorOption }}
              onClick={() => setColor(colorOption)}
              aria-label={`Select color ${colorOption}`}
            />
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            {product.info.sale.active && (
              <span className="text-sm font-medium text-zinc-500 line-through dark:text-zinc-400">
                ${product.info.price.toFixed(2)}
              </span>
            )}
            <span
              className={cn(
                "text-xl font-bold",
                product.info.sale.active ? "text-rose-600 dark:text-rose-500" : "text-zinc-900 dark:text-white",
              )}
            >
              ${product.info.sale.active ? priceWithDiscount.toFixed(2) : product.info.price.toFixed(2)}
            </span>
          </div>

          <span className="text-xs text-zinc-500 dark:text-zinc-400">SKU: {product.info.sku}</span>
        </div>
      </div>
    </div>
  )
}

export function ProductCardsModern() {
  const products: ProductType[] = [
    {
      info: {
        title: "Wireless Noise-Cancelling Headphones",
        description: "Premium wireless headphones with active noise cancellation and 30-hour battery life.",
        sku: "WH-45678",
        brand: "SoundTech",
        price: 249.99,
        ratingAvg: 4.8,
        ratingCount: 1243,
        colors: ["#000000", "#ffffff", "#0f172a", "#4f46e5"],
        image:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?h=800&w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        new: true,
        soldOut: false,
        hot: true,
        sale: {
          active: true,
          percent: 15,
        },
      },
    },
    {
      info: {
        title: "Smart Fitness Watch",
        description: "Advanced fitness tracker with heart rate monitoring, GPS, and 7-day battery life.",
        brand: "TechFit",
        sku: "FW-67890",
        price: 179.99,
        ratingAvg: 4.6,
        ratingCount: 892,
        colors: ["#000000", "#0f766e", "#4338ca", "#be123c"],
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
        <ProductModern key={`product-modern-${index}`} product={product} />
      ))}
    </div>
  )
}
