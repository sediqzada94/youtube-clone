import { useState, useEffect } from 'react'
import { Videos } from '../components'
import { fetchApiData } from "../utils/fetchApiData";
import { Loading,VideoCategoryLinks } from '../components'
import Error from '../components/Core/Error';
const Home = ({ selectedVideoCategory, setSelectedVideoCategory }) => {
  const [videos, setVideos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
 
  useEffect( () => {
    setIsLoading(true)
    const fetchData = async () => {
      try {
        const data = await fetchApiData(`search?part=snippet&q=${selectedVideoCategory}`);
        setVideos(data.items);
        setIsLoading(false);
      } catch (error) {
        if (error?.response?.status === 429) {
          setIsError(true);
          setIsLoading(false);
          console.log("Errorrrr:", error);
        }
      }
    };
  
    fetchData();
    return () => {  
    }
  }, [selectedVideoCategory])
  return (
    <>
        {isError ? <Error /> :
        <div className=''>
            <VideoCategoryLinks  selectedVideoCategory={selectedVideoCategory} setSelectedVideoCategory={setSelectedVideoCategory}/>
            { videos.length !== 1 && <h1 className=' mx-24 my-6 text-xl font-semibold'>
            <span className='px-2 py-1 rounded-md bg-gray-300 dark:bg-gray-500 capitalize'>{selectedVideoCategory.length > 0 ? selectedVideoCategory : 'All' }</span> videos
            </h1>}
            {isLoading ? <Loading /> :
            <Videos videos={videos} setVideos = { setVideos } />
            }
        </div>
}
    </>
  )
}

export default Home