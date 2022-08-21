import Image from 'next/image'
import DefaultLayout from '../layouts/Default'

function News () {
  return (
    <DefaultLayout>
      <Image alt='News' width={1440} height={339} src='/media/News.png' />
      <main className='flex flex-wrap justify-center gap-x-8 px-24'>
        <div className='w-[321px]'>
          <Image alt='card' width={321} height={204} src='/media/card1.png' />
          <p className='text-gray-600 font-bold'>Nunc Volutpat Venenatis</p>
          <p className='text-gray-200'>May 9, 2014 | Category</p>
          <p className='text-gray-500'>
            Nulla a odio sed magna congue condimentum. Pellentesque convallis
            enim nec libero vulputate, et rhoncus urna placerat. Phasellus
            mattis, diam vel vehicula facilisis, erat leo dapibus augue, at
            mollis tellus ex non nisi.
          </p>
        </div>
        <div className='w-[321px]'>
          <Image alt='card' width={321} height={204} src='/media/card2.png' />
          <p className='text-gray-600 font-bold'>Vestibulum Nisl Felis</p>
          <p className='text-gray-200'>May 9, 2014 | Category</p>
          <p className='text-gray-500'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            aliquam justo et nibh venenatis aliquet.{' '}
          </p>
        </div>
        <div className='w-[321px]'>
          <Image alt='card' width={321} height={204} src='/media/card3.png' />
          <p className='text-gray-600 font-bold'>Proin Eu Augue Efficitur</p>
          <p className='text-gray-200'>May 9, 2014 | Category</p>
          <p className='text-gray-500'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            aliquam justo et nibh venenatis aliquet.{' '}
          </p>
        </div>
        <div className='w-[321px]'>
          <Image alt='card' width={321} height={204} src='/media/card4.png' />
          <p className='text-gray-600 font-bold'>Nunc Volutpat Venenatis</p>
          <p className='text-gray-200'>May 9, 2014 | Category</p>
          <p className='text-gray-500'>
            Nulla a odio sed magna congue condimentum. Pellentesque convallis
            enim nec libero vulputate, et rhoncus urna placerat. Phasellus
            mattis, diam vel vehicula facilisis, erat leo dapibus augue, at
            mollis tellus ex non nisi. Maecenas urna sapien, dignissim a augue
            vitae, porttitor luctus urna. Morbi scelerisque semper congue.{' '}
          </p>
        </div>
        <div className='w-[321px]'>
          <Image alt='card' width={321} height={204} src='/media/card5.png' />
          <p className='text-gray-600 font-bold'>Donec Sit Amet Nibh</p>
          <p className='text-gray-200'>May 9, 2014 | Category</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            aliquam justo et nibh venenatis aliquet.{' '}
          </p>
        </div>
        <div className='w-[321px]'>
          <Image alt='card' width={321} height={204} src='/media/card6.png' />
          <p className='text-gray-600 font-bold'>Maecenas Fringilla Augue</p>
          <p className='text-gray-200'>May 9, 2014 | Category</p>
          <p className='text-gray-500'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            aliquam justo et nibh venenatis aliquet.Donec quis felis imperdiet,
            vestibulum est ut, pulvinar dolor.{' '}
          </p>
        </div>
      </main>
    </DefaultLayout>
  )
}

export default News
