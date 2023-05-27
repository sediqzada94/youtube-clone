import React from 'react'
import { FaCode } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='flex justify-center w-full py-6 bg-white items-center
     justify-items-center gap-5 dark:bg-gray-800'>
        <Link to='https://github.com/sediqzada94' target='_blank' className='flex items-center gap-2 text-blue-500 hover:text-blue-600'> Samiullah Sediqzada</Link>
        <Link to='https://github.com/sediqzada94/youtube-clone' target='_blank' className='flex items-center gap-2 text-blue-500 hover:text-blue-600'> <FaCode/>Source code</Link>
    </div>
  )
}

export default Footer