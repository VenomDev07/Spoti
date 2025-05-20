import React, { useContext, useEffect, useState } from 'react'
import { assets, songsData } from '../assets/frontend-assets/assets'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { PlayerContext } from '../Context/PlayerContext';

function Album() {
  const { albumData, artistData, setCurrentAlbumId } = useContext(PlayerContext);
  const [play, setPlay] = useState(false);
  const [songData, setSongData] = useState([]);
  const [AlbumsData, setAlbumData] = useState({});
  const [ArtistsData, setArtistsData] = useState([]);
  const { id } = useParams()

  const getSongByAlbumId = async() => {
    const res = await axios.post(`http://localhost:3001/songs/getSongByAlbumId`,{id})
    setSongData(res.data)
  }

  const getAlbumData = () => {
    const res = albumData.find(item => item.id == id)
    const artistId = res?.artistId
    getArtistData(artistId)
    setAlbumData(res)
  }
  
  const getArtistData = (id) => {
    const res = artistData.find(item => item.id == id)
    setArtistsData(res)
  }

  useEffect(() => {
    getSongByAlbumId()
    getAlbumData()
    setCurrentAlbumId(id)
  },[albumData,artistData])

  useEffect(() => {
    if(songData.length > 0){}
    if(albumData.length > 0){}
    if(ArtistsData.length > 0){}
  },[])

  return (
    <div className='w-full h-full rounded-md flex flex-col home-color'>
      <div className='flex-1 flex flex-col overflow-y-auto' id='scroll'>
        <div className='h-[43%] flex w-full pt-8 pl-4 pb-2 rounded-t-md bg-[rgba(255,255,255,0.2)]'>
          <div className='w-60 h-w-60 rounded-md ' >
            <img className='w-60 h-w-60 rounded-sm ' src={AlbumsData?.coverImage} alt="" />
          </div>
          <div className='flex w-full flex-col gap-3 mt-4 ml-[2%]'>
            <p className='tracking-wide font-medium text-sm '>Playlist</p>
            <div className='flex w-full'>
              <p className='w-[95%] font-bold tracking-tight text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl '>{AlbumsData?.title}</p>
            </div>
            <p className='font-bold'>{ArtistsData?.name} <span className='text-[#b3b3b3] text-sm'>• 329 Songs</span></p>
          </div>
        </div>
        <div className='flex p-5 items-center justify-between'>
          <div className='inline-flex'>
            <div className='w-14 h-w-14 rounded-full bg-black cursor-pointer '>
              {play ? <img  onClick={() => setPlay(false)} className='w-full hover:scale-[1.05]' src={assets.green_pause_icon} alt="" /> :
                      <img  onClick={() => setPlay(true)} className='w-full hover:scale-[1.05]' src={assets.spotify_play} alt="" />
              }
              
            </div>
          </div>
          <div className='inline-flex items-center gap-4'>
            <div className='font-medium text-sm text-[#b3b3b3]'>List</div>
            <div className='w-4 cursor-pointer'><img className='w-full' src={assets.list_icon} alt="" /></div>
          </div>
        </div>
        {/* Album Grid DATA */}
        <div className='w-full  flex-1'>
          <AlbumData arr={songData}/>
        </div>
      </div>
    </div>
  )
}

const AlbumData = ({arr}) => {
  const { playWithId } = useContext(PlayerContext);
  return(
      <div className='flex flex-col justify-center h-fit'>
        <div className='flex w-full gap-3  border-b-[0.5px] pb-1 border-b-[#b3b3b3]'>
          <div  className='w-[10%] h-8 flex items-end justify-center font-semibold  text-sm text-[#b3b3b3]'>#</div>
          <div  className='w-[30%] h-8 flex items-end justify-start  font-semibold text-sm text-[#b3b3b3] '>Title</div>
          <div  className='w-[25%] h-8 flex items-end justify-start  font-semibold text-sm text-[#b3b3b3] '>Album</div>
          <div  className='w-[25%] h-8 flex items-end justify-center font-semibold  text-sm text-[#b3b3b3]'>Date Added</div>
          <div  className='w-[10%] h-8 flex items-end justify-center font-semibold  text-sm text-[#b3b3b3]  '><img className='w-4 h-4 object-cover object-center' src={assets.clock_icon} alt="" /></div>
        </div>
      {arr.map((item,i) => {
        return(
          <div key={i} onClick={() => playWithId(item.id)} className='flex w-full rounded-md hover:bg-[rgba(255,255,255,0.2)] gap-3 items-center'>
            <div className='w-[10%] flex items-center justify-center  h-14 text-center text-[#b3b3b3] text-[15px] font-medium'>{item?.id}</div>
            <div className='w-[30%] flex items-center h-14 text-center '><div className='ml-1 min-w-10 w-10 min-h-10 h-10 rounded-md'><img className='min-w-10 w-10 h-10 min-h-10 rounded-md' src={item?.imageUrl} alt="" /></div><div className='flex flex-col gap-[1px] justify-end items-start pl-3'><p className='text-sm font-medium text-white hover:underline cursor-pointer line-clamp-1 whitespace-nowrap overflow-ellipsis overflow-hidden'>{item.title}</p><p className='text-[13px] font-medium text-[#b3b3b3] hover:underline cursor-pointer line-clamp-1 whitespace-nowrap overflow-ellipsis overflow-hidden'>{item.artist}</p></div></div>
            <div className='w-[25%] flex items-center h-14 text-center'><p className='hover:underline cursor-pointer text-[#b3b3b3] text-[15px] font-medium'>{item?.album?.title}</p></div>
            <div className='w-[25%] flex items-center justify-center text-[#b3b3b3] text-sm font-medium h-14 text-center'>{item?.dateAdded}</div>
            <div className='w-[10%] flex items-center justify-center h-14 text-center text-[#b3b3b3] text-[15px] font-medium'>{item?.duration}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Album