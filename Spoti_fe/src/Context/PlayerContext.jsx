import {createContext, useEffect, useRef, useState } from "react"
import { songsData } from "../assets/frontend-assets/assets";
import axios from "axios";


export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const url = 'http://localhost:3001'

    const [songData,setSongData] = useState([]);
    const [albumData,setAlbumsData] = useState([]);
    const [randomSongData,setRandomSongData] = useState([]);
    const [artistData, setArtistData] = useState([]);

    const [currentAlbumId, setCurrentAlbumId] = useState(null);


    const [track,setTrack] = useState(songData[0]);
    const [playStatus,setPlayStatus] = useState(false);
    const [time,setTime] = useState({
            currentTime : {
                minute: 0,
                second: 0
            },
            totalTime : {
                minute: 0,
                second: 0
            }
        })
    
    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false)
    }

    const playWithId = async (id) => {
        await songData.map((item) =>{
            if(id == item._id){
                setTrack(item);
            }
        })
        audioRef.current.play();
        setPlayStatus(true);
    }

    const previous = async ()=>{
        songData.map(async (item,index) => {
            if(track._id == item._id && index > 0){
                await setTrack(songData[index-1])
                await audioRef.current.play();
                setPlayStatus(true);
            }
        })
    }

    const next = async () => {
        songData.map(async (item,index) => {
            if(track._id == item._id && index < songData.length){
                await setTrack(songData[index+1])
                await audioRef.current.play();
                setPlayStatus(true);
            }
        })
    }

    const getSongData = async () => {
        try {
            const res = await axios.get(`${url}/songs/allSongs`);
            setSongData(res.data)
            setTrack(res.data[0])
        } catch (error) {
            console.log(error)
        }
    }


    const getAlbumData = async () => {
        try {
            const res = await axios.get(`${url}/albums/allAlbum`);
            setAlbumsData(res.data)
        } catch (error) {
            console.log(error)
        }
    }

  const getArtistData = async() => {
    try {
          const res = await axios.get(`${url}/artists/allArtist`)
          setArtistData(res.data)
        } catch (error) {
            console.log(error)
        }
  }
  
  useEffect(()=>{
    if(songData.length > 0 && albumData.length > 0 && artistData.length > 0){
      
    }
  },[])

  useEffect(()=>{
    getSongData()
    getAlbumData()
    getArtistData()
  },[])

    const seekSong = async (e)=> {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration)
    }

    useEffect(()=>{
        setTimeout(()=>{

            audioRef.current.ontimeupdate = () => {
                
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration * 100))+"%"
                
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                })
            }

        },1000)
    },[audioRef])


    const contextValue = {
        seekBar,
        seekBg,
        audioRef,
        track,
        playStatus,
        play,pause,
        playWithId,
        next,previous,
        seekSong,
        randomSongData,songData,albumData,artistData,time,
        setCurrentAlbumId,currentAlbumId
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;