import React, { useRef } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = ({ selectedVideoCategory, setSelectedVideoCategory }) => {
  const searchInputRef = useRef(null)
  const handleSearch = (e) => {
    if (e.type === 'click' || e.keyCode === 13){
    setSelectedVideoCategory(searchInputRef.current.value)
    }
  }
  return (
    <div className='flex justify-self-center sm:justify-between rounded-full border dark:border-none ml-16
     sm:ml-5 sm:w-[380px] overflow-hidden'>
        <input type="text" ref={searchInputRef} placeholder='Search...' className='flex w-full px-5 caret-red-600 py-2 dark:placeholder-white
         placeholder- focus:outline-none focus:shadow-inner  dark:shadow-none  dark:bg-gray-700  dark:text-white'
         onKeyDown={handleSearch}
         />
        <button className=' hidden sm:flex justify-center items-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-500
         dark:hover:bg-gray-600  px-5 text-2xl'
         onClick={handleSearch}
         ><AiOutlineSearch className='text-gray-600 dark:text-white' /></button>
    </div>
  )
}

export default SearchBar