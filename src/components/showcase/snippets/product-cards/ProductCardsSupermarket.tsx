"use client"

import { ProductCardSupermarket, type StoreProduct } from "./ProductCardSupermarket"

const MOCKS: StoreProduct[] = [
  {
    url: "https://www.continente.pt/produto/bebida-energetica-ultra-white-sem-acucar-monster-5841433.html",
    name: "Bebida Energética Ultra White sem Açúcar",
    brand: "Monster",
    pack: "50 cl",
    price: 1.74,
    price_recommended: 1.74,
    price_per_major_unit: 3.48,
    major_unit: "/lt",
    image:
      "https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dw51c4bd31/images/col/584/5841433-hero-.png.jpg?sw=500&sh=500",
    category: "Bebidas e Garrafeira",
    category_2: "Bebidas Energéticas e Isotónicas",
    category_3: null,
    discount: 0,
    id: 16258,
    created_at: "2025-07-27T16:01:13.98+00:00",
    updated_at: "2025-08-12T12:00:17.891+00:00",
    origin_id: 1,
    priority: 4,
    product_id: 18,
    is_favorited: true,
  },
  {
    url: "https://www.continente.pt/produto/iogurte-grego-pessego-oikos-danone-7214152.html",
    name: "Iogurte Grego Pêssego",
    brand: "Oikos Danone",
    pack: "440 gr (4 un)",
    price: 2.09,
    price_recommended: 2.99,
    price_per_major_unit: 4.75,
    major_unit: "/kg",
    image:
      "https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dw228b972d/images/col/721/7214152-frente.png?sw=500&sh=500",
    category: "Laticínios e Ovos",
    category_2: "Iogurtes",
    category_3: "Iogurtes Gregos",
    discount: 0.301003344481605,
    id: 2687,
    created_at: "2025-07-28T04:04:19.227+00:00",
    updated_at: "2025-08-12T16:00:46.224+00:00",
    origin_id: 1,
    priority: 5,
    product_id: 115,
    is_favorited: true,
  },
  {
    url: "https://www.continente.pt/produto/atum-posta-ao-natural-bom-petisco-2533100.html",
    name: "Atum Posta ao Natural",
    brand: "Bom Petisco",
    pack: "120 gr (peso escorrido 84 gr)",
    price: 1.31,
    price_recommended: 2.03,
    price_per_major_unit: 15.6,
    major_unit: "/kg",
    image:
      "https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dw28c45616/images/col/253/2533100-cima.jpg?sw=500&sh=500",
    category: "Mercearia",
    category_2: "Conservas",
    category_3: "Atum",
    discount: 0.354679802955665,
    id: 3807,
    created_at: "2025-06-08T12:01:01.842+00:00",
    updated_at: "2025-08-12T20:00:41.644+00:00",
    origin_id: 1,
    priority: 5,
    product_id: 56,
    is_favorited: true,
  },
  {
    url: "https://www.auchan.pt/pt/biologicos-e-alternativas/nutricao-desportiva/bebidas-desportivas-e-geis-energeticos/bebidas-desportivas-infusion/electrolitos-goldnutrition-em-sticks-30g/3517465.html",
    name: "Electrolitos goldnutrition em sticks 30g",
    brand: "Goldnutrition",
    pack: "Frutose, carbonato de magnésio, espessante (pectina), bicarbonato de sódio, cloreto de sódio, fosfato de potássio, aroma, acidificante (ácido cítrico), edulcorantes (sucralose, glicosídeos de esteviol provenientes de estévia).",
    price: 6.79,
    price_recommended: 7.99,
    price_per_major_unit: 226.33,
    major_unit: "Kg",
    image:
      "https://www.auchan.pt/dw/image/v2/BFRC_PRD/on/demandware.static/-/Sites-auchan-pt-master-catalog/default/dw9f295f30/images/hi-res/003517465.jpg?sw=500&sh=500&sm=fit&bgcolor=FFFFFF",
    category: "Biológicos e Alternativas",
    category_2: "Nutrição Desportiva",
    category_3: "Bebidas Desportivas e Géis Energéticos",
    discount: 0.150187734668335,
    id: 80560,
    created_at: "2025-06-12T01:12:35+00:00",
    updated_at: "2025-08-12T20:00:43.622+00:00",
    origin_id: 2,
    priority: 4,
    product_id: 61,
    is_favorited: true,
  },
]

export function ProductCardsSupermarket() {
  return (
    <div className="bg-background grid grid-cols-2 gap-8 p-4">
      {MOCKS.map((p) => (
        <ProductCardSupermarket key={p.id} product={p} />
      ))}
    </div>
  )
}
