"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MinusIcon, PlusIcon } from 'lucide-react'
import { useRouter } from "next/navigation"

interface ProductCardProps {
  product: {
    id: string
    name: string
    description: string
    price: number
    image: string
  }
}

export function ProductCard({ product }: ProductCardProps) {

const router = useRouter()
  const [quantity, setQuantity] = useState(1)

  const increaseQuantity = () => setQuantity(prev => prev + 1)
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1))

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product.name}(s) to cart`)
    router.push(`/checkout/?productId=${product.id}&quantity=${quantity}`)
    // Here you would typically update a cart state or send a request to your backend
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
        <p className="mb-2">{product.description}</p>
        {/* <p className="font-bold">₦{(product.price / 100).toFixed(2)}</p> */}
        <p className="font-bold">₦{(product.price).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-center space-y-2">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={decreaseQuantity}>
            <MinusIcon className="h-4 w-4" />
          </Button>
          <span className="w-8 text-center">{quantity}</span>
          <Button variant="outline" size="icon" onClick={increaseQuantity}>
            <PlusIcon className="h-4 w-4" />
          </Button>
        </div>
        <Button className="w-full" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

