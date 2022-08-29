import React from 'react'
import { HiX } from 'react-icons/hi'
import { AiFillPlusCircle } from 'react-icons/ai'

const AccordionUI = ({ title, children, Id, Index, setIndex }) => {
  const handleSetIndex = Id => {
    if (Index === Id) {
      return setIndex(null)
    }
    // Index !== Id && setIndex(Id)
    setIndex(Id)
  }

  return (
    <div className='w-[600px] px-6 ml-6 '>
      <div
        onClick={() => handleSetIndex(Id)}
        className='flex group cursor-pointer w-3/4  h-16 justify-between items-center mt-2 rounded-md bg-white'
      >
        <div className='flex cursor-pointer'>
          <div className='font-semibold'>{title}</div>
        </div>
        <div className='flex items-center justify-center'>
          {Index !== Id ? (
            <AiFillPlusCircle className='w-6 h-6' />
          ) : (
            <HiX className='w-6 h-6' />
          )}
        </div>
      </div>

      {Index === Id && (
        <div className='font-semibold w-3/5 h-auto rounded-md border-l-2 mb-2 '>
          {children}
        </div>
      )}
    </div>
  )
}

export default AccordionUI
