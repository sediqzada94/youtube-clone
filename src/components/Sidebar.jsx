import React from 'react'
import { useState } from 'react'
import { videoCategoryLinks } from '../utils/constants'
import { CloseButton } from '.'
import { AiOutlineMenu } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Sidebar = ({ selectedVideoCategory, setSelectedVideoCategory }) => {
    const [showSidebar, setshowSidebar] = useState(false)
    // const [currentLink, setCurrentLink] = useState('laravel')
        const position = {
            top: 'top-2',
            right: 'right-2'
                      }
        return (
        <>
          {
          !showSidebar ?
            (
          <button onClick={()=>{setshowSidebar(true)}}
              className='absolute top-6 left-5 hover:bg-gray-100 dark:bg-gray-600
                dark:hover:bg-gray-700 p-3 rounded-full hover:scale-110'>
              <AiOutlineMenu />
              </button>
            ) :
            (
            <div className='fixed inset-0 bg-gray-600/50 z-40 transition-opacity' onClick={()=>setshowSidebar(false)}></div>
            )
          }
          <aside className='fixed top-0 left-0 h-screen z-50'>
                <div className={`flex flex-col justify-between p-5 pb-1 h-screen hover:overflow-y-auto
                bg-white dark:bg-gray-800 dark:text-white shadow-lg sm:w-64 w-[70vw] absolute 
                  ease-in-out duration-300 -translate-x-full  ${showSidebar && 'translate-x-0'} overflow-hidden  shadow-md`}>
                <div className='group relative w-full flex justify-between border-b pb-2'>
                <Link to='/' className='p-2 cursor-pointer flex text-red-500 hover:text-red-600 rounded-md px-3 group transition-all'
                onClick={ () => { setShowSidebar(false) }}
                >
                    <FaYoutube size={30}/>
                    <span className='ml-2 items-center text-xl tracking-wider leading-8 text-gray-700 dark:text-gray-200 group-hover:text-black dark:group-hover:text-gray-300 uppercase'>Youtube</span>
                 </Link>
                <CloseButton top={position.top} right={position.right} hidden={false}
                onClick={()=> { setshowSidebar(false) }}
                />
              </div>
              <div className='flex-1 py-2 overflow-hidden'>
                  <div className='text-lg font-semibold text-gray-700 dark:text-gray-200 my-2'>Explore Videos</div>
                  <div className='flex flex-col space-y-1'>
                    { videoCategoryLinks.map((link)=>(
                      <Link to="/" onClick={() => {setSelectedVideoCategory(link.name); setshowSidebar(false) } }
                       key={link.id} className={`px-5 py-1.5 flex place-items-center text-gray-600 dark:text-gray-200 hover:text-black hover:bg-gray-100
                        dark:hover:bg-gray-700 hover:mr-1 hover:translate-x-1 rounded-lg transition-color duration-200
                        ${selectedVideoCategory === link.name && 'bg-gray-200 dark:bg-gray-700 text-black'}`}>
                      {link.icon}<span className='ml-3 capitalize text-md'>{link.name}</span>
                      </Link>
                    )   
                    ) }
                  </div>
              </div>
              <div className='mt-4 text-center text-sm px-4 py-1 bg-gray-100 dark:bg-gray-700'>Samiullah Sediqzada</div>
            </div>
              
          </aside>
    </>
  )
}

export default Sidebar