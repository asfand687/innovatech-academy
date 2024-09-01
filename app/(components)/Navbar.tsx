import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="w-full max-w-7xl mx-auto relative inset-x-0 top-0 z-10">
      <div className="px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0 mr-8">
            <Link
              href="/"
              className='flex items-center gap-2'
            >
              <Image
                className="w-auto h-8"
                src="/logo.svg"
                alt=""
                width={32}
                height={32}
              />
              <h2 className='text-white font-bold uppercase'>InnovaTech Academy</h2>
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
            <Link href="#" title="" legacyBehavior>
              <a className="text-base text-white transition-all duration-200 hover:text-opacity-80">Home</a>
            </Link>
            <Link href="#" title="" legacyBehavior>
              <a className="text-base text-white transition-all duration-200 hover:text-opacity-80">Courses</a>
            </Link>
            <Link href="/verification" title="" legacyBehavior>
              <a className="text-base text-white transition-all duration-200 hover:text-opacity-80">Verification</a>
            </Link>
            <Link href="#" title="" legacyBehavior>
              <a className="text-base text-white transition-all duration-200 hover:text-opacity-80">Pricing</a>
            </Link>
          </div>

          <button type="button" className="inline-flex p-2 ml-1 text-white transition-all duration-200 rounded-md sm:ml-4 lg:hidden focus:bg-gray-800 hover:bg-gray-800">
            {/* Menu open: "hidden", Menu closed: "block" */}
            <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>

            {/* Menu open: "block", Menu closed: "hidden" */}
            <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar