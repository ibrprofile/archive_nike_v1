"use client"

// Types
export interface CartItem {
  id: number
  quantity: number
}

// Get cart from localStorage
export const getCart = (): CartItem[] => {
  if (typeof window === "undefined") return []

  const cart = localStorage.getItem("cart")
  return cart ? JSON.parse(cart) : []
}

// Add item to cart
export const addToCart = (productId: number, quantity = 1): void => {
  if (typeof window === "undefined") return

  const cart = getCart()
  const existingItemIndex = cart.findIndex((item) => item.id === productId)

  if (existingItemIndex >= 0) {
    // Update quantity if item exists
    cart[existingItemIndex].quantity += quantity
  } else {
    // Add new item
    cart.push({ id: productId, quantity })
  }

  localStorage.setItem("cart", JSON.stringify(cart))
  // Dispatch event for components to listen to cart changes
  window.dispatchEvent(new Event("cart-updated"))
}

// Remove item from cart
export const removeFromCart = (productId: number): void => {
  if (typeof window === "undefined") return

  let cart = getCart()
  cart = cart.filter((item) => item.id !== productId)

  localStorage.setItem("cart", JSON.stringify(cart))
  window.dispatchEvent(new Event("cart-updated"))
}

// Update item quantity
export const updateCartItemQuantity = (productId: number, quantity: number): void => {
  if (typeof window === "undefined") return

  const cart = getCart()
  const existingItemIndex = cart.findIndex((item) => item.id === productId)

  if (existingItemIndex >= 0) {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      cart[existingItemIndex].quantity = quantity
      localStorage.setItem("cart", JSON.stringify(cart))
      window.dispatchEvent(new Event("cart-updated"))
    }
  }
}

// Clear cart
export const clearCart = (): void => {
  if (typeof window === "undefined") return

  localStorage.setItem("cart", JSON.stringify([]))
  window.dispatchEvent(new Event("cart-updated"))
}

// Get cart total items
export const getCartItemsCount = (): number => {
  const cart = getCart()
  return cart.reduce((total, item) => total + item.quantity, 0)
}

