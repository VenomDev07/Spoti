import { useContext, useEffect } from 'react'
import { assets, songsData } from '../assets/frontend-assets/assets'
import { useNavigate } from 'react-router-dom'
import { PlayerContext } from '../Context/PlayerContext'

function Home() {
  
  const {albumData, songData, artistData} = useContext(PlayerContext);
  useEffect(() => {
    if(albumData.length > 0){
      conData.push(
        {
        img: albumData[0].coverImage,
        name: "KK"
        }
      )
    }
  },[])
  const conData = [
    {
      img: assets.liked_songs,
      name: "Liked Songs"
    },
  ]
  return (
    
    <div className='bg-[#121212] pt-3 p-10 h-full rounded-md home-color'>

      <div className='py-4 flex gap-2'>
        <button className='inline-flex text-sm font-medium text-black bg-white px-3 py-1 rounded-full hover:scale-[1.02]'>All</button>
        <button className='inline-flex text-sm font-medium hover:text-black bg-[rgba(255,255,255,0.27)] hover:bg-white px-3 py-1 rounded-full hover:scale-[1.02]'>Music</button>
        <button className='inline-flex text-sm font-medium hover:text-black bg-[rgba(255,255,255,0.27)] hover:bg-white px-3 py-1 rounded-full hover:scale-[1.02]'>Podcasts</button>
      </div>

      <div className='inline-flex flex-wrap mb-5 gap-3'>
        {conData.map((item , index) => (
            <div key={index} className='flex cursor-pointer  h-12 w-[232px] bg-[rgba(78,77,77,0.5)] rounded-md hover:bg-[rgba(202,202,202,0.2)]'>
              <img className='w-12 rounded-s-md ' src={item.img} alt="" />
              <div className='h-full w-full flex justify-start pl-2 items-center  '>
                <p className=' font-semibold text-sm '>{item.name}</p>
              </div>
            </div>    
        ))}
      </div>



      <div className='h-[90%] overflow-auto' id='scroll-2'>
        <SongStackCompo name={'Made For Devendra'} arr={albumData} type={'album'} />
        <SongStackCompo name={'Recommended For Today'} arr={songData} type={'song'}/>
        <SongStackCompo name={'Discover Picks For You'} arr={albumData} type={'album'}/>
      </div>
    </div>

    
  )
}

const SongStackCompo = ({name, arr, type}) => {
  const navigate = useNavigate();
  return (
    <div className='h-[1/3]'>
      <div className='flex items-center justify-between pt-5'>
        <a className='font-bold text-2xl hover:underline' href="#">{name}</a>
        <a className='text-sm font-bold text-gray-400 hover:underline' href="#">Show more</a>
      </div>

      <div className='h-[10%] flex overflow-auto mt-5 rounded-md' id='inv-scroll'>
        {arr.map((item, index) => (
          <div key={index} onClick={() => {type = "album" ? navigate(`album/${item.id}`) : navigate('/')}} className='h-full min-w-[177px] w-[177px] p-3 overflow-hidden cursor-pointer rounded-md hover:bg-[rgba(202,202,202,0.2)] '>
            <img className='w-full rounded-md' src={(type = 'album'?item.coverImage:item.imageUrl)} alt="" /> 
            <p className='text-sm mt-2 text-[#b3b3b3] text-wrap text-ellipsis line-clamp-2  font-semibold w-full '>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home