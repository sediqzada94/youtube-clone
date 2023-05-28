
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer, VideoCard, } from "./components";
import { Home, VideoDetail, ChannelDetail, PlaylistDetail } from './pages';

function App() {
  const [showMenu, setShowMenu] = useState(true) 
  const [darkMode, setDarkMode] = useState(false);
  const [selectedVideoCategory, setSelectedVideoCategory] = useState('tailwind')
 
  return (
      <BrowserRouter>
       <div className={`${darkMode ? 'dark' : ''}`}>
         <div className="flex w-full h-auto dark:bg-gray-700 dark:text-white">
          <Sidebar selectedVideoCategory={selectedVideoCategory} setSelectedVideoCategory={ setSelectedVideoCategory}  /> 
          <div className="flex flex-col justify-between flex-1">
          <Navbar darkMode={darkMode} setShowMenu={()=> setShowMenu(true)}
          selectedVideoCategory={selectedVideoCategory} setSelectedVideoCategory={ setSelectedVideoCategory}
           onClick = {()=> setDarkMode(!darkMode) } />
          <div className='flex flex1 min-h-screen'>
             <Routes>
                <Route path='/' exact element={<Home selectedVideoCategory={selectedVideoCategory} 
                 setSelectedVideoCategory={setSelectedVideoCategory}/>} />
                <Route path='/video-detail/:videoId' element={<VideoDetail/>} />
                <Route path='/channel-detail/:channelId' element={<ChannelDetail/>} />
                <Route path='/playlist-detail/:playlistId' element={<PlaylistDetail/>} />
             </Routes>
            </div>
          <Footer />
          </div>
         </div>
       </div>
     </BrowserRouter>
  )
}

export default App
