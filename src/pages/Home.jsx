import { useState, useEffect } from 'react'
import { Videos } from '../components'
import { fetchApiData } from "../utils/fetchApiData";
import { Loading,VideoCategoryLinks } from '../components'
const Home = ({ selectedVideoCategory, setSelectedVideoCategory }) => {
  const [videos, setVideos] = useState([])
  const [isLoading, setisLoading] = useState(false)
 
  useEffect( () => {
    setisLoading(true)
    fetchApiData(
     `search?part=snippet&q=${selectedVideoCategory}`
     ).then((data)=>{
         setVideos(data.items)
         setisLoading(false)
     });
    return () => {  
    }
  }, [selectedVideoCategory])
  return (
    <div className='p-4'>
         <VideoCategoryLinks  selectedVideoCategory={selectedVideoCategory} setSelectedVideoCategory={setSelectedVideoCategory}/>
        { videos.length !== 1 && <h1 className=' mx-24 my-6 text-xl font-semibold'>
        <span className='px-2 py-1 rounded-md bg-gray-300 capitalize'>{selectedVideoCategory.length > 0 ? selectedVideoCategory : 'All' }</span> videos
        </h1>}
        {isLoading ? <Loading /> :
        <Videos videos={videos} setVideos = { setVideos } />
        }
    </div>
  )
}

export default Home