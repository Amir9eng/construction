import Image from 'next/image'

export default function Project (props) {
  return (
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
          <p className='my-6'>{props.title}</p>
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
          <p className='my-6'>{props.title}</p>
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
          <p className='my-6'> {props.title} </p>
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
  )
}
