'use client'

import clsx from 'clsx'
import Image from 'next/image'
import React, { useState } from 'react'

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

function ProductSimple({ product }: { product: ProductType }) {
  const [color, setColor] = useState<ColorHex>(product.info.colors[0])
  const productId = product.info.title.replace(/\s/g, '-').toLowerCase()
  const priceWithDiscount = product.info.price - (product.info.price * product.info.sale.percent) / 100

  return (
    <div
      className={clsx(
        'flex max-h-[80vh] w-full flex-col self-stretch overflow-hidden border-0 border-zinc-300 bg-white transition-all hover:bg-[#fefefe] hover:shadow-lg dark:border-zinc-700 dark:bg-black/30 md:w-72',
      )}
    >
      <a className="relative min-h-[16rem] overflow-hidden" href="#">
        <div className="absolute left-0 top-0 m-2 flex flex-col gap-y-1.5">
          {product.info.new && (
            <span className="z-10 h-full w-full border border-[#00000040] bg-emerald-600/80 px-1 py-1 text-center text-xs font-medium tracking-tighter text-white">
              New
            </span>
          )}
          {product.info.sale.active && (
            <span className="z-10 h-full w-full border border-[#00000040] bg-red-600/80 px-1 py-1 text-center text-xs font-medium tracking-tighter text-white">
              -{product.info.sale.percent}%
            </span>
          )}
          {product.info.soldOut && (
            <span className="z-10 h-full w-full border border-[#00000040] bg-slate-600/80 px-1 py-1 text-center text-xs font-medium tracking-tighter text-white">
              Sold Out
            </span>
          )}
        </div>

        <Image
          alt="Product A1"
          width={800}
          height={800}
          placeholder="blur"
          blurDataURL={product.info.image}
          className={clsx('block w-full transition-all hover:scale-110', product.info.soldOut ? 'sold-out' : '')}
          src={product.info.image}
        />
      </a>

      <div className="group relative flex flex-1 flex-col justify-between">
        <section className="px-3 pt-3">
          <div className="flex items-center justify-start gap-x-1.5">
            <span className="inline-flex text-xs font-semibold uppercase tracking-tighter text-zinc-600 group-hover:opacity-100 dark:text-zinc-400">
              {product.info.brand}
              {' / '}
              {product.info.sku}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5 -rotate-45 stroke-zinc-500 opacity-0 transition-opacity duration-200 ease-in-out dark:stroke-zinc-400"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </div>

          <a href="#" className="w-min whitespace-nowrap text-xl font-bold hover:underline">
            {product.info.title}
          </a>
          <p className="line-clamp-3 text-sm tracking-tight">{product.info.description}</p>
          <div className="mb-5 mt-2 flex w-full flex-col justify-start gap-2">
            <div className="flex flex-col items-start text-xs">
              <a href="#" className="flex items-center gap-x-1 tracking-tight hover:underline">
                <svg
                  className="mr-[1px] h-3 w-3 fill-amber-500 stroke-amber-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <span className="font-semibold text-zinc-900 dark:text-white">{product.info.ratingAvg.toFixed(2)}</span>
                <span className="font-semibold text-zinc-900 dark:text-white">({product.info.ratingCount})</span>
              </a>
            </div>

            <div className="flex items-center gap-1 text-base">
              <span
                className={clsx(
                  'leading-none tracking-tight',
                  product.info.sale.active ? 'font-medium line-through' : 'font-bold',
                )}
              >
                {product.info.price.toFixed(2)}$
              </span>
              {product.info.sale.active && (
                <a href="#" className="text-lg font-bold leading-none tracking-tight text-rose-600 hover:underline">
                  {priceWithDiscount.toFixed(2)}$
                </a>
              )}
            </div>
          </div>
        </section>

        <div className="px-3 pb-4">
          <div className="mt-3 flex w-full flex-row flex-wrap items-center gap-2.5">
            {product.info.colors.map((x, i) => (
              <button
                key={`color-${x}-${i}`}
                onClick={() => setColor(x)}
                style={{ backgroundColor: `${x}aa` }}
                className={clsx(
                  'h-6 w-6 rounded-sm border-2 border-[#00000040] transition-all duration-200 ease-in-out hover:opacity-80',
                  color === x
                    ? 'ring-2 ring-zinc-400 ring-offset-2 ring-offset-white dark:ring-white dark:ring-offset-zinc-800'
                    : '',
                )}
              ></button>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between gap-x-2">
            <button
              className="flex flex-1 items-center justify-center gap-x-1 rounded bg-emerald-600 px-3 py-2 text-sm font-medium tracking-tighter text-white transition-all duration-200 ease-in-out enabled:hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
              disabled={product.info.soldOut}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <span>Add to cart</span>
            </button>

            <button className="flex items-center justify-center gap-x-1 rounded bg-zinc-500 px-3 py-2 text-sm font-medium tracking-tighter text-white transition-all duration-200 ease-in-out enabled:hover:bg-zinc-600 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-white/20 enabled:hover:dark:bg-white/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <span className="hidden">Details</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProductCardsSimple() {
  const products: ProductType[] = [
    {
      info: {
        title: 'Product A',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget mattis aliquam, augue nisl ultricies nunc, nec tincidunt velit nunc quis eros.',
        sku: 'AP-12345',
        brand: 'Brand A',
        price: 1270,
        ratingAvg: 4.82,
        ratingCount: 3275,
        colors: ['#224455', '#33bb99', '#aa6677', '#4499ee'],
        image:
          'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?h=800&w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNsb3RoZXN8ZW58MHx8MHx8fDI%3D',
        new: true,
        soldOut: false,
        hot: false,
        sale: {
          active: true,
          percent: 20,
        },
      },
    },
    {
      info: {
        title: 'Product B',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget mattis aliquam, augue nisl ultricies nunc, nec tincidunt velit nunc quis eros.',
        brand: 'Brand B',
        sku: 'ST-56789',
        price: 467,
        ratingAvg: 3.91,
        ratingCount: 455,
        colors: ['#118844', '#AA66FF', '#003399', '#FFFFFF'],
        image:
          'https://images.unsplash.com/photo-1536992266094-82847e1fd431?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2xvdGhlc3x8fHx8fDE3MDYwMzUzODk&ixlib=rb-4.0.3&q=80&w=800',
        new: true,
        soldOut: false,
        hot: false,
        sale: {
          active: true,
          percent: 20,
        },
      },
    },
  ]

  return (
    <div className="flex items-center justify-start gap-6">
      {products.map((product, productIdx) => (
        <ProductSimple key={`product-${productIdx}`} product={product} />
      ))}
    </div>
  )
}
