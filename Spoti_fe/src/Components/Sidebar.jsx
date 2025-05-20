import React, { useState } from 'react'
import { assets,albumsData } from '../assets/frontend-assets/assets'
import TooltipWrapper from './TooltipWrapper'

function Sidabar() {


  return (
    <div className='px-2 h-full rounded-md '>
        <div className='h-full bg-[#121212] rounded-md p-4 flex flex-col'>
            <div className='flex h-8 items-center justify-between '>
                <img className='w-7 cursor-pointer' src={assets.stack_icon} alt="" />
                <div className='flex items-center gap-4 justify-between '>
                    <TooltipWrapper title={"Create a folder, plalist, jam"}>
                        <img className='w-5 cursor-pointer' src={assets.plus_icon} alt="" />
                    </TooltipWrapper>
                    <TooltipWrapper title={"Expand your library"}>
                        <img className='w-5 cursor-pointer' src={assets.arrow_right} alt="" />
                    </TooltipWrapper>
                </div>
            </div>
            <div className='flex relative h-8 items-center justify-between mt-6'>
                <TooltipWrapper title="Search your libraries" className={"bottom-7 right-4"}>
                    <img className='w-5  cursor-pointer' src={assets.search_icon} alt="" />
                </TooltipWrapper> 
                <p className='cursor-pointer'>Recents</p>
            </div>

            <div className='mt-4 overflow-y-auto flex-grow' id="scroll">
                <div className='flex h-16 p-2 rounded-md mt-2 hover:bg-[#242424] cursor-pointer '>
                        <img className='w-12 rounded-md' src={assets.liked_songs} alt="" />
                        <div className='ml-2 flex flex-col gap-[3px] overflow-hidden'>
                            <p className='text-sm whitespace-nowrap overflow-ellipsis overflow-hidden font-medium tracking-wider w-full'>Liked Songs</p>
                            <p className='text-xs text-[#b3b3b3] whitespace-nowrap overflow-ellipsis overflow-hidden font-medium w-full mt-[2px]'>Playlist • 23</p>
                        </div>
                    </div>
                {albumsData.map((item, id) => (
                    <div key={id} className='flex h-16 p-2 rounded-md mt-2 hover:bg-[#242424] cursor-pointer '>
                        <img className='w-12 rounded-md' src={item.image} alt="" />
                        <div className='ml-2 flex flex-col gap-[3px] overflow-hidden'>
                            <p className='text-sm whitespace-nowrap overflow-ellipsis overflow-hidden font-medium tracking-wider w-full'>Chill lofi study beats</p>
                            <p className='text-xs text-[#b3b3b3] whitespace-nowrap overflow-ellipsis overflow-hidden font-medium w-full mt-[2px]'>Album • 23</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Sidabar