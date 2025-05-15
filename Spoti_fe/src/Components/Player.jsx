import React from 'react'
import { albumsData, assets } from '../assets/frontend-assets/assets'

function Player() {
  return (
    <div id='playerGrid'>
        <div className='flex p-3 items-center h-full' id='songInfo'>
          <img className='w-12 rounded-md' src={albumsData[0].image} alt="" />
          <div className='ml-2 overflow-hidden'>
            <p className='text-sm font-semibold whitespace-nowrap overflow-ellipsis overflow-hidden w-full'>{albumsData[0].name}</p>
            <p className='text-xs font-semibold text-[#b3b3b3] whitespace-nowrap overflow-ellipsis overflow-hidden w-full'>{albumsData[0].desc}</p>
          </div>
        </div>
        <div id='player'>
          <div className='flex flex-col  h-full'>
            <div className='h-[55%] bg-black inline-flex gap-5 justify-center items-center pt-4'>
              <img className='w-4 h-4 cursor-pointer hover:scale-[1.05]' src={assets.shuffle_icon} alt="" />
              <img className='w-4 h-4 cursor-pointer hover:scale-[1.05]' src={assets.prev_icon} alt="" />
              <img className='w-[18px] h-[18px] cursor-pointer hover:scale-[1.05] ' src={assets.play_icon} alt="" />
              <img className='w-4 h-4 cursor-pointer hover:scale-[1.05]' src={assets.next_icon} alt="" />
              <img className='w-4 h-4 cursor-pointer hover:scale-[1.05]' src={assets.loop_icon} alt="" />
            </div>
            <div className='inline-flex h-[45%] justify-center gap-2 bg-black items-center '>
              <p className='text-sm font-semibold'>00:00</p>
              <div className='inline-flex h-[3.4px] w-[68%] rounded-full bg-gray-500 player-parent cursor-pointer'>
                <div className='inline-flex h-[3.4px] w-[80%] rounded-full bg-white player-child hover:bg-green-400 '></div>
              </div>
              <p className='text-sm font-semibold'>4:34</p>
            </div>
          </div>
        </div>
        <div id='playerSettings'>
          <div className="flex h-full gap-3 justify-center items-center p-4">
            <img className='w-4 cursor-pointer hover:scale-[1.05]' src={assets.plays_icon} alt="" />
            <img className='w-4 cursor-pointer hover:scale-[1.05]' src={assets.mic_icon} alt="" />
            <img className='w-4 cursor-pointer hover:scale-[1.05]' src={assets.queue_icon} alt="" />
            <img className='w-4 cursor-pointer hover:scale-[1.05]' src={assets.speaker_icon} alt="" />
            <img className='w-4 cursor-pointer hover:scale-[1.05]' src={assets.volume_icon} alt="" />
            <div className='inline-flex h-[3.4px] w-[30%] min-w-[14%] rounded-full bg-gray-500 player-parent cursor-pointer'>
                <div className='inline-flex h-[3.4px] w-[50%] rounded-full bg-white player-child hover:bg-green-400 '></div>
            </div>
            <img className='w-4 cursor-pointer hover:scale-[1.05]' src={assets.mini_player_icon} alt="" />
            <img className='w-4 cursor-pointer hover:scale-[1.05]' src={assets.zoom_icon} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Player