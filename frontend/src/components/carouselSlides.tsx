import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function CarouselSlides() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Product Showcase</h1>

      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <img src="/../slide1.jpeg" alt="Product 1" className="h-64 w-[400px] object-cover rounded-lg" />
          </CarouselItem>
          <CarouselItem>
            <img src="/../slide2.jpeg" alt="Product 2" className="h-64 w-[400px] object-cover rounded-lg" />
          </CarouselItem>
          <CarouselItem>
            <img src="/../slide3.jpeg" alt="Product 3" className="h-64 w-[400px] object-cover rounded-lg" />
          </CarouselItem>
          <CarouselItem>
            <img src="/../slide4.jpeg" alt="Product 3" className="h-64 w-[400px] object-cover rounded-lg" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
