"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { addToCart } from "@/lib/cart-actions"

// Mock product data
const FEATURED_PRODUCTS = [
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

export default function FeaturedProducts() {
  const { toast } = useToast()
  const [products, setProducts] = useState(FEATURED_PRODUCTS)

  // In a real app, you would fetch products from an API
  useEffect(() => {
    // Simulating API fetch
    // const fetchProducts = async () => {
    //   const response = await fetch('/api/products/featured')
    //   const data = await response.json()
    //   setProducts(data)
    // }
    // fetchProducts()
  }, [])

  const handleQuickAdd = (productId: number, productName: string) => {
    addToCart(productId, 1)
    toast({
      title: "Added to cart",
      description: `${productName} has been added to your cart.`,
    })
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold">Featured Collection</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group relative cursor-pointer">
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
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-3 w-full rounded-full"
                  onClick={() => handleQuickAdd(product.id, product.name)}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/collections/all">
            <Button variant="outline" size="lg" className="rounded-full">
              View All Products <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

