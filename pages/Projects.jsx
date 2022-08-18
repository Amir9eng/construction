import DefaultLayout from '../layouts/Default'
import styles from '../styles/Home.module.css'

export default function Projects () {
  return (
    <DefaultLayout>
      <div className={`${styles.monarch} w-[1348px] h-[569px]`}>
        <div className='flex  text-white'>
          <aside className='w-[694px] px-6'>
            <p className='text-[64px] font-bold border-l-[8px] pl-3  border-yellow-500'>
              Monarch HQ Project
            </p>
            <p className='font-semibold mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
              egestas pellentesque libero dolor in diam consequat ut.
            </p>
          </aside>
          <aside className='ml-10'>
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
    </DefaultLayout>
  )
}
