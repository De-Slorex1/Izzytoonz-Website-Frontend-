'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
// import { useToast } from "@/components/ui/use-toast"

export default function SubscribeSection() {
  const [email, setEmail] = useState('')
//   const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the email to your server
    console.log('Subscribing email:', email)
    // toast({
    //   title: "Subscribed!",
    //   description: "Thank you for subscribing to our newsletter.",
    // })
    setEmail('')
  }

  return (
    <section className="py-3">
      <div className="px-4">
        <div className="max-w-2xl text-left">
          <h2 className="text-lg font-bold mb-4">STAY UPDATED</h2>
          <p className="font-thin text-md leading-[1.5rem] text-[#949494]">
            Subscribe to our newsletter for the latest news and exclusive content.
          </p>
          <form onSubmit={handleSubmit} className="my-4 sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow bg-primary-foreground text-primary"
            />
            <Button className='my-3 bg-[#000080] text-white' type="submit" variant="secondary">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

