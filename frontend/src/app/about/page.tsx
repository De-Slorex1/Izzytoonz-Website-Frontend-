'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Phone } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

// You'll need to replace this with your actual Google Maps API key
const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY'

export default function AboutUsPage() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // const script = document.createElement('script')
    // script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initMap`
    // script.async = true
    // script.defer = true
    // document.head.appendChild(script)

    // window.initMap = () => {
    //   if (mapRef.current) {
    //     const map = new google.maps.Map(mapRef.current, {
    //       center: { lat: 40.7128, lng: -74.0060 }, // New York City coordinates
    //       zoom: 15,
    //     })

    //     new google.maps.Marker({
    //       position: { lat: 40.7128, lng: -74.0060 },
    //       map: map,
    //       title: 'Our Company'
    //     })
    //   }
    // }

    // return () => {
    //   window.initMap = undefined
    //   document.head.removeChild(script)
    // }
  }, [])

  
  const whatsappLink = `https://wa.me/2349026571474`;

  return (

    <>
      
      <Navbar />

      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-10">About Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Our Story</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
              Founded in 2021, our company has been at the top forefront to execute any contracting service that comes our way. Our warehouse is always stocked with the latest products, eg: cement, steel iron, blocks, granite, and sharp sand. We are passionate to render all our services to make differences in people’s live.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
              Our mission is to provide top quality cement, blocks, granite, sharp sand, and iron to our valued customers, while delivering exceptional customer service, building strong relationships, and driving business growth.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className='block md:flex justify-around'>

        <Card className='flex flex-col items-center'>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-center">Chief Executive Officer</CardTitle>
              <CardTitle className="text-2xl font-thin text-center">Odeniyi Israel Damilare</CardTitle>
            </CardHeader>
            <CardContent className='flex'>
               
              <img
                src={`../../../ceo.jpg`}
                alt={`${'role'} portrait`}
                className='rounded'
                // layout="fill"
                // objectFit="cover"
              />
              
            </CardContent>
        </Card>
        
        <Card className='flex flex-col items-center'>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-center">Post SENIOR STAFF</CardTitle>
              <CardTitle className="text-2xl font-thin text-center">Shuibu Aliu</CardTitle>
            </CardHeader>
            <CardContent className='flex'>
               
              <img
                src={`../../../ceo2.jpg`}
                alt={`${'role'} portrait`}
                className='rounded'
                // layout="fill"
                // objectFit="cover"
              />
              
            </CardContent>
        </Card>
        
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Our Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  We're located in the heart of New York City. Come visit us or get in touch:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-primary" />
                    <span>Erekiti gbenupo community surulere gbedoko</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="mr-2 h-5 w-5 text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="mr-2 h-5 w-5 text-primary" />
                    <span>info@ourcompany.com</span>
                  </li>
                </ul>
                
                <a
                  className="mt-3 w-full h-10 px-4 py-2 bg-[#000080] text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                  href={`${whatsappLink}`}
                >
                  Contact us
                </a>

                {/* <Button className="mt-4">Contact Us</Button> */}

              </div>
              <div ref={mapRef} className="h-[300px] w-full rounded-md overflow-hidden" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />

    </>
  )
}

