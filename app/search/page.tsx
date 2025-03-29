"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Mock product database - in a real app, this would come from an API
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
  {
    id: 5,
    name: "Running Shorts",
    category: "Men's Clothing",
    price: 45,
    image: "/placeholder.svg?height=400&width=400&text=Shorts",
    slug: "running-shorts",
  },
  {
    id: 6,
    name: "Training T-Shirt",
    category: "Men's Clothing",
    price: 35,
    image: "/placeholder.svg?height=400&width=400&text=T-Shirt",
    slug: "training-t-shirt",
  },
  {
    id: 7,
    name: "Running Jacket",
    category: "Women's Clothing",
    price: 85,
    image: "/placeholder.svg?height=400&width=400&text=Jacket",
    slug: "running-jacket",
  },
  {
    id: 8,
    name: "Training Leggings",
    category: "Women's Clothing",
    price: 65,
    image: "/placeholder.svg?height=400&width=400&text=Leggings",
    slug: "training-leggings",
  },
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState(PRODUCTS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Get unique categories
  const categories = ["All", ...new Set(PRODUCTS.map((product) => product.category))]

  useEffect(() => {
    // Filter products based on search query and selected category
    let filteredProducts = PRODUCTS

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    if (selectedCategory !== "All") {
      filteredProducts = filteredProducts.filter((product) => product.category === selectedCategory)
    }

    setSearchResults(filteredProducts)
  }, [searchQuery, selectedCategory])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Search is already handled by the useEffect
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-3xl font-bold">Search Products</h1>

      <div className="mb-12">
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button type="submit">Search</Button>
        </form>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Filters */}
        <div className="lg:col-span-1">
          <h2 className="mb-4 text-xl font-medium">Categories</h2>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`block w-full rounded-md px-3 py-2 text-left ${
                  selectedCategory === category ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-3">
          <h2 className="mb-6 text-xl font-medium">
            {searchResults.length} {searchResults.length === 1 ? "Result" : "Results"}
            {searchQuery && ` for "${searchQuery}"`}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </h2>

          {searchResults.length === 0 ? (
            <div className="rounded-lg border p-8 text-center">
              <p className="mb-4 text-muted-foreground">No products found matching your criteria.</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              {searchResults.map((product) => (
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
      </div>
    </div>
  )
}

