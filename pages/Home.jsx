import React from 'react'
import DefaultLayout from './../layouts/Default'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Title from './../components/Title'

const Home = () => {
  return (
    <DefaultLayout>
      <main className='bg-gray-200'>
        <section className={`${styles.home} relative w-full`}>
          <div className='w-full mx-auto text-white absolute top-[25%] text-center py-8'>
            <div className='h-2 bg-yellow-500 w-[3rem] my-4  mx-auto'></div>
            <p className='text-6xl font-bold tracking-wide my-4'>
              Construction Inc
            </p>
            <p className=''>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              lectus erat <br /> consectetur eu sapien eget, rhoncus consectetur
              sem.
            </p>
            <button className=' bg-yellow-600 text-sm px-6 py-3 mt-6 font-bold'>
              VIEW OUR WORK
            </button>
          </div>
        </section>
        <div className='px-28 py-6'>
          <div className='text-gray-600 flex gap-x-6'>
            <div className='flex gap-x-2 my-4'>
              <Image
                width={54.04}
                height={51.5}
                alt='subtract'
                src='/vectors/structure.svg'
              />
              <div>
                <h2 className='font-bold text-black'>Building Construction</h2>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className='flex gap-x-2 my-4'>
              <Image
                width={54.04}
                height={51.5}
                alt='subtract'
                src='/vectors/spoon.svg'
              />
              <div>
                <h2 className='font-bold text-black'>Building Construction</h2>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className='flex gap-x-2 my-4'>
              <Image
                width={54.04}
                height={51.5}
                alt='subtract'
                src='/vectors/crane.svg'
              />
              <div>
                <h2 className='font-bold text-black'>Building Construction</h2>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='px-28 mt-4'>
          <div className='text-gray-600 flex gap-x-6'>
            <div className='flex gap-x-2 my-4'>
              <Image
                width={54.04}
                height={51.5}
                alt='subtract'
                src='/vectors/block.svg'
              />
              <div>
                <h2 className='font-bold text-black'>Building Construction</h2>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className='flex gap-x-2 my-4'>
              <Image
                width={54.04}
                height={51.5}
                alt='subtract'
                src='/vectors/painting.svg'
              />
              <div>
                <h2 className='font-bold text-black'>Building Construction</h2>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className='flex gap-x-2 my-4'>
              <Image
                width={54.04}
                height={51.5}
                alt='subtract'
                src='/vectors/bridge.svg'
              />
              <div>
                <h2 className='font-bold text-black'>Building Construction</h2>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.project} mt-8`}>
          <div className='w-[524px] text-black py-8 px-8 bg-yellow-500'>
            <div className='flex gap-x-4'>
              <aside className=''>
                <Image
                  alt='portfolio'
                  width={38}
                  height={34.09}
                  src='/vectors/arrow-white.svg'
                />
              </aside>
              <aside>
                <p className='font-bold'>Eco Friendly Construction</p>
                <p className='my-2 leading-[27px] w-[200px]'>
                  Donec sollicitudin molestie malesuada. Praesent sapien massa,
                  convallis a pellentesque nec, egestas non nisi.
                </p>
              </aside>
            </div>
            <div className='flex gap-x-4'>
              <aside>
                <Image
                  alt='portfolio'
                  width={38}
                  height={34.09}
                  src='/vectors/arrow-white.svg'
                />
              </aside>
              <aside>
                <p className='font-bold'>The Newest Technology Repairs</p>
                <p className='my-2 leading-[27px] w-[200px]'>
                  Donec sollicitudin molestie malesuada. Praesent sapien massa,
                  convallis a pellentesque nec, egestas non nisi.
                </p>
              </aside>
            </div>
            <div className='flex gap-x-4'>
              <aside>
                <Image
                  alt='portfolio'
                  width={38}
                  height={34.09}
                  src='/vectors/arrow-white.svg'
                />
              </aside>
              <aside>
                <p className='font-bold'>
                  High Quality Construction Management
                </p>
                <p className='my-2 leading-[27px] w-[200px]'>
                  Donec sollicitudin molestie malesuada. Praesent sapien massa,
                  convallis a pellentesque nec, egestas non nisi.
                </p>
              </aside>
            </div>
            <div className='flex w-full justify-end'>
              <button className='px-8 py-2 border-yellow-500 border-2 mt-3 text-yellow-500'>
                FREE QUOTE
              </button>
            </div>
          </div>
          <div className='bg-gray-100'>
            <div className='flex'>
              <div className='py-6 px-10'>
                <p className='text-3xl font-bold my-4 ml-8'>
                  No Project Too Big Or Too Small
                </p>
                <div className='h-1 bg-yellow-500 w-[3rem] my-6 ml-8'></div>

                <p className='block text-gray-400 w-3/5 leading-7 ml-8 my-10 '>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapien, dignissim tristique tellus sed faucibus nullam.
                  Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque
                  lorem posuere iaculis nunc amet phasellus. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Sapien, dignissim
                  tristique tellus sed faucibus nullam.
                </p>
              </div>
              <div>
                <p className='block text-gray-400 leading-7 mt-36 mr-12'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapien, dignissim tristique tellus sed faucibus nullam.
                  Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque
                  lorem posuere iaculis nunc amet phasellus.
                </p>
                <button className='mt-6 border-black border-2 py-2 px-4'>
                  Learn More
                </button>
              </div>
            </div>
            <div className='w-full flex justify-around align-center mt-20 py-6 bg-black'>
              <p className='text-white font-bold mt-3 text-2xl'>
                Get Free Consultation
              </p>
              <button className='text-yellow-500 font-bold py-3 border-2 px-2 border-yellow-500'>
                ONLINE ESTIMATE FORM
              </button>
            </div>
          </div>
        </div>
        <section className={`${styles.saw} w-full relative`}>
          <div className='w-full mx-auto text-white absolute top-[25%] text-center py-8'>
            <div className='h-2 bg-yellow-500 w-[3rem] my-4  mx-auto'></div>
            <p className='text-6xl font-bold tracking-wide my-6'>
              We’ve Been Building For <br /> Over 20 years
            </p>
            <p className=''>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              lectus erat <br /> consectetur eu sapien eget, rhoncus consectetur
              sem.
            </p>
            <button className=' bg-yellow-600 text-sm px-6 py-3 mt-6 font-bold'>
              ABOUT US
            </button>
          </div>
        </section>
        <section className='my-4 bg-gray-200'>
          <div>
            <Title title={'Client Testimonials'} />
            <div className='flex items-center justify-center gap-x-6'>
              <aside className='w-[311px] h-[305px]'>
                <div className='flex items-center justify-center my-4'>
                  <Image
                    alt='start'
                    width={26}
                    height={26}
                    src='/vectors/Star.svg'
                  />
                  <Image
                    alt='start'
                    width={26}
                    height={26}
                    src='/vectors/Star.svg'
                  />
                  <Image
                    alt='start'
                    width={26}
                    height={26}
                    src='/vectors/Star.svg'
                  />
                  <Image
                    alt='start'
                    width={26}
                    height={26}
                    src='/vectors/Star.svg'
                  />
                </div>
                <p className='text-gray-500 px-6'>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapien, dignissim tristique tellus sed faucibus nullam.”
                </p>
                <p className='ml-6 mt-4'>John Smith</p>
              </aside>
              <aside className='w-[311px] h-[305px]'>
                <div className='flex items-center justify-center my-4'>
                  <Image
                    alt='start'
                    width={26}
                    height={26}
                    src='/vectors/Star.svg'
                  />
                  <Image
                    alt='start'
                    width={26}
                    height={26}
                    src='/vectors/Star.svg'
                  />
                  <Image
                    alt='start'
                    width={26}
                    height={26}
                    src='/vectors/Star.svg'
                  />
                  <Image
                    alt='start'
                    width={26}
                    height={26}
                    src='/vectors/Star.svg'
                  />
                </div>
                <p className='text-gray-500 px-6'>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapien, dignissim tristique tellus sed faucibus nullam.”
                </p>
                <p className='ml-6 mt-4'>John Smith</p>
              </aside>
              <aside className='w-[311px] h-[305px]'>
                <div className='flex items-center justify-center my-4'>
                  <Image
                    alt='start'
                    width={26}
                    height={26}
                    src='/vectors/Star.svg'
                  />
                  <Image
                    alt='start'
                    width={26}
                    height={26}
                    src='/vectors/Star.svg'
                  />
                  <Image
                    alt='start'
                    width={26}
                    height={26}
                    src='/vectors/Star.svg'
                  />
                  <Image
                    alt='start'
                    width={26}
                    height={26}
                    src='/vectors/Star.svg'
                  />
                </div>
                <p className='text-gray-500 px-6'>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapien, dignissim tristique tellus sed faucibus nullam.”
                </p>
                <p className='ml-6 mt-4'>John Smith</p>
              </aside>
            </div>
          </div>
          <div className='flex items-center justify-center my-10'>
            <Image
              alt='Clients'
              width={1048}
              height={240}
              src='/media/Clients.png'
            />
          </div>
        </section>
      </main>
    </DefaultLayout>
  )
}

export default Home
