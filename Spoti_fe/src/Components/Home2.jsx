import React from 'react'
import { albumsData, assets, songsData } from '../assets/frontend-assets/assets'

function Home2() {
  return (
    <div className=' pl-2 h-full'>
        <div className='bg-[#1f1f1f] h-full rounded-md flex flex-col' style={{ boxShadow: '-11px 1px 101px -34px rgba(0,0,0,1) inset' }}>
          <div className='w-full h-full rounded-md relative flex-1  overflow-y-auto ' id='scroll'>
            <div className='w-full h-full overflow-hidden relative'>
              <img className='w-dvw h-full rounded-md overflow-hidden object-cover object-center' src={songsData[0].image} alt="" />
              <div className='absolute inset-0 z-10 pointer-events-none rounded-md' style={{ boxShadow: '0px 65px 103px -59px rgba(0,0,0,1) inset' }}>
              </div>
              <div>
                <div className='z-10 absolute top-0 left-0 w-full h-full flex flex-col justify-between items-start '>
                  <div className='p-2 cursor-pointer'>
                    <h1 className='text-white font-bold text-2xl hover:underline '>{albumsData[0].name}</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className='h-[70%] w-[90%] bg-[rgba(65,62,62,0.3)] rounded-md absolute left-[5%] top-[480px] cursor-pointer'>
              <div className='relative h-full w-full flex flex-col rounded-md ' >
                <div className='h-[60%] w-[100%] rounded-md overflow-hidden cursor-pointer'style={{ boxShadow: '0px 65px 103px -59px rgba(0,0,0,1) inset' }} >
                  <img className='h-full w-full object-cover object-center rounded-md z-10'  src={songsData[2].image} alt="" />
                   <div className='absolute inset-0 z-10 pointer-events-none rounded-md' style={{ boxShadow: '0px 65px 103px -59px rgba(0,0,0,1) inset' }}>
                   </div>
                  <div>
                    <div className='absolute top-0 left-0 flex flex-col justify-start items-center z-10 '>
                      <div className='p-2'>
                        <h1 className='text-white font-bold text-base'>About the artist </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col flex-1 gap-2 pl-2 pt-4'>
                  <div className='text-base font-bold hover:underline '>Indila</div>
                  <div className='flex items-center justify-between w-full h-4'>
                    <p className='font-semibold text-base w-fit text-[#b3b3b3]'>13,895,234 <span className='pl-1 text-base'>monthly listeners</span></p>
                    <button className='rounded-full py-1 w-20 font-bold text-sm h-fit bg-transparent border-[0.3px] border-white '>Follow</button>
                  </div>
                  <div className='text-sm flex-1 mt-3 text-[#b3b3b3]'>
                    <p className='line-clamp-3 overflow-hidden text-sm font-semibold '>
                      British dance group Clean Bandit found crossover success by weaving classical music with dance-pop for a beat-driven yet refined sound -- often delivered with high-profile guest vocalists. After scoring their first hit with the multi-platinum international sensation "Rather Be," featuring  (from 2014's New Eyes), they issued a string of U.K. chart-toppers that proved successful around the world, including "Rockabye" with  and Anne-Marie, "Symphony" with , and "Solo" with , all of which were included on 2018's What Is Love? They again reached the U.K. Top Ten with 2020's "Tick Tock" featuring  before releasing 2021's "Higher" with .
                    </p>
                  </div>
                </div>
              </div>
              
              <div className='pb-2'>
                <div className='h-fit p-3  rounded-md my-3 bg-[rgba(65,62,62,0.3)]'>
                  <div className='flex items-center justify-between '>
                    <h1 className='text-[15px] font-bold'>Next in queue</h1>
                    <h1 className='text-sm font-semibold hover:scale-[1.02] text-[#b3b3b3] hover:underline'>Open queue</h1>
                  </div>
                  <div className='flex gap-2 mt-3'>
                    <img className='w-14 h-14 rounded-md' src={songsData[2].image} alt="" />
                    <div className='w-[60%]'>
                      <p className='font-semibold text-base '>{songsData[2].name}</p>
                      <p className='font-semibold text-[#b3b3b3] text-sm whitespace-nowrap overflow-ellipsis overflow-hidden'>{songsData[2].desc}</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home2