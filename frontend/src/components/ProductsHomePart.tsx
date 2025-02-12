import Link from "next/link"
import { Smartphone, Laptop, Headphones, Star } from "lucide-react"
import type React from "react" // Added import for React

const products = [
  {
    id: 1,
    title: "Cement",
    content: "High-quality cement for strong, durable constructions. Reliable delivery, every time",
    icon: Star,
    color: "bg-[#000080]",
    imgPath: "../../cement.jpg"
  },
  {
    id: 2,
    title: "Blocks",
    content: "Strong, reliable blocks for durable construction. Perfect for any building project",
    icon: Star,
    color: "bg-[#000080]",
    imgPath: "../../block.JPG"
  },
  {
    id: 3,
    title: "Granite",
    content: "Premium sand and granite for construction, ensuring a solid base for all your building needs",
    icon: Star,
    color: "bg-[#000080]",
    imgPath: "../../granite.jpg"
  },
]

export default function ProductsHomePart() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  )
}

function ProductCard({
  title,
  content,
  icon: Icon,
  color,
  imgPath
}: {
  title: string
  content: string
  icon: React.ElementType
  color: string
  imgPath: string
}) {
  return (
    <Link href={`/products`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">

        <div className={`p-4 ${color}`}>
            
            <img src={imgPath} alt={imgPath} />

            <Icon className="w-12 h-12 text-white" />

        </div>

        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-600 text-sm mb-4">{content}</p>
          <span className="text-sm font-medium text-blue-600 hover:text-blue-800">Learn More &rarr;</span>
        </div>
      </div>
    </Link>
  )
}

