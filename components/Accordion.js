import React, { useState } from 'react'
import AccordionUI from '../components/AccordionUI'

const Accordion = () => {
  const [Index, setIndex] = useState(false)

  const data = [
    {
      id: 1,
      question: 'Donec rutrum congue leo eget malesuada?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat.'
    },
    {
      id: 2,
      question: 'Vivamus suscipit tortor eget felis porttitor volutpat?',
      answer:
        'Aliquam lorem urna, tempor bibendum erat ac, luctus consectetur mauris. Phasellus sed turpis tristique, placerat dolor id, pharetra leo. Fusce vehicula volutpat sem at commodo. '
    },
    {
      id: 3,
      question: 'Curabitur non nulla sit amet nisl tempus?',
      answer:
        'Nunc interdum libero scelerisque enim posuere, ac condimentum erat condimentum. Maecenas placerat tempus efficitur. Maecenas massa dolor, volutpat eu metus vel, varius congue turpis.'
    },
    {
      id: 4,
      question: 'Pellentesque in ipsum id orci porta dapibus?',
      answer:
        'Aenean bibendum mollis sem. Nunc ut ultrices sapien, eu luctus magna. Nulla molestie, elit non sagittis tincidunt, ligula risus scelerisque sem, ut scelerisque dui sapien ac sapien.'
    },
    {
      id: 5,
      question: 'Curabitur non nulla sit amet nisl?',
      answer:
        'Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent mattis efficitur vehicula. Sed sed tempus orci. Pellentesque quis nunc sed justo scelerisque venenatis.'
    }
  ]

  return (
    <div className='flex flex-col justify-center items-center p-10 rounded-xl h-auto py-20 ml-28 bg-white'>
      {data.map((data, i) => {
        return (
          <AccordionUI
            key={i}
            title={data.question}
            Id={data.id}
            children={data.answer}
            Index={Index}
            setIndex={setIndex}
          ></AccordionUI>
        )
      })}
    </div>
  )
}
export default Accordion
