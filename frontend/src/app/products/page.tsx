import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ProductCard } from "@/components/product-card"
import Link from "next/link"

const categories = [
  {
    name: 'Cement',
    image: '/placeholder.svg?height=100&width=100',
    products: [
      { id: '1', name: 'Cement', description: 'High-quality cement for all your construction needs. Ideal for building strong foundations and structures.', price: 10200, image: '../../../cement.jpg' },
    ],
  },
  {
    name: 'Blocks',
    image: '/placeholder.svg?height=100&width=100',
    products: [
      { id: '4', name: 'Block 6 inches', description: 'Sturdy 6-inch concrete blocks, perfect for building walls and other structures.', price: 600, image: '../../../block.JPG' },
      { id: '7', name: 'Block 9 inches', description: 'Sturdy 9-inch concrete blocks, perfect for building walls and other structures.', price: 800, image: '../../../block.JPG' },
    ],
  },
  {
    name: 'Granite',
    image: '/placeholder.svg?height=100&width=100',
    products: [
      { id: '5', name: 'Granite 30 tons', description: 'High-quality granite, available in 30-ton loads, suitable for large construction projects.', price: 1500000, image: '../../../granite.jpg' },
      { id: '6', name: 'Granite 15 tons', description: 'High-quality granite, available in 15-ton loads, suitable for medium-sized construction projects.', price: 750000, image: '../../../granite.jpg' },
    ],
  },
  {
    name: 'Sharp Sand',
    image: '/placeholder.svg?height=100&width=100',
    products: [
      { id: '2', name: 'Sharp sand chaina motor', description: 'Fast-setting cement for urgent projects. Perfect for quick repairs and small-scale construction.', price: 200000, image: '../../../sand.jpg' },
      { id: '3', name: 'Steel Iron 10 mm per lent', description: 'Durable steel iron rods, 10 mm in diameter, ideal for reinforcing concrete structures.', price: 5500, image: 'https://img.freepik.com/free-photo/rough-metallic-surface-texture_23-2148953938.jpg?ga=GA1.1.340841201.1717685554&semt=ais_hybrid' },
    ],
  },
]

// const products = [
//   { id: '1', name: 'Cement', description: 'High-quality cement for all your construction needs. Ideal for building strong foundations and structures.', price: 10200, image: 'https://img.freepik.com/premium-photo/3d-realistic-model-cement-bag-perfect-construction-industry-building-projects_1142-225759.jpg?ga=GA1.1.340841201.1717685554&semt=ais_hybrid' },
//   { id: '2', name: 'Sharp sand chaina motor', description: 'Fast-setting cement for urgent projects. Perfect for quick repairs and small-scale construction.', price: 200000, image: 'https://img.freepik.com/free-photo/beach-sand-texture_64049-270.jpg?ga=GA1.1.340841201.1717685554&semt=ais_hybrid' },
//   { id: '3', name: 'Steel Iron 10 mm per lent', description: 'Durable steel iron rods, 10 mm in diameter, ideal for reinforcing concrete structures.', price: 5500, image: 'https://img.freepik.com/free-photo/rough-metallic-surface-texture_23-2148953938.jpg?ga=GA1.1.340841201.1717685554&semt=ais_hybrid' },
//   { id: '4', name: 'Block 6 inches', description: 'Sturdy 6-inch concrete blocks, perfect for building walls and other structures.', price: 600, image: 'https://img.freepik.com/premium-photo/cement-solid-brick-block-white-background_51524-17653.jpg?ga=GA1.1.340841201.1717685554&semt=ais_hybrid' },
//   { id: '7', name: 'Block 9 inches', description: 'Sturdy 9-inch concrete blocks, perfect for building walls and other structures.', price: 800, image: 'https://img.freepik.com/premium-photo/cement-solid-brick-block-white-background_51524-17653.jpg?ga=GA1.1.340841201.1717685554&semt=ais_hybrid' },
//   { id: '5', name: 'Granite 30 tons', description: 'High-quality granite, available in 30-ton loads, suitable for large construction projects.', price: 1500000, image: 'https://img.freepik.com/free-photo/granite-rock-surface_23-2148978394.jpg?ga=GA1.1.340841201.1717685554&semt=ais_hybrid' },
//   { id: '6', name: 'Granite 15 tons', description: 'High-quality granite, available in 15-ton loads, suitable for medium-sized construction projects.', price: 750000, image: 'https://img.freepik.com/free-photo/closeup-marble-textured-background_53876-18212.jpg?ga=GA1.1.340841201.1717685554&semt=ais_hybrid' },
// ]

