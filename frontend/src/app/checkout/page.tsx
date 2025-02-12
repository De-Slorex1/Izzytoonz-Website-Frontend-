'use client'

import { CheckoutForm } from "@/components/checkout-form"
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { useSearchParams } from 'next/navigation';
import { Suspense } from "react";
// import { GetServerSideProps } from "next";

const products = [
  { id: '1', name: 'Cement', description: 'High-quality cement for all your construction needs. Ideal for building strong foundations and structures.', price: 10200, image: '../../../cement.jpg' },
  { id: '2', name: 'Sharp sand chaina motor', description: 'Fast-setting cement for urgent projects. Perfect for quick repairs and small-scale construction.', price: 200000, image: '../../../sand.jpg' },
  { id: '3', name: 'Steel Iron 10 mm per lent', description: 'Durable steel iron rods, 10 mm in diameter, ideal for reinforcing concrete structures.', price: 5500, image: 'https://img.freepik.com/free-photo/rough-metallic-surface-texture_23-2148953938.jpg?ga=GA1.1.340841201.1717685554&semt=ais_hybrid' },
  { id: '4', name: 'Block 6 inches', description: 'Sturdy 6-inch concrete blocks, perfect for building walls and other structures.', price: 600, image: '../../../block.jpg' },
  { id: '5', name: 'Granite 30 tons', description: 'High-quality granite, available in 30-ton loads, suitable for large construction projects.', price: 1500000, image: '../../../granite.jpg' },
  { id: '6', name: 'Granite 15 tons', description: 'High-quality granite, available in 15-ton loads, suitable for medium-sized construction projects.', price: 750000, image: 'https://img.freepik.com/free-photo/closeup-marble-textured-background_53876-18212.jpg?ga=GA1.1.340841201.1717685554&semt=ais_hybrid' },
  { id: '7', name: 'Block 9 inches', description: 'Sturdy 9-inch concrete blocks, perfect for building walls and other structures.', price: 800, image: 'https://img.freepik.com/premium-photo/cement-solid-brick-block-white-background_51524-17653.jpg?ga=GA1.1.340841201.1717685554&semt=ais_hybrid' },
]


// interface PageProps {
//   searchParams: {
//     productId: string;
//     quantity: string;
//   };
// }


const CheckoutPage: React.FC = () => {
  // const searchParams = useSearchParams();
  const searchParams = useSearchParams();
  const productId = searchParams.get('productId');
  const quantity = searchParams.get('quantity') || '1';
  // const { productId, quantity } = searchParams;
  const product = products.find(p => p.id === productId)
  const quantityy = parseInt(quantity) || 1

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>
  }

  const total = product.price * quantityy

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <CheckoutForm product={product} quantity={quantityy} total={total} />
    </div>
  )
}


const CheckoutPageWrapper: React.FC = () => (
  
  <>

  <Navbar />

    <main className="flex-grow">

    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutPage />
    </Suspense>
    
    </main>

  <Footer />

  </>
);



export default CheckoutPageWrapper;