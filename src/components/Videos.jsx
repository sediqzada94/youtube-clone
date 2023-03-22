import React from 'react';
import { ChannelCard, VideoCard } from './';
const Videos = ({videos}) => {
  return (
    <div className='flex justify-center items-center gap-4 pb-16 flex-wrap'>
      {videos.map((videoChannel, index)=>(
         videoChannel?.id?.videoId ?
          <VideoCard key={index} video={videoChannel}/>  : 
         videoChannel?.id?.channelId && <ChannelCard key={index} channel={videoChannel}/> 
    ))}
    </div>
  )
}

export default Videos