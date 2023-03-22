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
         <VideoCategoryLinks  setSelectedVideoCategory={setSelectedVideoCategory}/>
        <h1 className=' mx-24 my-6 text-xl font-semibold'>
        <span className='px-2 py-1 rounded-md bg-gray-300 capitalize'>{selectedVideoCategory}</span> videos
        </h1>
        {isLoading ? <Loading /> :
        <Videos videos={videos} />
        }
    </div>
  )
}

export default Home