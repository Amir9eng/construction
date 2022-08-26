import Image from 'next/image'
import Accordion from '../components/Accordion'
import styles from '../styles/Home.module.css'
import Title from '../components/Title'
import DefaultLayout from '../layouts/Default'
import Card from './../components/Card'

const Service = () => {
  const data = [
    {
      id: 1,
      image: '/media/port8.png',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum.'
    },
    {
      id: 2,
      image: '/media/port7.png',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum.'
    },
    {
      id: 3,
      image: '/media/port1.png',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum.'
    }
  ]
  return (
    <DefaultLayout>
      <Image
        alt='portfolio'
        width={1440}
        height={569}
        src='/media/Service.png'
      />
      <main>
        <div className='flex justify-center gap-x-8 text-gray-600 mt-8'>
          <aside className='w-[536px]'>
            <p>
              Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
              Proin cursus, dolor a mollis consectetur, risus dolor fermentum
              massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
              tortor ultrices bibendum. Nulla fermentum, metus quis sodales
              tristique, augue mauris molestie augue, non feugiat ligula neque
              nec felis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              sed nibh dignissim, cursus tellus sit amet, ultrices mauris.
              Aliquam blandit est in eros elementum, quis vehicula est suscipit.
              Proin cursus, dolor a mollis consectetur, risus dolor fermentum
              massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
              tortor ultrices bibendum.
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
          <div className='w-[440px] bg-black text-white py-12 px-8'>
            <p className='text-3xl font-bold'>About Process</p>
            <div className='h-1 bg-yellow-500 w-[3rem] my-6'></div>
            <p className='my-8 leading-[27px] w-[200]'>
              Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
              Proin cursus, dolor a mollis consectetur, risus dolor fermentum
              massa, a commodo elit dui sit amet risus. Maecenas ornare nisl A
              tortor ultrices bibendum Nulla fermentum Metus quis Sodales
              tristique
            </p>
          </div>
          <div className=''>
            <Image
              className=''
              width={1000}
              height={600}
              alt='facebook'
              src='/media/Quote.png'
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
        <Title title={'Related Projects'} />
        <div className='flex justify-center gap-x-14 mt-6'>
          {data.map((data, id) => {
            return (
              <Card
                key={id}
                service={'Service Title'}
                image={data.image}
                paragraph={data.paragraph}
              ></Card>
            )
          })}
        </div>
        <div className='flex items-center my-10'>
          <button className='mx-auto my-0 border-black border-2 w-[150px] h-[32px]'>
            VIEW ALL
          </button>
        </div>
        <section className={`${styles.wrapper}`}>
          <div className='w-[345px] py-12 ml-36 mt-10'>
            <p className='text-3xl font-bold my-4 w-[239px] border-b-0 border-yellow-500'>
              F.A.Q.
            </p>
            <div className='h-1 bg-yellow-500 w-[2rem] my-6'></div>
            <p className='text-gray-600 mt-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
              ut quam sed mauris proin feugiat.
            </p>
            <button className='border-2 border-yellow-500 px-4 py-2 mt-6'>
              ASK A QUESTION
            </button>
          </div>
          <Accordion />
        </section>
      </main>
    </DefaultLayout>
  )
}

export default Service
