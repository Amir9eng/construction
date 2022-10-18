import Image from 'next/image'
import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: '/media/port1.png',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum.'
    },
    {
      id: 2,
      image: '/media/port2.png',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum.'
    },
    {
      id: 3,
      image: '/media/port3.png',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum.'
    },
    {
      id: 4,
      image: '/media/port4.png',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum.'
    },
    {
      id: 5,
      image: '/media/port5.png',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum.'
    },
    {
      id: 6,
      image: '/media/port6.png',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum.'
    },
    {
      id: 7,
      image: '/media/port7.png',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum.'
    },
    {
      id: 8,
      image: '/media/port8.png',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum.'
    },
    {
      id: 9,
      image: '/media/port9.png',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum.'
    }
  ]

  return (
    <main>
      <Navbar />
      <Image
        alt='portfolio'
        width={1440}
        height={569}
        src='/media/Portfolio.png'
      />
      <div className='flex flex-wrap justify-center gap-x-8 gap-y-8 px-24 mt-12'>
        {data.map((data, i) => {
          return (
            <Card
              key={i}
              service={'Service Title'}
              image={data.image}
              paragraph={data.paragraph}
            ></Card>
          )
        })}
      </div>
      <footer className='my-8 bg-yellow-500'>
        <p className='text-center text-3xl font-bold'>
          Have a Project in Mind?
        </p>
        <p className='text-center text-3xl font-bold mt-2'>
          Let&apos;s get Building
        </p>
        <aside className='flex mt-12'>
          {' '}
          <div className='pl-10 pr-28 w-[55%] bg-yellow-500 '>
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
        px-6
        bg-white
        border-solid ml-10'
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
          <div className='w-2/4 bg-white'>
            <div className='bg-black w-full flex items-center justify-center gap-x-12 h-20'>
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
        </aside>
      </footer>
    </main>
  )
}

export default Portfolio
