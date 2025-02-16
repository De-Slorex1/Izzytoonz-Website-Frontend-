"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselProps = {
  orientation?: "horizontal" | "vertical"
}

const CarouselContext = React.createContext<any>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }
  return context
}

const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(
  ({ orientation = "horizontal", className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        loop: true,
        axis: orientation === "horizontal" ? "x" : "y",
        slidesToScroll: 3, // Scroll 3 items per slide
        align: "start", // Align items properly
        dragFree: false, // Snap to slides
      },
      [Autoplay({ delay: 3000, stopOnInteraction: false })] // Auto-slide every 3s
    )

    const scrollPrev = () => api?.scrollPrev()
    const scrollNext = () => api?.scrollNext()

    return (
      <CarouselContext.Provider value={{ carouselRef, scrollPrev, scrollNext }}>
        <div
          ref={ref}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef } = useCarousel()
    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div ref={ref} className={cn("flex", className)} {...props} />
      </div>
    )
  }
)
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn("min-w-0 shrink-0 grow-0 basis-1/3 px-2", className)} // Each item takes 1/3 of the container
        {...props}
      />
    )
  }
)
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, ...props }, ref) => {
    const { scrollPrev } = useCarousel()
    return (
      <Button ref={ref} onClick={scrollPrev} className={cn("absolute -left-12 top-1/2 -translate-y-1/2", className)} {...props}>
        <ArrowLeft className="h-4 w-4" />
      </Button>
    )
  }
)
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, ...props }, ref) => {
    const { scrollNext } = useCarousel()
    return (
      <Button ref={ref} onClick={scrollNext} className={cn("absolute -right-12 top-1/2 -translate-y-1/2", className)} {...props}>
        <ArrowRight className="h-4 w-4" />
      </Button>
    )
  }
)
CarouselNext.displayName = "CarouselNext"

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext }
