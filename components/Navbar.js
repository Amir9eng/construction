import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar () {
  return (
    <nav className='flex justify-between my-8 font-medium px-6'>
      <Link href='/'>Construction Company</Link>
      <div className='flex gap-x-6 text-sm'>
        <Link href='/Projects'>Project</Link>
        <p>Blog</p>
        <p>Portfolio</p>
        <p>Service</p>
        <p>Services</p>
        <p>Contact</p>
        <p>About</p>
        <p>Home</p>
        <Image
          className=''
          width={24}
          height={24}
          alt='cart'
          src='/media/cart3.svg'
        />
      </div>
    </nav>
  )
}
