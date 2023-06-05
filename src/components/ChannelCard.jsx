import React from 'react'
import image from '../assets/images/paghman.jpg'
import { CloseButton } from './'
import { Link } from 'react-router-dom'
const ChannelCard = ({ channel }) => {
   const position = {
      top:'top-4',
      right:'right-4'
    }
  return (
    <div className='group relative bg-gray-50 dark:bg-gray-800 hover:-translate-y-[2px] transition-all
     flex justify-center items-start space-y-2 shadow-md hover:shadow-lg p-4 rounded-md
      w-[320px]  mx-2 h-72  sm:w-64'>
      <CloseButton top={position.top} right={position.right} />
       <div className=''>
          <Link to={`channel-detail/${channel?.id?.channelId}`} className='flex justify-center items-center'>
          <img src={channel?.snippet?.thumbnails?.medium.url} className='mt-5 h-24 w-24 rounded-full hover:scale-105 transition-transform object-fit' />
          </Link>
          <div className='mt-3 font-medium space-y-2'>
            <Link to={`channel-detail/${channel?.id?.channelId}`} className='text-gray-600 dark:text-gray-400
             dark:hover:text-gray-300 hover:text-gray-800 mx-auto flex justify-center'>{channel?.snippet?.channelTitle}</Link>
            {/* <div className='flex text-xs'>
               <a href='#' className='text-gray-500 dark:text-gray-400 dark:hover:text-gray-300
                hover:text-gray-600'>Channel link</a>
               <span className='mx-2'>-</span>
               <a href='#' className='text-gray-500 dark:text-gray-400 dark:hover:text-gray-300
                hover:text-gray-600'>205k Subscribers</a>
            </div> */}
            <div href='#' className='flex justify-center'>
               <a href={`channel/${channel?.id?.channelId}`} className='text-gray-500 dark:text-gray-400 dark:hover:text-gray-300
                hover:text-gray-600 text-xs'> {channel?.snippet?.description}</a> 
              </div>
          </div>
       </div>
    </div>
  )
}

export default ChannelCard