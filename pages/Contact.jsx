import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
import Accordion from '../components/Accordion'
import Nav from './../layouts/Nav'

const Contact = () => {
  return (
    <Nav>
      <Image
        alt='portfolio'
        width={1435}
        height={550}
        src='/media/Contact.png'
      />
      <div className='flex shadow justify-around px-10 py-4'>
        <aside>
          <p className='text-3xl text-yellow-500 font-bold mt-2'>
            Call: (541) 931-3526
          </p>
          <p className='text-xl font-bold'>
            We Can’t Wait to Make Your Ideas a Reality
          </p>
        </aside>
        <button className='border-4 border-yellow-500 px-2 text-yellow-500 font-semibold'>
          ONLINE ESTIMATE FORM
        </button>
      </div>
      <section className={`${styles.wrapper} px-24`}>
        <div className='w-[380px] py-12  mt-10'>
          <p className='text-3xl font-bold my-4 w-[239px] border-b-0 border-yellow-500'>
            Get In Touch
          </p>
          <div className='h-1 bg-yellow-500 w-[2rem] my-6'></div>
          <div>
            <input
              type='text'
              placeholder='Name'
              className='py-2 px-6 bg-white border-solid border-2'
            />
            <input
              type='text'
              placeholder='Email'
              className='py-2 px-6 bg-white border-white border-solid border-2 mt-4'
            />
            <textarea
              rows={6}
              // cols={60}
              className='bg-white w-full mt-4 resize-none p-2'
              placeholder='Message'
            ></textarea>
          </div>
          <button className='border-2 flex justify-items-end border-black px-6 py-2 mt-6'>
            SEND MESSAGE
          </button>
        </div>
        <Accordion />
      </section>
      <section className='my-8'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.1164444737738!2d4.556789814102137!3d8.488057699564983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103653d02955baab%3A0x853065ad7b6bd4ab!2sCodevillage%20Limited!5e0!3m2!1sen!2sng!4v1661606062456!5m2!1sen!2sng'
          width='1345'
          height='450'
          style={{ border: 0 }}
          allow='fullscreen'
          loading='eager'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </section>
    </Nav>
  )
}

export default Contact
