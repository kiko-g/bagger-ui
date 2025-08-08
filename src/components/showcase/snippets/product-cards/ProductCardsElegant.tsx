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

function ProductElegant({ product }: { product: ProductType }) {
  const [color, setColor] = useState<ColorHex>(product.info.colors[0])
  const [isHovered, setIsHovered] = useState(false)
  const priceWithDiscount = product.info.price - (product.info.price * product.info.sale.percent) / 100

  return (
    <div
      className="group relative flex w-full max-w-sm flex-col overflow-hidden bg-white transition-all duration-300 dark:bg-zinc-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-3/4 overflow-hidden">
        <Image
          src={product.info.image || "/placeholder.svg"}
          alt={product.info.title}
          fill
          className="object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 400px"
        />

        {/* Status badges */}
        <div className="absolute top-5 left-0 z-10">
          {product.info.new && (
            <div className="mb-2 bg-black px-4 py-1 text-xs font-medium tracking-wider text-white uppercase dark:bg-white dark:text-black">
              New
            </div>
          )}
          {product.info.sale.active && (
            <div className="mb-2 bg-rose-600 px-4 py-1 text-xs font-medium tracking-wider text-white uppercase">
              Sale {product.info.sale.percent}%
            </div>
          )}
          {product.info.soldOut && (
            <div className="mb-2 bg-zinc-800 px-4 py-1 text-xs font-medium tracking-wider text-white uppercase">
              Sold out
            </div>
          )}
        </div>

        {/* Overlay with actions */}
        <div
          className={cn(
            "absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/60 to-transparent p-6 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="flex justify-between">
            <button
              className={cn(
                "rounded-none border border-white bg-white px-4 py-2 text-xs font-medium tracking-wider text-black uppercase transition-colors",
                product.info.soldOut
                  ? "cursor-not-allowed bg-zinc-300 text-zinc-500"
                  : "hover:bg-transparent hover:text-white",
              )}
              disabled={product.info.soldOut}
            >
              Add to Cart
            </button>
            <div className="flex gap-2">
              <button className="flex items-center justify-center border border-white bg-transparent p-2 text-white transition-colors hover:bg-white hover:text-black">
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
                    strokeWidth="1.5"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
              <button className="flex items-center justify-center border border-white bg-transparent p-2 text-white transition-colors hover:bg-white hover:text-black">
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
                    strokeWidth="1.5"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-xs font-medium tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
            {product.info.brand}
          </span>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <svg className="size-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs font-medium">{product.info.ratingAvg.toFixed(1)}</span>
          </div>
        </div>

        <h3 className="mb-2 font-serif text-lg font-medium text-zinc-900 dark:text-white">
          <a href="#" className="hover:underline">
            {product.info.title}
          </a>
        </h3>

        {/* Color options */}
        <div className="mb-3 flex gap-1">
          {product.info.colors.map((colorOption) => (
            <button
              key={colorOption}
              className={cn(
                "size-4 rounded-full transition-all",
                color === colorOption ? "ring-1 ring-black dark:ring-white" : "",
              )}
              style={{ backgroundColor: colorOption }}
              onClick={() => setColor(colorOption)}
              aria-label={`Select color ${colorOption}`}
            />
          ))}
        </div>

        <div className="mt-auto flex items-baseline gap-2">
          {product.info.sale.active && (
            <span className="text-sm font-medium text-zinc-500 line-through dark:text-zinc-400">
              ${product.info.price.toFixed(2)}
            </span>
          )}
          <span
            className={cn(
              "text-base font-medium",
              product.info.sale.active ? "text-rose-600 dark:text-rose-500" : "text-zinc-900 dark:text-white",
            )}
          >
            ${product.info.sale.active ? priceWithDiscount.toFixed(2) : product.info.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
}

export function ProductCardsElegant() {
  const products: ProductType[] = [
    {
      info: {
        title: "Silk Evening Dress",
        description: "Luxurious silk evening dress with delicate embroidery and flowing silhouette.",
        sku: "ED-98765",
        brand: "Haute Couture",
        price: 349.99,
        ratingAvg: 4.9,
        ratingCount: 328,
        colors: ["#000000", "#7c2d12", "#1e3a8a", "#4c1d95"],
        image:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?h=800&w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        new: true,
        soldOut: false,
        hot: false,
        sale: {
          active: true,
          percent: 30,
        },
      },
    },
    {
      info: {
        title: "Cashmere Scarf",
        description: "Ultra-soft cashmere scarf with fringed edges, perfect for adding elegance to any outfit.",
        brand: "Luxe Accessories",
        sku: "CS-23456",
        price: 129.99,
        ratingAvg: 4.7,
        ratingCount: 215,
        colors: ["#78350f", "#1e3a8a", "#831843", "#365314"],
        image:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?h=800&w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        new: false,
        soldOut: true,
        hot: false,
        sale: {
          active: false,
          percent: 0,
        },
      },
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
      {products.map((product, index) => (
        <ProductElegant key={`product-elegant-${index}`} product={product} />
      ))}
    </div>
  )
}
