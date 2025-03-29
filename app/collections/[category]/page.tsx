import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"

// Mock product database - in a real app, this would come from an API
const PRODUCTS = [
  {
    id: 1,
    name: "Air Max 2024",
    category: "Men's Shoes",
    price: 130,
    image: "/placeholder.svg?height=400&width=400&text=Product 1",
    slug: "air-max-2024",
    collections: ["men", "shoes", "new-releases"],
  },
  {
    id: 2,
    name: "Air Max 2025",
    category: "Men's Shoes",
    price: 140,
    image: "/placeholder.svg?height=400&width=400&text=Product 2",
    slug: "air-max-2025",
    collections: ["men", "shoes"],
  },
  {
    id: 3,
    name: "Air Max 2026",
    category: "Men's Shoes",
    price: 150,
    image: "/placeholder.svg?height=400&width=400&text=Product 3",
    slug: "air-max-2026",
    collections: ["men", "shoes", "new-releases"],
  },
  {
    id: 4,
    name: "Air Max 2027",
    category: "Men's Shoes",
    price: 160,
    image: "/placeholder.svg?height=400&width=400&text=Product 4",
    slug: "air-max-2027",
    collections: ["men", "shoes"],
  },
  {
    id: 5,
    name: "Running Shorts",
    category: "Men's Clothing",
    price: 45,
    image: "/placeholder.svg?height=400&width=400&text=Shorts",
    slug: "running-shorts",
    collections: ["men", "clothing", "running"],
  },
  {
    id: 6,
    name: "Training T-Shirt",
    category: "Men's Clothing",
    price: 35,
    image: "/placeholder.svg?height=400&width=400&text=T-Shirt",
    slug: "training-t-shirt",
    collections: ["men", "clothing"],
  },
  {
    id: 7,
    name: "Running Jacket",
    category: "Women's Clothing",
    price: 85,
    image: "/placeholder.svg?height=400&width=400&text=Jacket",
    slug: "running-jacket",
    collections: ["women", "clothing", "running"],
  },
  {
    id: 8,
    name: "Training Leggings",
    category: "Women's Clothing",
    price: 65,
    image: "/placeholder.svg?height=400&width=400&text=Leggings",
    slug: "training-leggings",
    collections: ["women", "clothing"],
  },
  {
    id: 9,
    name: "Women's Air Max",
    category: "Women's Shoes",
    price: 130,
    image: "/placeholder.svg?height=400&width=400&text=Women's Shoes",
    slug: "womens-air-max",
    collections: ["women", "shoes", "new-releases"],
  },
  {
    id: 10,
    name: "Kids' Running Shoes",
    category: "Kids' Shoes",
    price: 80,
    image: "/placeholder.svg?height=400&width=400&text=Kids' Shoes",
    slug: "kids-running-shoes",
    collections: ["kids", "shoes", "running"],
  },
  {
    id: 11,
    name: "Basketball Shoes",
    category: "Men's Shoes",
    price: 120,
    image: "/placeholder.svg?height=400&width=400&text=Basketball Shoes",
    slug: "basketball-shoes",
    collections: ["men", "shoes", "basketball"],
  },
  {
    id: 12,
    name: "Basketball Jersey",
    category: "Men's Clothing",
    price: 75,
    image: "/placeholder.svg?height=400&width=400&text=Basketball Jersey",
    slug: "basketball-jersey",
    collections: ["men", "clothing", "basketball"],
  },
]

// Valid collection categories
const VALID_CATEGORIES = [
  "all",
  "men",
  "women",
  "kids",
  "shoes",
  "clothing",
  "accessories",
  "new-releases",
  "running",
  "basketball",
]

// Collection titles and descriptions
const COLLECTION_INFO: Record<string, { title: string; description: string }> = {
  all: {
    title: "All Products",
    description: "Browse our complete collection of sportswear and footwear.",
  },
  men: {
    title: "Men's Collection",
    description: "Performance gear designed for men who push boundaries.",
  },
  women: {
    title: "Women's Collection",
    description: "Stylish and functional sportswear for women who demand the best.",
  },
  kids: {
    title: "Kids' Collection",
    description: "Durable and comfortable gear for active kids.",
  },
  shoes: {
    title: "Footwear",
    description: "Innovative shoes designed for performance and style.",
  },
  clothing: {
    title: "Clothing",
    description: "Apparel that combines comfort, style, and functionality.",
  },
  accessories: {
    title: "Accessories",
    description: "Complete your look with our range of sports accessories.",
  },
  "new-releases": {
    title: "New Releases",
    description: "The latest and greatest products fresh off the production line.",
  },
  running: {
    title: "Running Collection",
    description: "Specialized gear for runners of all levels.",
  },
  basketball: {
    title: "Basketball Collection",
    description: "Elevate your game with our basketball shoes and apparel.",
  },
}

export default function CollectionPage({ params }: { params: { category: string } }) {
  const category = params.category

  // Check if category is valid
  if (!VALID_CATEGORIES.includes(category) && category !== "all") {
    notFound()
  }

  // Get collection info
  const collectionInfo = COLLECTION_INFO[category] || {
    title: "Collection",
    description: "Browse our products.",
  }

  // Filter products by category
  const products = category === "all" ? PRODUCTS : PRODUCTS.filter((product) => product.collections.includes(category))

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">{collectionInfo.title}</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">{collectionInfo.description}</p>
      </div>

      {products.length === 0 ? (
        <div className="rounded-lg border p-8 text-center">
          <p className="text-muted-foreground">No products found in this collection.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
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
      )}
    </div>
  )
}

