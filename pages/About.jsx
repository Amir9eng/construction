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
      <section className='flex mt-16'>
        <div className='w-[440px] text-black py-12 px-8'>
          <p className='text-3xl font-bold'>Only the Best</p>
          <div>
            <Image
              alt='portfolio'
              width={40}
              height={29}
              src='/vectors/Arrow.png'
            />
            <p className='font-bold'>Eco Friendly Construction</p>
            <p className='my-8 leading-[27px] w-[200px]'>
              Donec sollicitudin molestie malesuada. Praesent sapien massa,
              convallis a pellentesque nec, egestas non nisi.
            </p>
          </div>
          <div>
            <Image
              alt='portfolio'
              width={40}
              height={29}
              src='/vectors/Arrow.png'
            />
            <p className='font-bold'>The Newest Technology Repairs</p>
            <p className='my-8 leading-[27px] w-[200px]'>
              Donec sollicitudin molestie malesuada. Praesent sapien massa,
              convallis a pellentesque nec, egestas non nisi.
            </p>
          </div>
          <div>
            <Image
              alt='portfolio'
              width={40}
              height={29}
              src='/vectors/Arrow.png'
            />
            <p className='font-bold'>High Quality Construction Management</p>
            <p className='my-8 leading-[27px] w-[200px]'>
              Donec sollicitudin molestie malesuada. Praesent sapien massa,
              convallis a pellentesque nec, egestas non nisi.
            </p>
          </div>
          <button className='px-8 py-2 border-yellow-500 border-2 mt-4 text-yellow-500'>
            FREE QUOTE
          </button>
        </div>
        <div className=''>
          <Image
            className=''
            width={980}
            height={600}
            alt='facebook'
            src='/media/About2.png'
          />
          <div className='w-full grid grid-cols-2 mt-[-6px]'>
            <aside className='bg-yellow-500 py-4 px-4 text-black font-bold'>
              {' '}
              <p className='text-2xl'>Call for a Quote</p>
              <p>(346) 234-6973</p>
            </aside>
            <aside className='py-4 flex items-center justify-center'>
              <button className='border-black border-2 px-4 py-1'>
                ONLINE ESTIMATE FORM
              </button>
            </aside>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}

export default About
