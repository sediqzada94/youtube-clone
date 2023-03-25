import React from 'react'

const PlaylistCard = ( { playlist } ) => {
 
    const postion = {
        top:'-top-1',
        right:'right-12 sm:right-3'
      }
      return (
        <div className='bg-gray-50 dark:bg-gray-800 hover:-translate-y-[2px] transition-all duration-1000
         flex flex-col items-start space-y-2 shadow-md hover:shadow-lg p-4 rounded-md
          w-96 h-72 sm:w-64'>
          <div className='group w-full'>
              Playlist
           </div>
        </div>
      )
    
}

export default PlaylistCard