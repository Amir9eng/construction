import Image from 'next/image'

const Card = props => {
  return (
    <div className='w-[293px]'>
      <Image alt='card' width={293} height={182} src={props.image} />
      <aside className='border-2 border-gray-400 mt-4 px-4 py-8'>
        <p className='text-gray-900 font-bold my-4'>{props.service}</p>
        <p className='text-gray-600'>{props.paragraph}</p>
        <button className='w-[8.625rem] h-[1.75rem] border-2 border-gray-400 mt-6 font-semibold text-gray-500'>
          LEARN MORE
        </button>
      </aside>
    </div>
  )
}

export default Card
