import React from 'react'
import { assets } from '../assets/frontend-assets/assets'
import { useNavigate } from 'react-router-dom'

function Header() {

  const navigate = useNavigate
  
  return (
    <div className='p-2 h-full flex justify-between items-center'>
        <div className='flex items-center gap-6 min-w-[200px] w-[600px] max-w-[600px]  '>
          <img className='w-8 h-8 rounded-full ml-5 cursor-pointer' src={assets.spotify_logo} alt="" />
          <img className='w-8 h-8 rounded-full cursor-pointer' src={assets.home_icon} alt="" />
          <input className='h-12 w-[100%] px-4 flex rounded-full bg-[#242424]' type="text" placeholder='What do you want to play ?' />
        </div>
        <div className='flex items-center gap-6' id='header-con'>
          <button className='p-2 rounded-full font-medium  bg-white text-sm text-black'>Explore Premium</button>
          <button className='p-2 rounded-full font-medium  text-sm'>Install App</button>
          <button className='w-9 h-9 bg-green-500 rounded-full ml-5 cursor-pointer'>D</button>
        </div>
    </div>
  )
}

export default Header