import Image from 'next/image'
import Project from '../components/Project'
import Title from '../components/Title'
import DefaultLayout from '../layouts/Default'
import styles from '../styles/Home.module.css'

export default function Projects () {
  return (
    <DefaultLayout>
      <div className={`${styles.monarch} w-[1348px] h-[569px] relative`}>
        <div className='absolute flex top-[35%] left-[10%]  text-white'>
          <aside className='w-[694px]'>
            <p className='text-[64px] font-bold border-l-[8px] pl-3  border-yellow-500'>
              Monarch HQ Project
            </p>
            <p className='font-semibold mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
              egestas pellentesque libero dolor in diam consequat ut.
            </p>
          </aside>
          <aside className='ml-12'>
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
      <main className='px-[8rem]'>
        <section className='flex justify-center my-12'>
          <aside className='text-gray-500 w-1/2'>
            <p className='text-3xl font-bold text-black'>About this Project</p>
            <div className='h-1 bg-yellow-500 w-[3rem] my-6'></div>
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
          <aside className='w-1/2'>
            <Image
              width={536}
              height={324}
              alt='aside'
              src='/media/aside.png'
            />
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
          <div className='w-1/2'>
            <Image
              alt='monarch'
              width={458}
              height={230}
              src='/media/monarch2.png'
            />
          </div>
          <div className='w-1/2'>
            <p className='text-gray-500'>
              Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus
              erat, consectetur eu sapien eget rhoncus consectetur sem. Proin
              cursus, dolor a mollis consectetur, risus dolor fermentum massa, a
              commodo elit dui sit amet risus. Maecenas ornare nisl a tortor
              ultrices bibendum. Nulla fermentum, metus quis sodales tristique,
              augue mauris molestie augue non feugiat ligula neque nec felis.
            </p>
            <p className='text-gray-500 mt-6'>
              Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
              Proin cursus, dolor a mollis consectetur, risus dolor fermentum
              massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
              tortor ultrices bibendum. Nulla fermentum, metus quis sodales
              tristique, augue mauris molestie augue, non feugiat ligula neque
              nec felis.
            </p>
          </div>
        </section>
        <Title title={'Related Projects'} />
        <Project title={'Service Title'} />
        <div className='flex items-center'>
          <button className='mx-auto my-0 border-black border-4 w-[160px] h-[38px]'>
            VIEW ALL
          </button>
        </div>
      </main>
    </DefaultLayout>
  )
}
