import React from 'react'
import { useState } from 'react';
import moment from 'moment/moment';
const Comment = ({ comment }) => {
        const [showMore, setShowMore] = useState(false)
        const likeCount = comment?.snippet?.topLevelComment?.snippet?.likeCount;
        const commentText = comment?.snippet?.topLevelComment?.snippet?.textDisplay
  return (
    <div className='flex  items-start shadow-sm p-4 my-1 rounded-lg bg-gray-50 transition duration-300'>
            <div className='mr-4 w-20 flex items-center justify-center'>
                <img className='rounded-full h-10 w-10' src={ comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl } />
            </div>
            <div className='flex flex-col flex-1'>
              <span>
                 <span className='mr-5'>{ comment?.snippet?.topLevelComment?.snippet?.authorDisplayName }</span>
                 <span>{ moment(comment?.snippet?.topLevelComment?.snippet?.publishedAt, 'YYYYMMDD').fromNow() }</span>
                </span>
              <div className='text-sm mt-2 text-gray-600 leading-6' dangerouslySetInnerHTML={{ __html: showMore ? commentText : commentText.slice(0, 100) }}> 
               </div>
              { commentText.length > 100 &&
               <button  className='text-blue-500 hover:text-blue-600 ml-1' onClick={ () => {setShowMore((prev) => !prev)}}>
                  { showMore ? 'See less' : <span className='text-md'>... <span className='ml-3'>See more</span> </span> }
                  </button>
                  }
              <div className='pl-24 text-sm'>
              { likeCount } {" "+ likeCount > 1 ? 'likes' : 'like'} 
              </div>
            </div>
      

    </div>
  )
}

export default Comment