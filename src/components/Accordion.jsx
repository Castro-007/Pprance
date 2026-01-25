import React, { useState} from 'react'

const Accordion = (props) => {
    const [accordionOpen, setAccordionOpen] = useState(false)
  return (
    <div className='max-w-2xl p-4 rounded-lg bg-[#0F1621] mb-4 text-white border border-gray-800 shadow-sm'>
      <button className='flex justify-between w-full items-center transition-colors duration-300 hover:text-blue-400' onClick={() => setAccordionOpen(!accordionOpen)}>
        <h2 className='text-2xl sma:text-xl mda:text-xl font-Anek'>{props.head}</h2>
        {accordionOpen ? <span className='text-2xl sma:text-xl mda:text-xl cursor-pointer text-blue-500'>-</span> : <span className='text-2xl sma:text-xl mda:text-xl cursor-pointer text-blue-500'>+</span>}
      </button>
      <div className={`grid overflow-hidden transition-all font-Nunito mt-3 text-gray-300 items-start text-start leading-relaxed duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
      <span className='overflow-hidden'>
        {props.answer}
      </span>

      </div>
      <div className='border-t border-gray-800 mt-3' />
    </div> 
  )
}

export default Accordion
