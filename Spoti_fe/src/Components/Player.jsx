import React, { useEffect, useState } from 'react'
import { albumsData, assets } from '../assets/frontend-assets/assets'
import { useContext } from 'react'
import { PlayerContext } from '../Context/PlayerContext'

function Player() {

  const {track, audioRef, playStatus, play, pause, previous, next, seekBg, seekBar, seekSong, time} = useContext(PlayerContext)


  useEffect(() => {
    
  },[track])


  return (
    <div id='playerGrid'>
        <div className='flex p-3 items-center h-full' id='songInfo'>
          <img className='w-12 rounded-md' src={track?.imageUrl} alt="" />
          <div className='ml-2 overflow-hidden'>
            <p className='text-sm font-semibold whitespace-nowrap overflow-ellipsis overflow-hidden w-full'>{track?.title}</p>
            <p className='text-xs font-semibold text-[#b3b3b3] whitespace-nowrap overflow-ellipsis overflow-hidden w-full'>{track?.artist?.name || "Unknown Artist"}</p>
          </div>
        </div>
        <div id='player'>
          <div className='flex flex-col  h-full'>
            <div className='h-[55%] bg-black inline-flex gap-5 justify-center items-center pt-4'>
              <img className='w-4 h-4 cursor-pointer hover:scale-[1.05]' src={assets.shuffle_icon} alt="" />
              <img onClick={previous} className='w-4 h-4 cursor-pointer hover:scale-[1.05]' src={assets.prev_icon} alt="" />
              {playStatus ? <img onClick={pause} className='w-[18px] h-[18px] cursor-pointer hover:scale-[1.05] ' src={assets.pause_icon} alt="" />  :
                            <img onClick={play} className='w-[18px] h-[18px] cursor-pointer hover:scale-[1.05] ' src={assets.play_icon} alt="" />
              }
              
              <img onClick={next} className='w-4 h-4 cursor-pointer hover:scale-[1.05]' src={assets.next_icon} alt="" />
              <img className='w-4 h-4 cursor-pointer hover:scale-[1.05]' src={assets.loop_icon} alt="" />
            </div>
            <div className='inline-flex h-[45%] justify-center gap-2 bg-black items-center '>
              <p className='text-xs text-[#b3b3b3] font-medium'>{time.currentTime.minute}:{time.currentTime.second}</p>
              <div ref={seekBg} onClick={seekSong} className='inline-flex h-[3.4px] w-[68%] rounded-full bg-gray-500 player-parent cursor-pointer'>
                <div ref={seekBar} className='inline-flex h-[3.4px] w-[0%] rounded-full bg-white player-child hover:bg-green-400 '></div>
              </div>
              <p className='text-xs text-[#b3b3b3] font-medium'>{time.totalTime.minute}:{time.totalTime.second}</p>
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
        <audio ref={audioRef} src={track ? track.audioUrl : null} preload='auto'></audio>
    </div>

  )
}

export default Player