import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/youtube'
import { useParams } from 'react-router-dom'
import { fetchApiData } from '../utils/fetchApiData'
import { Videos } from '../components'
const VideoDetail = () => {
 const { videoId } = useParams()
 const [suggestedVideos, setSuggestedVideos] = useState([])
 useEffect(() => {
          fetchApiData(`search?part=snippet&relatedToVideoId=${videoId}`).then(data => {
            setSuggestedVideos(data.items)     
          })
 
 }, [videoId])
   console.log('sug :',suggestedVideos)
  return (
    <div className='flex px-20 py-10'>
      <div>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} 
        controls={true}
        playing={false}
       />
      </div>
      <div className="ml-8">
      <Videos videos={suggestedVideos} />
      </div>

    </div>
  )
}

export default VideoDetail