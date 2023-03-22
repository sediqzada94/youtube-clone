
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer, VideoCard, ChannelCard, VideoCategoryLinks } from "./components";
import { Home } from './pages';
import { fetchApiData } from "./utils/fetchApiData";
function App() {
  const [showMenu, setShowMenu] = useState(true) 
  const [darkMode, setDarkMode] = useState(false);
   
  return (
       <div className={`${darkMode ? 'dark' : ''}`}>
         <div className="flex w-full h-auto dark:bg-gray-700 dark:text-white">
          <Sidebar /> 
          <div className="flex flex-col justify-between flex-1">
          <Navbar darkMode={darkMode} setShowMenu={()=> setShowMenu(true)}
           onClick = {()=> setDarkMode(!darkMode) } />
          <VideoCategoryLinks />
          <div className='flex flex1 min-h-screen'>
            <BrowserRouter>
             <Routes>
                <Route path='/' exact element={<Home/>} />
                <Route path='/video/:id' element={<VideoCard/>} />
             </Routes>
            </BrowserRouter>
            </div>
          <Footer />
          </div>
         </div>
       </div>
  )
}

export default App
