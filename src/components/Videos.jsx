import React from 'react';
import { ChannelCard, VideoCard } from './';
import PlaylistCard from './PlaylistCard';
const Videos = ({ videos, setVideos, columnMode }) => {
  const removeVideo = (videosId) =>{
    let newVideos = videos.filter((video)=>{
      return video?.id?.videoId !== videosId
    })
    setVideos(newVideos)
  } 
  return (
    <div className='flex justify-center items-center gap-4 pb-16 flex-wrap'>
      {
        videos.length === 1 && <h1 className='flex items-center justify-center text-xl font-semibold
         w-full mt-20'>No videos, <a href='/' className='ml-2 text-blue-500 hover:text-blue-600'>
           relaod the page?</a></h1>
      }
      {
      videos.map((videoChannel, index)=>(
         videoChannel?.id?.videoId || videoChannel?.kind === "youtube#playlistItem" ?
          <VideoCard key={videoChannel?.id?.videoId} video={videoChannel} removeVideo={removeVideo}
          columnMode={columnMode}
          />  : 
          videoChannel?.id?.playlistId ?
           <PlaylistCard playlist={videoChannel} /> :
         videoChannel?.id?.channelId &&
          <ChannelCard key={index} channel={videoChannel}/> 
    ))
    }
    </div>
  )
}

export default Videos