import React from 'react'
import { albumsData, assets, songsData } from '../assets/frontend-assets/assets'

function Home() {
  const conData = [
    {
      img: assets.liked_songs,
      name: "Liked Songs"
    },
    {
      img: albumsData[0].image,
      name: "KK"
    }
  ]
  return (
    <div className='bg-[#121212] pt-3 p-10 h-full rounded-md home-color'>

      <div className='py-4 flex gap-2'>
        <button className='inline-flex text-sm font-medium text-black bg-white px-3 py-1 rounded-full hover:scale-[1.02]'>All</button>
        <button className='inline-flex text-sm font-medium hover:text-black bg-[rgba(255,255,255,0.27)] hover:bg-white px-3 py-1 rounded-full hover:scale-[1.02]'>Music</button>
        <button className='inline-flex text-sm font-medium hover:text-black bg-[rgba(255,255,255,0.27)] hover:bg-white px-3 py-1 rounded-full hover:scale-[1.02]'>Podcasts</button>
      </div>

      <div className='inline-flex flex-wrap gap-3'>
        {conData.map((item , index) => (
            <div key={index} className='flex cursor-pointer  h-12 w-[232px] bg-[rgba(78,77,77,0.5)] rounded-md hover:bg-[rgba(255,242,242,0.5)]'>
              <img className='w-12 rounded-s-md ' src={item.img} alt="" />
              <div className='h-full w-full flex justify-start pl-2 items-center  '>
                <p className=' font-semibold text-sm '>{item.name}</p>
              </div>
            </div>    
        ))}
      </div>



      <div className='h-[90%] overflow-auto' id='scroll-2'>
        <div className='h-[1/3]'>
          <div className='flex items-center justify-between pt-5'>
            <a className='font-bold text-2xl' href="#">Made For Devendra</a>
            <a className='text-sm font-bold text-gray-400' href="#">Show more</a>
          </div>

          <div className='h-[10%] flex overflow-auto mt-5 rounded-md' id='inv-scroll'>
            {albumsData.map((item, index) => (
              <div key={index} className='h-full min-w-[177px] p-3 overflow-hidden cursor-pointer rounded-md hover:bg-[rgba(12,12,12,0.2)] '>
                <img className='h-[100%] rounded-md' src={item.image} alt="" /> 
                <p className='text-sm mt-2 text-[#b3b3b3] text-wrap text-ellipsis  font-semibold w-full '>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='h-[1/3]'>
          <div className='flex items-center justify-between pt-5'>
            <a className='font-bold text-2xl' href="#">Recommended For Today</a>
            <a className='text-sm font-bold text-gray-400' href="#">Show more</a>
          </div>

          <div className='h-auto flex overflow-auto mt-5 rounded-md' id='inv-scroll'>
            {songsData.map((item, index) => (
              <div key={index} className='h-full min-w-[177px] p-3 overflow-hidden cursor-pointer rounded-md hover:bg-[rgba(12,12,12,0.2)] '>
                <img className='h-40 rounded-md' src={item.image} alt="" /> 
                <p className='text-sm mt-2 text-[#b3b3b3] text-wrap text-ellipsis font-semibold w-full '>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='h-[1/3]'>
          <div className='flex items-center justify-between pt-5'>
            <a className='font-bold text-2xl' href="#">Discover Picks For You</a>
            <a className='text-sm font-bold text-gray-400' href="#">Show more</a>
          </div>

          <div className='h-[10%] flex overflow-auto mt-5 rounded-md' id='inv-scroll'>
            {albumsData.map((item, index) => (
              <div key={index} className='h-full min-w-[177px] p-3 overflow-hidden cursor-pointer rounded-md hover:bg-[rgba(12,12,12,0.2)] '>
                <img className='h-[100%] rounded-md' src={item.image} alt="" /> 
                <p className='text-sm mt-2 text-[#b3b3b3] text-wrap text-ellipsis font-semibold w-full '>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>      
    </div>

    
  )
}

export default Home