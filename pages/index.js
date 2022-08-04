import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Construction Company</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <nav className='flex justify-between my-8 font-medium'>
          <h2>Construction Company</h2>{' '}
          <div className='flex gap-x-6 text-sm'>
            <p>Project</p>
            <p>Blog</p>
            <p>Portfolio</p>
            <p>Service</p>
            <p>Services</p>
            <p>Contact</p>
            <p>About</p>
            <p>Home</p>
            <Image
              className=''
              width={24}
              height={24}
              alt='cart'
              src='/media/cart3.svg'
            />
          </div>
        </nav>
        <div className={`${styles.construction}`}>
          <div className={`pl-[179px] pt-[93px] ${styles.description}`}>
            <h1 className='text-5xl font-semibold pl-[28px] text-white border-l-[6px]  border-yellow-500'>
              Construction
            </h1>
            <p className='text-white w-2/3'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
              egestas pellentesque libero dolor in diam consequat ut. Mi nibh
              amet viverra id aliquet neque odio.
            </p>
            <button className={styles.work}>VIEW OUR WORK</button>
          </div>
          <div className='bg-yellow-500 px-8 py-10'>
            <h1 className='text-2xl font-bold mt-2'>Our Services</h1>
            <div className='flex gap-x-6 my-4'>
              <Image
                width={54.04}
                height={53}
                alt='subtract'
                src='/vectors/building.svg'
              />
              <div>
                <h2 className='font-bold'>Building Construction</h2>
                <p className='text-white'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className='flex gap-x-6 my-4'>
              <Image
                width={58}
                height={51.5}
                alt='foundation'
                src='/vectors/foundation.svg'
              />
              <div>
                {' '}
                <h2 className='font-bold'>Foundation Work</h2>
                <p className='text-white'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className='flex gap-x-6 my-4'>
              {' '}
              <Image
                width={54}
                height={51.5}
                alt='site'
                src='/vectors/site.svg'
              />
              <div>
                <h2 className='font-bold'>Site Management</h2>
                <p className='text-white'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-around my-6'>
          <p className='text-3xl font-bold'>Get a Quote For Your Project</p>
          <button className='border-4 border-yellow-500 px-4 py-2 '>
            FREE QUOTE
          </button>
        </div>
        <div className={`${styles.project}`}>
          <Image
            className=''
            width={440}
            height={730}
            alt='cart'
            src='/media/Project.png'
          />
          <div className='p-8 bg-gray-200'>
            <p className='text-2xl font-bold'>
              No Project Too Big Or Too Small
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
              ut quam sed mauris proin feugiat. Scelerisque lorem posuere
              iaculis nunc amet phasellus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sapien, dignissim tristique tellus
              sed faucibus nullam.{' '}
            </p>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
                dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
                ut quam sed mauris proin feugiat. Scelerisque lorem posuere
                iaculis nunc amet phasellus.
              </p>
              <button>Learn More</button>
            </div>
            <div>
              <div>
                <p>12</p>
                <p>YEARS ESTABLISHED</p>
              </div>
              <div>
                <p>250</p>
                <p>COMPLETED PROJECTS</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className='flex bg-white'>
        <div className='pl-10 pr-28 w-1/2 bg-yellow-500 '>
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
        <div className='w-2/4'>
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
              {' '}
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
              <p>constractioninc@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
