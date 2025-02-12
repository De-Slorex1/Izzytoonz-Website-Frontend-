'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const slides = [
  {
    title: "Izzytoonz Concepts Limited",
    description: "Your trusted partner for all your cement needs",
    rcNumber: "RC Number: 7476655",
    bgImage: "https://img.freepik.com/premium-photo/bags-dry-cement-interior-renovations-construction-large-bag-gray-dry-cement-mix-finishing-apartments_407474-51254.jpg?ga=GA1.1.340841201.1717685554&semt=ais_hybrid",
  },
  {
    title: "Izzytoonz Concepts Limited",
    description: "We provide durable materials for all your building projects",
    rcNumber: "RC Number: 7476655",
    bgImage: "https://img.freepik.com/free-photo/people-renovating-house-concept_53876-48892.jpg?ga=GA1.1.340841201.1717685554&semt=ais_hybrid"
  },
  {
    title: "Izzytoonz Concepts Limited",
    description: "Count on us for consistent delivery and top-notch service, every time.",
    rcNumber: "RC Number: 7476655",
    bgImage: "https://img.freepik.com/premium-photo/cement-powder-with-trowel-put-brick-construction-work_47021-8.jpg?ga=GA1.1.340841201.1717685554&semt=ais_hybrid",
  },
]

export default function CarouselLanding() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000) // Auto-advance every 5 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4 py-0">
              <p className='text-xl text-center border-4 mx-auto w-full flex justify-center items-center text-white py-3 border-white border-solid rounded-full font-bold md:max-w-[300px] md:text-md'>{slide.rcNumber}</p>
              <h1 className="text-4xl pt-4 text-white md:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg text-center md:text-2xl mb-8 italic">{slide.description}</p>
              
                <Link href="/products">
                    <Button size="lg">View Our Products</Button>
                </Link> 
              {/* <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-black transition-colors">
                Learn More
              </Button> */}
            </div>
          </div>
        </div>
      ))}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:text-black transition-colors"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:text-black transition-colors"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

