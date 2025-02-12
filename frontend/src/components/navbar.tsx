import Link from 'next/link'
import { TailwindResponsiveNavbar } from './responsiveNav'

export function Navbar() {
  return (
    <>
    {/* <nav className="bg-[#000080] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
        <img src="/../logo.jpg" className='w-[120px]' />
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav> */}
    <TailwindResponsiveNavbar />
    </>
  )
}

