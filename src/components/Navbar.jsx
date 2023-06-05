
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom';


const navbar = ({ onClick, darkMode, setDarkMode, setShowMenu, selectedVideoCategory, setSelectedVideoCategory }) => {
    const handleDarkModeToggle = () => {
        setDarkMode((prev) => !prev);
        localStorage.setItem('darkMode', !darkMode)
    }
  return (
    <nav className='flex flex-col justify-between bg-white dark:bg-gray-800 shadow-md h-auto  p-4 py-6 w-full'>
        <div className='flex justify-between items-center justify-items-center bg-red-30'>
            <div className=' hidden sm:flex items-center gap-4 md:gap-10 pl-4'>
               <Link to='/' className='text-red-500 hover:text-red-600 text-3xl ml-20 '>
                 <FaYoutube /> 
                </Link>
            </div>
             <SearchBar selectedVideoCategory={selectedVideoCategory} setSelectedVideoCategory={ setSelectedVideoCategory} />
            <button className='flex items-center justify-center mr-3 sm:mr-6 w-12 h-12 rounded-full border
             shadow-inner hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 text-red-500 hove:text-red-600'
             onClick = {handleDarkModeToggle}>
               { darkMode ? <BsMoonFill /> : <BsSunFill /> }
               
            </button>
        </div>
       
    </nav>
  )
}

export default navbar