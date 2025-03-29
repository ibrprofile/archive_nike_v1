import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, User, Search, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import FeaturedProducts from "@/components/featured-products"
import NewsletterSignup from "@/components/newsletter-signup"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top announcement bar */}
      <div className="bg-muted py-2 text-center text-sm">
        <p>Free shipping on orders over $50</p>
      </div>

      {/* Navigation - moved to a separate component */}
      <header className="border-b">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold">
              SPORTIFY
            </Link>
            <nav className="hidden md:flex">
              <ul className="flex space-x-8">
                <li>
                  <Link href="/collections/new-releases" className="font-medium hover:text-primary">
                    New Releases
                  </Link>
                </li>
                <li>
                  <Link href="/collections/men" className="font-medium hover:text-primary">
                    Men
                  </Link>
                </li>
                <li>
                  <Link href="/collections/women" className="font-medium hover:text-primary">
                    Women
                  </Link>
                </li>
                <li>
                  <Link href="/collections/kids" className="font-medium hover:text-primary">
                    Kids
                  </Link>
                </li>
                <li>
                  <Link href="/collections" className="font-medium hover:text-primary">
                    Collections
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/search">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </Link>
            <Link href="/account">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Cart</span>
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  0
                </span>
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero section */}
        <section className="relative">
          <div className="relative h-[70vh] w-full overflow-hidden">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Hero image of athletes"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-0 left-0 p-8 md:p-16">
              <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">JUST DO IT</h1>
              <p className="mb-6 max-w-md text-lg text-white">
                Your journey to greatness starts with a single step. Find your perfect gear today.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/collections/men">
                  <Button size="lg" className="rounded-full bg-white text-black hover:bg-gray-200">
                    Shop Men
                  </Button>
                </Link>
                <Link href="/collections/women">
                  <Button size="lg" className="rounded-full bg-white text-black hover:bg-gray-200">
                    Shop Women
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured collection - moved to a component */}
        <FeaturedProducts />

        {/* Two column feature */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=1000&width=800&text=Running"
                  alt="Running collection"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="mb-4 text-3xl font-bold text-white">Run Your Way</h3>
                  <Link href="/collections/running">
                    <Button className="rounded-full bg-white text-black hover:bg-gray-200">Shop Running</Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=1000&width=800&text=Basketball"
                  alt="Basketball collection"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="mb-4 text-3xl font-bold text-white">Elevate Your Game</h3>
                  <Link href="/collections/basketball">
                    <Button className="rounded-full bg-white text-black hover:bg-gray-200">Shop Basketball</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Membership section - moved to newsletter component */}
        <NewsletterSignup />
      </main>

      {/* Footer - moved to a separate component */}
      <footer className="bg-black py-16 text-white">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h4 className="mb-4 text-lg font-bold">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/collections/shoes" className="text-gray-400 hover:text-white">
                  Shoes
                </Link>
              </li>
              <li>
                <Link href="/collections/clothing" className="text-gray-400 hover:text-white">
                  Clothing
                </Link>
              </li>
              <li>
                <Link href="/collections/accessories" className="text-gray-400 hover:text-white">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/collections/new-releases" className="text-gray-400 hover:text-white">
                  New Releases
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-bold">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white">
                  Help
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-white">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-400 hover:text-white">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/order-status" className="text-gray-400 hover:text-white">
                  Order Status
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-bold">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-400 hover:text-white">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white">
                  News
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-bold">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link href="https://instagram.com" className="text-gray-400 hover:text-white">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" className="text-gray-400 hover:text-white">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://facebook.com" className="text-gray-400 hover:text-white">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://youtube.com" className="text-gray-400 hover:text-white">
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-16 px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Sportify, Inc. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

