import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/frontend-assets/assets'
import { PlayerContext } from '../Context/PlayerContext'
import { useParams } from 'react-router-dom';

function Home2() {
  const {songData, albumData, currentAlbumId} = useContext(PlayerContext);
  const [albumsData, setAlbumsData] = useState();
  

  const fetchAlbumData = (currentAlbumId) => {
    const res = albumData.find(item => item.id == currentAlbumId)
    console.log(res);
    setAlbumsData(res);
  }


  useEffect(() => {
    fetchAlbumData(currentAlbumId)
  },[albumData])

  useEffect(() => {
      if(songData.length){}
      if(albumData.length){}
    }, [])
  return (
    <div className=' pl-2 h-full'>
        <div className='bg-[#1f1f1f] h-full rounded-md flex flex-col' style={{ boxShadow: '-11px 1px 101px -34px rgba(0,0,0,1) inset' }}>
          <div className='w-full h-full rounded-md relative flex-1  overflow-y-auto ' id='scroll'>
            <div className='w-full h-full overflow-hidden relative'>
              <img className='w-dvw h-full rounded-md overflow-hidden object-cover object-center' src={albumsData?.coverImage} alt="" />
              <div className='absolute inset-0 z-10 pointer-events-none rounded-md' style={{ boxShadow: '0px 65px 103px -59px rgba(0,0,0,1) inset' }}>
              </div>
              <div>
                <div className='z-10 absolute top-0 left-0 w-full h-full flex flex-col justify-between items-start '>
                  <div className='p-2 cursor-pointer'>
                    <h1 className='text-white font-bold text-2xl hover:underline '>{albumsData?.name}</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className='h-[70%] w-[90%] bg-[rgba(65,62,62,0.3)] rounded-md absolute left-[5%] top-[480px] cursor-pointer'>
              <div className='relative h-full w-full flex flex-col rounded-md ' >
                <div className='h-[60%] w-[100%] rounded-md overflow-hidden cursor-pointer'style={{ boxShadow: '0px 65px 103px -59px rgba(0,0,0,1) inset' }} >
                  <img className='h-full w-full object-cover object-center rounded-md z-10'  src={albumsData?.artist.profileImage} alt="" />
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
                      {albumsData?.artist.bio}
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
                    <img className='w-14 h-14 rounded-md' src={albumsData?.coverImage} alt="" />
                    <div className='w-[60%]'>
                      <p className='font-semibold text-base '>{albumsData?.title}</p>
                      <p className='font-semibold text-[#b3b3b3] text-sm whitespace-nowrap overflow-ellipsis overflow-hidden'>{albumsData?.desc}</p>
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