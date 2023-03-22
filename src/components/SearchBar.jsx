import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
  return (
    <div className='flex justify-self-center sm:justify-between rounded-full border dark:border-none ml-16
     sm:ml-5 sm:w-[380px] overflow-hidden'>
        <input type="text" placeholder='Search...' className='flex w-full px-5 caret-red-600 py-2 dark:placeholder-white
         placeholder- focus:outline-none focus:shadow-inner  dark:shadow-none  dark:bg-gray-700  dark:text-white' />
        <button className=' hidden sm:flex justify-center items-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-500
         dark:hover:bg-gray-600  px-5 text-2xl'><AiOutlineSearch className='text-gray-600 dark:text-white' /></button>
    </div>
  )
}

export default SearchBar