import React from 'react'
const Comment = ({ comment }) => {
    const likeCount = comment?.snippet?.topLevelComment?.snippet?.likeCount;
  return (
    <div className='flex flex-col border p-4 my-1 rounded-lg bg-gray-50'>
        <div className='flex mb-3'>
            <div className='mr-4'>
                <img className='rounded-full h-10 w-10' src={ comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl } />
            </div>
            <div className='flex flex-col'>
              <span>
                 <span className='mr-5'>{ comment?.snippet?.topLevelComment?.snippet?.authorDisplayName }</span>
                 <span>{ comment?.snippet?.topLevelComment?.snippet?.publishedAt }</span>
                </span> 
              <div className='text-sm mt-2 text-gray-600'> { comment?.snippet?.topLevelComment?.snippet?.textDisplay } </div>
            </div>
        </div>
        <div className='pl-14 text-sm'>
        { likeCount } {" "+ likeCount > 1 ? 'likes' : 'like'} 
        </div>
       {/* <span>{comment?.snippet?.topLevelComment?.snippet?.textDisplay}</span> */}
    </div>
  )
}

export default Comment