import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchApiData } from '../utils/fetchApiData'
import { Videos } from '../components'
import  moment  from 'moment/moment'
const PlaylistDetail = () => {
  const { playlistId } = useParams()
  const [playlistInfo, setPlaylistInfo] = useState([])
  const [playlistVideos, setPlaylistVideos] = useState([])
  useEffect(() => {
    fetchApiData(`playlists?part=snippet&id=${playlistId}`).then(data => {
      setPlaylistInfo(data.items)     
    })
  }, [playlistId])

  useEffect(() => {
    fetchApiData(`playlistItems?playlistId=${playlistId}&part=snippet`).then(data => {
      setPlaylistVideos(data.items) 

    })

}, [playlistId])
    const  formatter = new Intl.NumberFormat('en', {notation: 'compact'})
  return (
    <div className='flex flex-col px-20 py-2 '>
      <div className=' w-full flex items-center justify-center space-x-10 px-5 py-12 mb-5 bg-gray-50'>
        <img c src={playlistInfo[0]?.snippet?.thumbnails?.medium?.url}alt={playlistInfo[0]?.snippet?.title}
        className="rounded-lg h-32 w-32"
        />
        <div className='flex flex-col space-y-5 b'>
             <div className='flex justify-between gap-x-4'>
                <span className=' text-lg font-semibold'>Playlist name: {" "}{playlistInfo[0]?.snippet?.title}</span>
                <span className=' text-base'>Published:{" "}{moment(playlistInfo[0]?.snippet?.publishedAt,'YYYYMMDD').fromNow()}</span>
             </div>
             <div className='flex space-x-10 text-gray-600'>
              <span className='text-lg font-semibold'>Channel name</span>
              <Link className='text-gray-700 hover:text-black' to={`/channel-detail/${playlistInfo[0]?.snippet?.channelId}`}>{ playlistInfo[0]?.snippet?.channelTitle } 
              </Link>
             </div>
        </div>
      </div>

       <Videos videos={playlistVideos} />
     </div>
  )
}

export default PlaylistDetail