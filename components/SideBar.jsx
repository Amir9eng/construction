import React from 'react'

const SideBar = () => {
  return (
    
      <div className=' w-[1134px] bg-grey-200'>
        <div className='p-12'>
          <p className='font-bold text-3xl'>Building Construction</p>
          <div className='h-1 bg-yellow-500 w-[3rem] my-6'></div>
          <p className='text-gray-800'>
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
            Proin cursus, dolor a mollis consectetur, risus dolor fermentum
            massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
            tortor ultrices bibendum.{' '}
          </p>
          <div className='flex text-gray-700 mt-2 justify-around'>
            {' '}
            <ul className='list-disc list-inside'>
              <li>Lectus erat consectetur</li>
              <li>Eu sapien eget</li>
              <li>Rhoncus consectetur</li>
              <li>Proin cursus</li>
              <li>Dolor a mollis consectetur</li>
            </ul>
            <ul className='list-disc list-inside'>
              <li>Risus dolor fermentum</li>
              <li>Massa a commodo</li>
              <li>Elit dui sit amet risus</li>
              <li>Maecenas ornare</li>
              <li>Nisl a tortor ultrices</li>
            </ul>
            <ul className='list-disc list-inside'>
              <li>Bibendum nulla fermentum</li>
              <li>Metus quis sodales</li>
              <li>Tristique augue mauris</li>
              <li>Molestie augue non</li>
              <li>Feugiat ligula neque</li>
            </ul>
          </div>
        </div>
        <div className='flex'>
          <aside className='bg-black flex justify-center py-4 w-1/2'>
            <button className='border-4 border-white px-6 py-2 text-white font-semibold'>
              GET A QUOTE
            </button>
          </aside>
          <aside className='bg-yellow-500 flex justify-center py-4 w-1/2'>
            <button className='border-4 border-white px-6 py-2 text-white font-semibold'>
              LEARN MORE
            </button>
          </aside>
        </div>
      </div>
  )
}

export default SideBar
