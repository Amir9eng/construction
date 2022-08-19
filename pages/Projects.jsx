import Image from 'next/image'
import DefaultLayout from '../layouts/Default'
import styles from '../styles/Home.module.css'

export default function Projects () {
  return (
    <DefaultLayout>
      <div className={`${styles.monarch} w-[1348px] h-[569px]`}>
        <div className='flex  text-white'>
          <aside className='w-[694px] px-6 mt-44'>
            <p className='text-[64px] font-bold border-l-[8px] pl-3  border-yellow-500'>
              Monarch HQ Project
            </p>
            <p className='font-semibold mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
              egestas pellentesque libero dolor in diam consequat ut.
            </p>
          </aside>
          <aside className='ml-10 mt-44'>
            <p>
              <span className='font-semibold'>Date:</span> 12 April 2018
            </p>
            <p className='mt-2'>
              <span className='font-semibold'>Client:</span> Monarch Group
            </p>
            <p className='mt-2'>
              <span className='font-semibold'>Project Type:</span> Building
              Renovation
            </p>
          </aside>
        </div>
      </div>
      <section className='flex justify-center my-12'>
        <aside className='w-[502px] text-gray-500'>
          <p className='text-3xl font-bold'>About this Project</p>
          <span className='h-4 bg-yellow-500 w-12'></span>
          <p className=''>
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
            Proin cursus, dolor a mollis consectetur, risus dolor fermentum
            massa, a commodo elit dui sit amet risus.
          </p>
          <ul>
            <li>Maecenas ornare nisl</li>
            <li>A tortor ultrices bibendum</li>
            <li>Nulla fermentum</li>
            <li>Metus quis</li>
            <li>Sodales tristique</li>
          </ul>
        </aside>
        <aside>
          <Image width={536} height={324} alt='aside' src='/media/aside.png' />
        </aside>
      </section>
      <section className='flex items-center justify-center'>
        <Image
          alt='building'
          width={1096}
          height={568}
          src='/media/Rectangle.png'
        />
      </section>
      <section className='flex gap-x-10 justify-center my-10'>
        <Image
          alt='monarch'
          width={458}
          height={262}
          src='/media/monarch2.png'
        />
        <div>
          <p className='text-gray-500 w-[598px] leading-4'>
            Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus
            erat, consectetur eu sapien eget rhoncus consectetur sem. Proin
            cursus, dolor a mollis consectetur, risus dolor fermentum massa, a
            commodo elit dui sit amet risus. Maecenas ornare nisl a tortor
            ultrices bibendum. Nulla fermentum, metus quis sodales tristique,
            augue mauris molestie augue non feugiat ligula neque nec felis.
          </p>
          <p className='text-gray-500 w-[598px] px-8'>
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
            Proin cursus, dolor a mollis consectetur, risus dolor fermentum
            massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
            tortor ultrices bibendum. Nulla fermentum, metus quis sodales
            tristique, augue mauris molestie augue, non feugiat ligula neque nec
            felis.
          </p>
        </div>
      </section>
    </DefaultLayout>
  )
}
