import Image from 'next/image'
import React from 'react'
import Title from '../components/Title'
import DefaultLayout from './../layouts/Default'

const About = () => {
  return (
    <DefaultLayout>
      <Image alt='portfolio' width={1440} height={569} src='/media/About.png' />
      <Title title={'About us'} />
      <div className='flex justify-center gap-x-8 text-gray-600 mt-8'>
        <aside className='w-[536px]'>
          <p>
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
            Proin cursus, dolor a mollis consectetur, risus dolor fermentum
            massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
            tortor ultrices bibendum. Nulla fermentum, metus quis sodales
            tristique, augue mauris molestie augue, non feugiat ligula neque nec
            felis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam
            blandit est in eros elementum, quis vehicula est suscipit. Proin
            cursus, dolor a mollis consectetur, risus dolor fermentum massa, a
            commodo elit dui sit amet risus. Maecenas ornare nisl a tortor
            ultrices bibendum.
          </p>
        </aside>
        <aside className='w-[535px]'>
          <p>
            Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus
            erat, consectetur eu sapien eget rhoncus consectetur sem. Proin
            cursus, dolor a mollis consectetur, risus dolor fermentum massa, a
            commodo elit dui sit amet risus. Maecenas ornare nisl a tortor
            ultrices bibendum. Nulla fermentum, metus quis sodales tristique,
            augue mauris molestie augue non feugiat ligula neque nec felis.
          </p>
          <p>
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
            Proin cursus, dolor a mollis consectetur, risus dolor fermentum
            massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
            tortor ultrices bibendum.
          </p>
        </aside>
      </div>
      <section className='flex mt-16 bg-gray-200'>
        <div className='w-[440px] text-black py-8 px-8'>
          <p className='text-3xl font-bold mb-2'>Only the Best</p>
          <div className='flex gap-x-4'>
            <aside className=''>
              <Image
                alt='portfolio'
                width={38}
                height={34.09}
                src='/vectors/Arrow.png'
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
                src='/vectors/Arrow.png'
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
                src='/vectors/Arrow.png'
              />
            </aside>
            <aside>
              <p className='font-bold'>High Quality Construction Management</p>
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
        <div className=''>
          <Image
            className=''
            width={980}
            height={600}
            alt='facebook'
            src='/media/About2.png'
          />
          <div className='w-full grid grid-cols-2 mt-[-6px] text-center'>
            <aside className='bg-yellow-500 py-4 px-4 text-black font-bold'>
              {' '}
              <p className='text-2xl'>12</p>
              <p>YEARS ESTABLISHED</p>
            </aside>
            <aside className='bg-black py-4  text-white'>
              <p className='text-2xl'>250</p>
              <p>COMPLETED PROJECTS</p>
            </aside>
          </div>
          <div className='w-full grid grid-cols-2 text-center'>
            <aside className='py-4 px-4 text-black font-bold'>
              {' '}
              <p className='text-2xl'>24</p>
              <p className='font-semibold'>FIELD WORKERS</p>
            </aside>
            <aside className='py-4 justify-center font-bold'>
              <p className='text-2xl'>18</p>
              <p className='font-semibold'>OFFICE STAFF</p>
            </aside>
          </div>
        </div>
      </section>
      <section>
        <main className='mx-auto text-center w-[588px] py-16'>
          <p className='font-bold text-2xl text-gray-800'>
            “Suspendisse neque erat, imperdiet ac non, sollicitudin accumsan
            lacus. Vestibulum ac ex rutrum, pellentesque purus et, lacinia mi.
            Nullam maximus lectus libero.”
          </p>
          <p className='text-gray-900 font-semibold pt-3'>JOHN SMITH – CEO</p>
        </main>
      </section>
    </DefaultLayout>
  )
}

export default About
