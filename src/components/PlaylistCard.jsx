import React from 'react'
import CloseButton from './Core/CloseButton'
const PlaylistCard = ( { playlist } ) => {
       console.log("play list :", playlist?.id?.playlistId )
    const postion = {
        top:'-top-1',
        right:'right-12 sm:right-3'
      }
      return (
        <div className='bg-gray-50 dark:bg-gray-800 hover:-translate-y-[2px] transition-all duration-300
         flex flex-col items-start space-y-2 shadow-md hover:shadow-lg p-4 rounded-md
          w-96 h-72 sm:w-64'>
         <div className='group w-full'>
        <div className='relative w-full flex flex-col justify-start items-start space-y-4'>
        <a href={`video`} className='group relative mx-auto'>
            <img src={playlist?.snippet?.thumbnails?.medium?.url} className='h-40 rounded-lg hover:opacity-70
            object-fit transition-opacity duration-200' />
            <div className='flex justify-center items-center absolute right-0 top-0 h-full w-1/2 bg-black/80 text-white group-hover:w-full transition-all duration-300 rounded-r group-hover:rounded-lg'>
              Play all
            </div>
          </a> 
          <CloseButton top={postion.top} right={postion.right} onClick={ () => removeVideo(playlist?.id?.playlistId) }/>
        <div className=' flex justify-center w-full'>
             <a href={`video/${playlist?.id?.videoId}`} className='flex items-center transition-all text-sm text-left text-gray-600
              dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300'>
                { playlist?.snippet?.title?.slice(0,40) }{ playlist?.snippet?.title.length > 40 && ' ...' }
              </a>
        </div>
        </div>
        </div>
        <div className='flex flex-col justify-center items-center space-y-2 w-full text-xs text-left
         text-gray-500  font-semibold'>
           <a href={`channel/${playlist?.snippet?.channelId}`} className='hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'>
            { playlist?.snippet?.channelTitle?.slice(0,20) } { playlist?.snippet?.channelTitle.length > 20 && ' ...' }</a>
          
        </div>
        </div>
      )
    
}

export default PlaylistCard