export default function ProductsPage() {
  return (

    <>

      <Navbar />

        {categories.map((category) => (
         <section key={category.name} className="mb-12 mt-12 px-5 md:px-10">

           <div className="flex items-center justify-between mb-8 bg-[#f2f2f2] py-1">
            <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-[#000080] pl-4">
              {category.name}
            </h2>
            {/* <Link
              // href={`/category/${category.name.toLowerCase().replace(' & ', '-')}`}
              href="#"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              View All
            </Link> */}
          </div>



           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {category.products.map((product:any) => (
              
              <ProductCard key={product.id} product={product} />
              //  <div key={product.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              //    <img
              //      src={product.image}
              //      alt={product.name}
              //      width={200}
              //      height={200}
              //      className="w-full h-48 object-cover"
              //    />
              //    <div className="p-4">
              //      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              //      <p className="text-gray-600">${product.price.toFixed(2)}</p>
              //      <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
              //        Add to Cart
              //      </button>
              //    </div>
              //  </div>
             ))}
           </div>
         </section>
       ))}





        {/* <main className="flex-grow">

          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Our Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
      
        </main> */}
        
      <Footer />
    </>
    
  )
}


// import Image from 'next/image'
// import Link from 'next/link'

// const categories = [
//   {
//     name: 'Electronics',
//     image: '/placeholder.svg?height=100&width=100',
//     products: [
//       { name: 'Wireless Earbuds', price: 79.99, image: '/placeholder.svg?height=200&width=200' },
//       { name: 'Smart Watch', price: 199.99, image: '/placeholder.svg?height=200&width=200' },
//       { name: 'Laptop', price: 999.99, image: '/placeholder.svg?height=200&width=200' },
//       { name: 'Smartphone', price: 699.99, image: '/placeholder.svg?height=200&width=200' },
//     ],
//   },
//   {
//     name: 'Clothing',
//     image: '/placeholder.svg?height=100&width=100',
//     products: [
//       { name: 'T-Shirt', price: 19.99, image: '/placeholder.svg?height=200&width=200' },
//       { name: 'Jeans', price: 49.99, image: '/placeholder.svg?height=200&width=200' },
//       { name: 'Sneakers', price: 89.99, image: '/placeholder.svg?height=200&width=200' },
//       { name: 'Hoodie', price: 39.99, image: '/placeholder.svg?height=200&width=200' },
//     ],
//   },
//   {
//     name: 'Home & Garden',
//     image: '/placeholder.svg?height=100&width=100',
//     products: [
//       { name: 'Plant Pot', price: 14.99, image: '/placeholder.svg?height=200&width=200' },
//       { name: 'Table Lamp', price: 29.99, image: '/placeholder.svg?height=200&width=200' },
//       { name: 'Throw Pillow', price: 24.99, image: '/placeholder.svg?height=200&width=200' },
//       { name: 'Wall Clock', price: 34.99, image: '/placeholder.svg?height=200&width=200' },
//     ],
//   },
// ]

// export default function MarketplaceSection() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <section className="mb-12">
//         <h2 className="text-3xl font-bold mb-6">Featured Categories</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {categories.map((category) => (
//             <Link
//               key={category.name}
//               href={`/category/${category.name.toLowerCase().replace(' & ', '-')}`}
//               className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
//             >
//               <div className="p-4 flex flex-col items-center">
//                 <Image
//                   src={category.image}
//                   alt={category.name}
//                   width={100}
//                   height={100}
//                   className="mb-2"
//                 />
//                 <span className="text-center font-medium">{category.name}</span>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {categories.map((category) => (
//         <section key={category.name} className="mb-12">
//           <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {category.products.map((product) => (
//               <div key={product.name} className="bg-white rounded-lg shadow-md overflow-hidden">
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   width={200}
//                   height={200}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
//                   <p className="text-gray-600">${product.price.toFixed(2)}</p>
//                   <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       ))}
//     </div>
//   )
// }



