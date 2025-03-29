"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { addToCart } from "@/lib/cart-actions"
import { MinusIcon, PlusIcon } from "lucide-react"

interface AddToCartButtonProps {
  productId: number
  productName: string
}

export default function AddToCartButton({ productId, productName }: AddToCartButtonProps) {
  const { toast } = useToast()
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleAddToCart = () => {
    setIsAdding(true)

    // Simulate a delay for better UX
    setTimeout(() => {
      addToCart(productId, quantity)

      toast({
        title: "Added to cart",
        description: `${quantity} × ${productName} has been added to your cart.`,
      })

      setIsAdding(false)
    }, 500)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <Button variant="outline" size="icon" onClick={decreaseQuantity} disabled={quantity <= 1}>
          <MinusIcon className="h-4 w-4" />
        </Button>
        <span className="w-16 text-center">{quantity}</span>
        <Button variant="outline" size="icon" onClick={increaseQuantity}>
          <PlusIcon className="h-4 w-4" />
        </Button>
      </div>
      <Button className="w-full rounded-full" onClick={handleAddToCart} disabled={isAdding}>
        {isAdding ? "Adding..." : "Add to Cart"}
      </Button>
    </div>
  )
}

