import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight } from "lucide-react"
import AddToCartButton from "@/components/add-to-cart-button"
import ProductGallery from "@/components/product-gallery"
import RelatedProducts from "@/components/related-products"

// Mock product database
const products = [
  {
    id: 1,
    name: "Air Max 2024",
    slug: "air-max-2024",
    category: "Men's Shoes",
    price: 130,
    description:
      "The Nike Air Max 2024 brings back the wavy design lines of the original with a breathable upper that combines airy mesh and rich textiles for a layered look. The Nike Air cushioning adds comfort to your journey while the padded, low-cut collar looks sleek and feels great.",
    features: [
      "Mesh and textile upper provides breathable comfort",
      "Max Air unit provides cushioning",
      "Foam midsole adds responsive cushioning",
      "Rubber outsole delivers traction and durability",
      "Padded, low-cut collar looks sleek and feels comfortable",
    ],
    colors: ["Black/White", "White/Red", "Blue/Grey"],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    images: [
      "/placeholder.svg?height=600&width=600&text=Product 1",
      "/placeholder.svg?height=600&width=600&text=Side View",
      "/placeholder.svg?height=600&width=600&text=Back View",
      "/placeholder.svg?height=600&width=600&text=Top View",
    ],
  },
  {
    id: 2,
    name: "Air Max 2025",
    slug: "air-max-2025",
    category: "Men's Shoes",
    price: 140,
    description:
      "The Nike Air Max 2025 updates the wavy design lines of the original with a breathable upper that combines airy mesh and rich textiles for a layered look. The Nike Air cushioning adds comfort to your journey while the padded, low-cut collar looks sleek and feels great.",
    features: [
      "Mesh and textile upper provides breathable comfort",
      "Max Air unit provides cushioning",
      "Foam midsole adds responsive cushioning",
      "Rubber outsole delivers traction and durability",
      "Padded, low-cut collar looks sleek and feels comfortable",
    ],
    colors: ["Black/White", "White/Red", "Blue/Grey"],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    images: [
      "/placeholder.svg?height=600&width=600&text=Product 2",
      "/placeholder.svg?height=600&width=600&text=Side View",
      "/placeholder.svg?height=600&width=600&text=Back View",
      "/placeholder.svg?height=600&width=600&text=Top View",
    ],
  },
  {
    id: 3,
    name: "Air Max 2026",
    slug: "air-max-2026",
    category: "Men's Shoes",
    price: 150,
    description:
      "The Nike Air Max 2026 updates the wavy design lines of the original with a breathable upper that combines airy mesh and rich textiles for a layered look. The Nike Air cushioning adds comfort to your journey while the padded, low-cut collar looks sleek and feels great.",
    features: [
      "Mesh and textile upper provides breathable comfort",
      "Max Air unit provides cushioning",
      "Foam midsole adds responsive cushioning",
      "Rubber outsole delivers traction and durability",
      "Padded, low-cut collar looks sleek and feels comfortable",
    ],
    colors: ["Black/White", "White/Red", "Blue/Grey"],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    images: [
      "/placeholder.svg?height=600&width=600&text=Product 3",
      "/placeholder.svg?height=600&width=600&text=Side View",
      "/placeholder.svg?height=600&width=600&text=Back View",
      "/placeholder.svg?height=600&width=600&text=Top View",
    ],
  },
  {
    id: 4,
    name: "Air Max 2027",
    slug: "air-max-2027",
    category: "Men's Shoes",
    price: 160,
    description:
      "The Nike Air Max 2027 updates the wavy design lines of the original with a breathable upper that combines airy mesh and rich textiles for a layered look. The Nike Air cushioning adds comfort to your journey while the padded, low-cut collar looks sleek and feels great.",
    features: [
      "Mesh and textile upper provides breathable comfort",
      "Max Air unit provides cushioning",
      "Foam midsole adds responsive cushioning",
      "Rubber outsole delivers traction and durability",
      "Padded, low-cut collar looks sleek and feels comfortable",
    ],
    colors: ["Black/White", "White/Red", "Blue/Grey"],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    images: [
      "/placeholder.svg?height=600&width=600&text=Product 4",
      "/placeholder.svg?height=600&width=600&text=Side View",
      "/placeholder.svg?height=600&width=600&text=Back View",
      "/placeholder.svg?height=600&width=600&text=Top View",
    ],
  },
]

export default function ProductPage({ params }: { params: { slug: string } }) {
  // Find product by slug
  const product = products.find((p) => p.slug === params.slug)

  // If product not found, return 404
  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="mb-8 flex items-center text-sm">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="mx-2 h-4 w-4 text-muted-foreground" />
        <Link href="/collections/all" className="text-muted-foreground hover:text-foreground">
          Products
        </Link>
        <ChevronRight className="mx-2 h-4 w-4 text-muted-foreground" />
        <span>{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Product Gallery */}
        <ProductGallery images={product.images} productName={product.name} />

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-2 text-muted-foreground">{product.category}</p>
          <p className="mt-4 text-2xl font-medium">${product.price}</p>

          {/* Color Selection */}
          <div className="mt-8">
            <h3 className="mb-3 text-sm font-medium">Color</h3>
            <div className="flex gap-2">
              {product.colors.map((color, index) => (
                <button key={index} className="rounded-full border p-2 text-sm hover:border-primary">
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mt-8">
            <h3 className="mb-3 text-sm font-medium">Size</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="flex h-10 w-16 items-center justify-center rounded-md border hover:border-primary"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <div className="mt-8">
            <AddToCartButton productId={product.id} productName={product.name} />
          </div>

          {/* Product Description */}
          <div className="mt-12">
            <h3 className="mb-4 text-xl font-medium">Description</h3>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          {/* Product Features */}
          <div className="mt-8">
            <h3 className="mb-4 text-xl font-medium">Features</h3>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts currentProductId={product.id} />
    </div>
  )
}

