import React from 'react'
import DefaultLayout from './../layouts/Default'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <DefaultLayout>
      <section className={`${styles.home}`}>
        <div className='w-full mx-auto bg-black'>
          <p className='text-white bg-white text-3xl font-bold'>
            Construction Inc
          </p>
          <p className='text-white font-semibold'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lectus erat consectetur eu sapien eget, rhoncus consectetur sem.
          </p>
          <button className='text-white bg-yellow-500 px-4 py-2 font-bold'>
            VIEW OUR WORK
          </button>
        </div>
      </section>
    </DefaultLayout>
  )
}

export default Home
