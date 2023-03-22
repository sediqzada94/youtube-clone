import React from 'react'
import { navbarVideoCategoryLinks } from '../utils/constants'

const VideoCategoryLinks = () => {
  return (
    <div className='flex flex-wrap justify-start mt-1 gap-x-2 gap-y-4 g py-4 mx-12  text-xs tracking-wider font-semibold'>
    { navbarVideoCategoryLinks.map((link)=>{
     return (
       <button key={link.name} className='px-3 py-2 transition bg-gray-200 hover:bg-gray-300 dark:bg-gray-500 
      dark:hover:bg-gray-600 rounded-md capitalize'>{link.name}</button>
     )

    })
    }
      </div>
  )
}

export default VideoCategoryLinks