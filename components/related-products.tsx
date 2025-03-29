"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Mock product data - in a real app, this would come from an API
const PRODUCTS = [
  {
    id: 1,
    name: "Air Max 2024",
    category: "Men's Shoes",
    price: 130,
    image: "/placeholder.svg?height=400&width=400&text=Product 1",
    slug: "air-max-2024",
  },
  {
    id: 2,
    name: "Air Max 2025",
    category: "Men's Shoes",
    price: 140,
    image: "/placeholder.svg?height=400&width=400&text=Product 2",
    slug: "air-max-2025",
  },
  {
    id: 3,
    name: "Air Max 2026",
    category: "Men's Shoes",
    price: 150,
    image: "/placeholder.svg?height=400&width=400&text=Product 3",
    slug: "air-max-2026",
  },
  {
    id: 4,
    name: "Air Max 2027",
    category: "Men's Shoes",
    price: 160,
    image: "/placeholder.svg?height=400&width=400&text=Product 4",
    slug: "air-max-2027",
  },
]

interface RelatedProductsProps {
  currentProductId: number
}

export default function RelatedProducts({ currentProductId }: RelatedProductsProps) {
  const [relatedProducts, setRelatedProducts] = useState(
    PRODUCTS.filter((product) => product.id !== currentProductId).slice(0, 3),
  )

  // In a real app, you would fetch related products from an API
  useEffect(() => {
    // Simulating API fetch
    setRelatedProducts(PRODUCTS.filter((product) => product.id !== currentProductId).slice(0, 3))
  }, [currentProductId])

  return (
    <section className="mt-24">
      <h2 className="mb-8 text-2xl font-bold">You Might Also Like</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {relatedProducts.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="mb-4 overflow-hidden">
              <Link href={`/products/${product.slug}`}>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>
            <div>
              <Link href={`/products/${product.slug}`}>
                <h3 className="text-lg font-medium">{product.name}</h3>
              </Link>
              <p className="text-muted-foreground">{product.category}</p>
              <p className="mt-2 font-medium">${product.price}</p>
              <Link href={`/products/${product.slug}`}>
                <Button variant="outline" size="sm" className="mt-3 w-full rounded-full">
                  View Product
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

