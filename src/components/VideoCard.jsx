import React from 'react'
import image from '../assets/images/paghman.jpg'
import { HiOutlineX } from 'react-icons/hi'
import CloseButton from './Core/CloseButton'
const VideoCard = ({video}) => {
  console.log(video);
  const postion = {
    top:'-top-1',
    right:'right-3'
  }
  return (
    <div className='bg-gray-50 dark:bg-gray-800 hover:-translate-y-[2px] transition-all
     flex flex-col items-start space-y-2 shadow-md hover:shadow-lg p-4 rounded-md
      w-96 h-72 sm:w-64'>
      <div className='group'>
        <div className='relative w-full flex flex-col justify-start items-start space-y-4'>
        <a href={`video/${video?.id?.videoId}`} className=''>
          <img src={video?.snippet?.thumbnails?.medium?.url} className=' h-40 rounded-lg hover:opacity-60
            object-fit transition-all duration-200' /></a> 
          <CloseButton top={postion.top} right={postion.right}/>
        <div className=' flex justify-center text-center'>
             <a href={`video/${video?.id?.videoId}`} className='flex items-center transition-all text-sm text-left text-gray-600
              dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300'>
                { video?.snippet?.title?.slice(0,40) }{ video?.snippet?.title.length > 40 && ' ...' }
              </a>
        </div>
        </div>
        </div>
        <div className='flex flex-col justify-center items-center space-y-2 w-full text-xs text-left
         text-gray-500  font-semibold'>
           <a href={`channel/${video?.snippet?.channelId}`} className='hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'>
            { video?.snippet?.channelTitle?.slice(0,20) } { video?.snippet?.channelTitle.length > 20 && ' ...' }</a>
           <a href='#vd' className='flex'> 
                {/* <span className='hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'>View count</span> <span className='mx-3'>-</span> */}
                <a href={`video/${video?.id?.videoId}`} className='hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'>{ video?.snippet?.publishedAt?.split('T')[0] }</a>
           </a>
        </div>
    </div>
  )
}

export default VideoCard