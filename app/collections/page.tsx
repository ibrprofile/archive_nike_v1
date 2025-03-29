import Image from "next/image"
import Link from "next/link"

// Collection categories
const COLLECTIONS = [
  {
    id: "men",
    title: "Men's Collection",
    description: "Performance gear designed for men who push boundaries.",
    image: "/placeholder.svg?height=600&width=800&text=Men's Collection",
  },
  {
    id: "women",
    title: "Women's Collection",
    description: "Stylish and functional sportswear for women who demand the best.",
    image: "/placeholder.svg?height=600&width=800&text=Women's Collection",
  },
  {
    id: "kids",
    title: "Kids' Collection",
    description: "Durable and comfortable gear for active kids.",
    image: "/placeholder.svg?height=600&width=800&text=Kids' Collection",
  },
  {
    id: "shoes",
    title: "Footwear",
    description: "Innovative shoes designed for performance and style.",
    image: "/placeholder.svg?height=600&width=800&text=Footwear",
  },
  {
    id: "clothing",
    title: "Clothing",
    description: "Apparel that combines comfort, style, and functionality.",
    image: "/placeholder.svg?height=600&width=800&text=Clothing",
  },
  {
    id: "new-releases",
    title: "New Releases",
    description: "The latest and greatest products fresh off the production line.",
    image: "/placeholder.svg?height=600&width=800&text=New Releases",
  },
  {
    id: "running",
    title: "Running Collection",
    description: "Specialized gear for runners of all levels.",
    image: "/placeholder.svg?height=600&width=800&text=Running",
  },
  {
    id: "basketball",
    title: "Basketball Collection",
    description: "Elevate your game with our basketball shoes and apparel.",
    image: "/placeholder.svg?height=600&width=800&text=Basketball",
  },
]

export default function CollectionsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Collections</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Browse our collections and find the perfect gear for your sport and style.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {COLLECTIONS.map((collection) => (
          <Link
            key={collection.id}
            href={`/collections/${collection.id}`}
            className="group overflow-hidden rounded-lg border"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={collection.image || "/placeholder.svg"}
                alt={collection.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="mb-2 text-2xl font-bold text-white">{collection.title}</h2>
                <p className="text-sm text-white/80">{collection.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

