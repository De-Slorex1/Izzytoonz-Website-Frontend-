"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface CheckoutFormProps {
  product: {
    id: string
    name: string
    price: number
  }
  quantity: number
  total: number
}

export function CheckoutForm({ product, quantity, total }: CheckoutFormProps) {
  const [processing, setProcessing] = useState(false)
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setProcessing(true)

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))

    setProcessing(false)
    router.push('/thank-you')
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" required />
          </div>
          <div>
            <Label htmlFor="card">Card Number</Label>
            <Input id="card" placeholder="1234 5678 9012 3456" required />
          </div>
          <div className="flex justify-between">
            <div className="w-1/2 pr-2">
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input id="expiry" placeholder="MM/YY" required />
            </div>
            <div className="w-1/2 pl-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input id="cvc" placeholder="123" required />
            </div>
          </div>
          <div>
            <p>Quantity: {quantity}</p>
            <p className="font-bold">Total: ₦{(total)}</p>
            {/* <p className="font-bold">Total: ₦{(total / 100).toFixed(2)}</p> */}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={processing}>
            {processing ? "Processing..." : "Pay Now"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

