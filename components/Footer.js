import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col lg:flex-row bg-white my-8 w-full'>
      <div className='lg:pl-10 lg:pr-28 p-8 lg:w-[55%] bg-yellow-500 w-full'>
        <p className='text-2xl font-bold mt-6 mb-8'>Contact Us</p>
        <input
          type='text'
          placeholder='Name'
          className='py-2 px-6 bg-white border-solid'
        />
        <input
          type='text'
          placeholder='Email'
          className='py-2
        px-12
        bg-white
        border-solid lg:ml-10'
        />

        <textarea
          rows={6}
          // cols={60}
          className='bg-white w-full mt-4 resize-none p-2'
          placeholder='Message'
        ></textarea>
        <div className='flex justify-end'>
          <button className='text-white font-medium border-white my-4 border-2 px-5 py-1'>
            Send Message
          </button>
        </div>
      </div>
      <div className='w-2/4'>
        <div className='bg-black w-screen flex items-center justify-center gap-x-12 h-20'>
          {' '}
          <Image
            className=''
            width={11}
            height={20}
            alt='facebook'
            src='/vectors/Vector.svg'
          />
          <Image
            className=''
            width={22}
            height={17.94}
            alt='twitter'
            src='/vectors/twitter.svg'
          />
          <Image
            className=''
            width={24}
            height={24}
            alt='linkedin'
            src='/vectors/linkedin.svg'
          />
        </div>
        <div className='mx-16 my-10'>
          <div className='flex gap-x-4'>
            <Image
              width={13.03}
              height={19.46}
              alt='subtract'
              src='/vectors/Subtract.svg'
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='flex gap-x-2'>
            {' '}
            <Image
              className=''
              width={19.89}
              height={19.93}
              alt='phone'
              src='/vectors/phone.svg'
            />
            <p>+00 123 456 78</p>
          </div>
          <div className='flex gap-x-2'>
            <Image
              className=''
              width={24}
              height={24}
              alt='mail'
              src='/vectors/mail.svg'
            />
            <p>constructioninc@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
