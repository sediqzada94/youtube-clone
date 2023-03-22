import { useState, useEffect } from 'react'
import { Videos } from '../components'
import { fetchApiData } from "../utils/fetchApiData";
import { Loading } from '../components'
const Home = () => {
  const [videos, setVideos] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [selectedVideoCategory, setselectedVideoCategory] = useState('tailwind')

  useEffect( () => {
    setisLoading(true)
   const data = fetchApiData(
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
        <h1 className=' mx-24 mb-6 text-xl font-semibold'>
        <span className='px-2 py-1 rounded-md bg-gray-300'>All</span> videos
        </h1>
        {isLoading ? <Loading /> :
        <Videos videos={videos} />
        }
    </div>
  )
}

export default Home