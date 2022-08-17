import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Accordion from '../components/Accordion'
// import Footer from '../components/Footer'
import Footer from './../components/Footer'

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
          <h2>Construction Company</h2>
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
          <div className='bg-gray-200 h-full'>
            <div className='flex'>
              <div className='py-6 px-10'>
                <p className='text-3xl font-bold my-4 ml-8'>
                  No Project Too Big Or Too Small
                </p>

                <p className='block text-gray-400 w-3/5 leading-7 ml-8 my-12 '>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapien, dignissim tristique tellus sed faucibus nullam.
                  Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque
                  lorem posuere iaculis nunc amet phasellus. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Sapien, dignissim
                  tristique tellus sed faucibus nullam.
                </p>
              </div>
              <div>
                <p className='block text-gray-400 leading-7 mt-24'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapien, dignissim tristique tellus sed faucibus nullam.
                  Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque
                  lorem posuere iaculis nunc amet phasellus.
                </p>
                <button className='my-6 border-black border-2 py-2 px-4'>
                  Learn More
                </button>
              </div>
            </div>
            <div className='w-full grid grid-cols-2 mt-20'>
              <div className='bg-yellow-500 text-black py-4 mt-7'>
                <p className='text-2xl font-bold text-center'>12</p>
                <p className='text-center'>YEARS ESTABLISHED</p>
              </div>
              <div className='bg-black text-white py-4 mt-7'>
                <p className='text-2xl font-bold text-center'>250</p>
                <p className='text-center'>COMPLETED PROJECTS</p>
              </div>
            </div>
          </div>
        </div>
        <p className='text-3xl text-center font-bold mt-14 block'>
          Latest Projects
        </p>
        <section className='flex w-[1000px] mx-auto my-0'>
          <div className='w-[295px] p-12 mx-auto my-0'>
            <Image
              className=''
              width={293}
              height={182}
              alt='facebook'
              src='/media/bridge.png'
            />
            <div className='py-4 border-gray-300 border-2 px-4 mt-2'>
              <p className='my-6'>Project Title</p>
              <p className='my-4 text-gray-500'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et
                euismod bibendum adipiscing et orci, fermentum. Cras tristique
                viverra gravida et sit egestas.
              </p>

              <button className='border-gray-500 border-2 px-4 mt-6'>
                VIEW PROJECT
              </button>
            </div>
          </div>

          <div className='w-[295px] p-12 mx-auto my-0'>
            <Image
              className=''
              width={293}
              height={182}
              alt='facebook'
              src='/media/sky.png'
            />
            <div className='py-4 border-gray-300 border-2 px-4 mt-2'>
              <p className='my-6'>Project Title</p>
              <p className='my-4 text-gray-500'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et
                euismod bibendum adipiscing et orci, fermentum. Cras tristique
                viverra gravida et sit egestas.
              </p>
              <button className='border-gray-500 border-2 px-4 mt-6'>
                VIEW PROJECT
              </button>
            </div>
          </div>
          <div className='w-[295px] p-12 mx-auto my-0'>
            <Image
              className=''
              width={293}
              height={182}
              alt='facebook'
              src='/media/sketch.png'
            />
            <div className='py-4 border-gray-300 border-2 px-4 mt-2'>
              <p className='my-6'>Project Title</p>
              <p className='my-4 text-gray-500'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et
                euismod bibendum adipiscing et orci, fermentum. Cras tristique
                viverra gravida et sit egestas.
              </p>
              <button className='border-gray-500 border-2 px-4 mt-6'>
                VIEW PROJECT
              </button>
            </div>
          </div>
        </section>
        <div className='flex items-center'>
          <button className='mx-auto my-0 border-black border-2 w-[150px] h-[32px]'>
            VIEW ALL
          </button>
        </div>
        <section className='flex mt-6'>
          <div className='w-[440px] bg-black text-white py-12 px-8'>
            <p className='text-3xl font-bold'>
              We’ve Been Building For Over 10 Years
            </p>
            <p className='my-8 leading-[27px] w-[200]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
              ut quam sed mauris proin feugiat. Scelerisque lorem posuere
              iaculis nunc amet phasellus.
            </p>
            <button className='px-8 py-2 border-yellow-500 border-2 mt-4 text-yellow-500'>
              ABOUT US
            </button>
          </div>
          <div className=''>
            <Image
              className=''
              width={1000}
              height={600}
              alt='facebook'
              src='/media/truck.png'
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
        <section className={`${styles.wrapper} w-full`}>
          <div className='w-[345px] py-12 ml-16 mt-10'>
            <p className='text-3xl font-bold my-4 w-[239px] border-b-0 border-yellow-500'>
              Let’s Build Something Together
            </p>
            <p className='text-gray-800 mt-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
              ut quam sed mauris proin feugiat.{' '}
            </p>
            <button className='border-2 border-yellow-500 px-2 py-2 mt-6'>
              GET IN TOUCH
            </button>
          </div>
          <Accordion />
        </section>
        <section>
          <div>
            <p className='text-center text-black text-3xl font-bold my-8'>
              Client Testimonials
            </p>
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
      <Footer />
    </div>
  )
}
