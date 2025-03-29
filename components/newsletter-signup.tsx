"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export default function NewsletterSignup() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been added to our newsletter.",
      })
      setEmail("")
      setIsLoading(false)
    }, 1000)

    // In a real app, you would call an API
    // try {
    //   const response = await fetch('/api/newsletter', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email }),
    //   })
    //
    //   if (response.ok) {
    //     toast({
    //       title: "Success!",
    //       description: "You've been added to our newsletter.",
    //     })
    //     setEmail("")
    //   } else {
    //     throw new Error('Failed to subscribe')
    //   }
    // } catch (error) {
    //   toast({
    //     title: "Error",
    //     description: "Failed to subscribe. Please try again.",
    //     variant: "destructive",
    //   })
    // } finally {
    //   setIsLoading(false)
    // }
  }

  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold">JOIN OUR MEMBERSHIP</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Sign up for free and get access to exclusive products, events, and offers. Plus, enjoy free shipping on all
          orders.
        </p>
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading} className="rounded-full">
            {isLoading ? "Joining..." : "Join Now"}
          </Button>
        </form>
      </div>
    </section>
  )
}

