import Link from 'next/link'
import { Button } from "@/components/ui/button"
import TestimonialSection from '@/components/testimonial-section';
import AboutUsSection from '@/components/about-us-section';
import CarouselLanding from '@/components/CarouselLanding';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import ProductsHomePart from '@/components/ProductsHomePart';

export default function Home() {
  return (
      <>
          <Navbar />
          <main className="flex-grow">
                      
          <div className="container mx-auto text-center">

            <CarouselLanding />
            {/* <h1 className="text-5xl font-bold mb-6">Izzytoonz Concepts Limited</h1>
            <p className="text-xl mb-8">Your trusted partner for all your cement needs</p>
            <Link href="/products">
              <Button size="lg">View Our Products</Button>
            </Link> */}
            {/* <AboutUsSection /> */}
            <ProductsHomePart />
            <TestimonialSection />

          </div>
          
          </main>
          <Footer />
                    
      </>
  );
}
