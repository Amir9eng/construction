import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar () {
  return (
    <nav className=' lg:flex-row lg:justify-between my-8 font-medium hidden px-6 lg:flex'>
      <Link href='/'>Construction Company</Link>
      <div className='flex gap-x-6 text-sm'>
        <Link href='/Projects'>Project</Link>
        <Link href='/Blog'>Blog</Link>
        <Link href='/Portfolio'>Portfolio</Link>
        <Link href='/Service'>Service</Link>
        <Link href='/Services'>Services</Link>
        <Link href='/Contact'>Contact</Link>
        <Link href='/About'>About</Link>
        <Link href='/Home'>Home</Link>
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
