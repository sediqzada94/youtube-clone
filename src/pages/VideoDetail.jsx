import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/youtube'
import { useParams, Link } from 'react-router-dom'
import { fetchApiData } from '../utils/fetchApiData'
import { Videos, Comments, Skeleton } from '../components'
import moment from 'moment/moment'
const VideoDetail = () => {
 const { videoId } = useParams()
 const [videosDetails, setVideoDetails] = useState([])
 const [suggestedVideos, setSuggestedVideos] = useState([])
 const [videoComments, setVideoComments] = useState([])
 const [videoLoading, setVideoLoading] = useState(true)
      useEffect(() => {
          fetchApiData(`search?part=snippet&relatedToVideoId=${videoId}`).then(data => {
            setSuggestedVideos(data.items)     
          })
          fetchApiData(`commentThreads?part=snippet&videoId=${videoId}`).then(data => {
            setVideoComments(data.items)     
          })
          fetchApiData(`videos?part=snippet&id=${videoId}`).then(data => {
            setVideoDetails(data.items)     
          })
      }, [videoId])
    const formmater = new Intl.NumberFormat('en', { notation:'compact' })
  return (
    <div className='flex flex-col sm:flex-row px-20 py-10'>
      <div>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} 
        onReady={ () => { setVideoLoading(false) }}
        controls={true}
        playing={false}
       />
       <div className='p-4 my-10'> 
          <div className='text-lg font-semibold my-4'>{ videosDetails[0]?.snippet?.title }</div>
          <div className='flex flex-col gap-y-4'>
             <div className='flex gap-8'>
              <Link className='font-semibold' to={`/channel-detail/${videosDetails[0]?.snippet?.channelId}`}> {videosDetails[0]?.snippet?.channelTitle}</Link>
              <span className='text-sm font-semibold text-gray-600 dark:text-gray-300'>{ moment(videosDetails[0]?.snippet?.publishedAt, 'YYYYMMDD').fromNow() }</span>
             </div>
             <div className='flex space-x-5 dark:text-gray-300'>
                  <span>Views: {" "}{ formmater.format(videosDetails[0]?.statistics?.viewCount) }</span>
                  <span>Likes: {" "}{ formmater.format(videosDetails[0]?.statistics?.likeCount) }</span>
                  <span>Comments: {" "}{ formmater.format(videosDetails[0]?.statistics?.commentCount) }</span>
             </div>
          </div>
       </div>
       <div className='flex flex-col gap-4'>
      <Comments comments={videoComments} />
       </div>
      </div>
      <Videos videos={suggestedVideos} columnMode={true}/>

    </div>
  )
}

export default VideoDetail