import React from 'react'
import { FaSpinner } from 'react-icons/fa'
const Loading = () => {
  return (
    <span className='absolute inset-0 flex items-center justify-center bg-gray-200/25'>
        <FaSpinner className=' animate-spin' size={50}/>
    </span>
    
  )
}

export default Loading