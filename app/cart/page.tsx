"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getCart, updateCartItemQuantity, removeFromCart } from "@/lib/cart-actions"

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
]

interface CartItem {
  id: number
  quantity: number
  product: {
    id: number
    name: string
    price: number
    image: string
    slug: string
  }
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load cart from localStorage
    const loadCart = () => {
      const cart = getCart()

      // Map cart items to include product details
      const itemsWithProducts = cart.map((item) => {
        const product = PRODUCTS.find((p) => p.id === item.id)
        return {
          id: item.id,
          quantity: item.quantity,
          product: product || {
            id: item.id,
            name: "Unknown Product",
            price: 0,
            image: "/placeholder.svg?height=400&width=400&text=Unknown",
            slug: "unknown",
          },
        }
      })

      setCartItems(itemsWithProducts)
      setIsLoading(false)
    }

    loadCart()

    // Listen for cart updates
    const handleCartUpdate = () => loadCart()
    window.addEventListener("cart-updated", handleCartUpdate)

    return () => {
      window.removeEventListener("cart-updated", handleCartUpdate)
    }
  }, [])

  const handleQuantityChange = (id: number, quantity: number) => {
    updateCartItemQuantity(id, quantity)
  }

  const handleRemoveItem = (id: number) => {
    removeFromCart(id)
  }

  const subtotal = cartItems.reduce((total, item) => {
    return total + item.product.price * item.quantity
  }, 0)

  const shipping = subtotal > 0 ? 10 : 0
  const tax = subtotal * 0.1 // 10% tax
  const total = subtotal + shipping + tax

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p>Loading your cart...</p>
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="mb-6 text-3xl font-bold">Your Cart</h1>
        <p className="mb-8 text-muted-foreground">Your cart is currently empty.</p>
        <Link href="/collections/all">
          <Button className="rounded-full">Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-10 text-3xl font-bold">Your Cart</h1>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {/* Cart Items */}
          <div className="divide-y">
            {cartItems.map((item) => (
              <div key={item.id} className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-4">
                <div className="sm:col-span-1">
                  <Link href={`/products/${item.product.slug}`}>
                    <Image
                      src={item.product.image || "/placeholder.svg"}
                      alt={item.product.name}
                      width={200}
                      height={200}
                      className="rounded-md"
                    />
                  </Link>
                </div>
                <div className="sm:col-span-3">
                  <div className="flex justify-between">
                    <Link href={`/products/${item.product.slug}`}>
                      <h3 className="text-lg font-medium">{item.product.name}</h3>
                    </Link>
                    <p className="font-medium">${item.product.price}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <label htmlFor={`quantity-${item.id}`} className="mr-2 text-sm">
                        Qty:
                      </label>
                      <Input
                        id={`quantity-${item.id}`}
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, Number.parseInt(e.target.value))}
                        className="w-16"
                      />
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => handleRemoveItem(item.id)}>
                      <Trash2 className="mr-2 h-4 w-4" />
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          {/* Order Summary */}
          <div className="rounded-lg border p-6">
            <h2 className="mb-4 text-xl font-medium">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <Button className="mt-6 w-full rounded-full">Checkout</Button>
              <p className="text-center text-sm text-muted-foreground">
                or{" "}
                <Link href="/collections/all" className="underline">
                  Continue Shopping
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

