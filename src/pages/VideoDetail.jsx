import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/youtube'
import { useParams } from 'react-router-dom'
import { fetchApiData } from '../utils/fetchApiData'
import { Videos, Comments, Skeleton } from '../components'
const VideoDetail = () => {
 const { videoId } = useParams()
 const [suggestedVideos, setSuggestedVideos] = useState([])
 const [videoComments, setVideoComments] = useState([])
 const [videoLoading, setVideoLoading] = useState(true)
      useEffect(() => {
                fetchApiData(`search?part=snippet&relatedToVideoId=${videoId}`).then(data => {
                  setSuggestedVideos(data.items)     
                })
      
      }, [videoId])
      useEffect(() => {
                fetchApiData(`commentThreads?part=snippet&videoId=${videoId}`).then(data => {
                  setVideoComments(data.items)     
                })
      
      }, [videoId])
   
  return (
    <div className='flex flex-col sm:flex-row px-20 py-10'>
      <div>
        { videoLoading && 
        <Skeleton />
         }
        <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} 
        onReady={ () => { setVideoLoading(false) }}
        controls={true}
        playing={false}
       />
       <div className='flex flex-col gap4'>
          <Comments comments={videoComments} />
       </div>
      </div>
      <Videos videos={suggestedVideos} />

    </div>
  )
}

export default VideoDetail