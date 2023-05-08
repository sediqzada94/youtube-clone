import React from 'react'
import { Comment } from './'
const Comments = ({ comments }) => {
  console.log('com :', comments)
  return (
    <div className='flex flex-col items-left justify-items-center'>
         {  comments.map((comment) => {
            return <Comment comment = { comment } />
          }) 
      }
    </div>
  )
}

export default Comments