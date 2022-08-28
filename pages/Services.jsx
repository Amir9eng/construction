import Image from 'next/image'
import React from 'react'
import SideBar from '../components/SideBar'
import DefaultLayout from '../layouts/Default'

const Services = () => {
  return (
    <DefaultLayout>
      <Image
        alt='portfolio'
        width={1440}
        height={569}
        src='/media/Services.png'
      />
      <div className='flex shadow justify-around px-10 py-4'>
        <p className='text-3xl font-bold mt-2'>Get a Quote For Your Project</p>
        <button className='border-2 border-yellow-500 px-6 py-3 text-yellow-500 font-semibold'>
          FREE QUOTE
        </button>
      </div>
      <section className='py-10 w-full flex justify-end'>
        <SideBar />
      </section>
      <section>
        <SideBar />
      </section>
      <section>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.1164444737738!2d4.556789814102137!3d8.488057699564983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103653d02955baab%3A0x853065ad7b6bd4ab!2sCodevillage%20Limited!5e0!3m2!1sen!2sng!4v1661606062456!5m2!1sen!2sng'
          width='1345'
          height='450'
          style={{ border: 0 }}
          allow='fullscreen'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </section>
    </DefaultLayout>
  )
}

export default Services
