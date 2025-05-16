import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import spotify_play from './spotify_play.png'
import list_icon from './list.png'
import liked_songs from './liked-songs.jpg'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import song1 from  './song1.mp3'
import song2 from  './song2.mp3'
import song3 from  './song3.mp3'
import green_pause_icon from './pause_green_icon.png'

export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon,
    spotify_play,
    list_icon,
    liked_songs,
    green_pause_icon
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Global",
        image: img8,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Top 50 India",
        image: img9,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "Trending India",
        image: img10,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Trending Global",
        image: img16,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Mega Hits",
        image: img11,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Happy Favorites",
        image: img15,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210"
    },
    {   
        id:2,
        name: "Trending India",
        image: img10,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Trending Global",
        image: img16,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Mega Hits",
        image: img11,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
]

export const songsData = [
        {
        id: 1,
        name: "Lose Yourself",
        artist: "Eminem",
        image: img1,
        file: song1,
        desc: "Eminem's Oscar-winning anthem about seizing every moment. Raw, intense, and motivational.",
        duration: "5:26",
        dateAdded: "Nov 19, 2024"
    },
    {
        id: 2,
        name: "Doja",
        artist: "Central Cee",
        image: img2,
        file: song2,
        desc: "Central Cee's viral hit that blends clever UK rap bars with a catchy hook.",
        duration: "1:37",
        dateAdded: "Nov 20, 2024"
    },
    {
        id: 3,
        name: "Blinding Lights",
        artist: "The Weeknd",
        image: img3,
        file: song3,
        desc: "The Weeknd's retro-pop banger that revives the '80s with a modern twist.",
        duration: "3:20",
        dateAdded: "Nov 21, 2024"
    },
    {
        id: 4,
        name: "God's Plan",
        artist: "Drake",
        image: img4,
        file: song1,
        desc: "Drake delivers an anthem of gratitude, purpose, and success with global appeal.",
        duration: "3:18",
        dateAdded: "Nov 22, 2024"
    },
    {
        id: 5,
        name: "Shake It Off",
        artist: "Taylor Swift",
        image: img5,
        file: song2,
        desc: "Taylor Swift’s fun, upbeat track encouraging self-love and ignoring the haters.",
        duration: "3:39",
        dateAdded: "Nov 23, 2024"
    },
    {
        id: 6,
        name: "Not Afraid",
        artist: "Eminem",
        image: img6,
        file: song3,
        desc: "Eminem’s powerful comeback track about overcoming fear and adversity.",
        duration: "4:10",
        dateAdded: "Nov 24, 2024"
    },
    {
        id: 7,
        name: "Sprinter",
        artist: "Central Cee & Dave",
        image: img7,
        file: song1,
        desc: "Central Cee & Dave team up in this track about speed, success, and street smarts.",
        duration: "3:49",
        dateAdded: "Nov 25, 2024"
    },
    {
        id: 8,
        name: "Starboy",
        artist: "The Weeknd ft. Daft Punk",
        image: img8,
        file: song2,
        desc: "The Weeknd and Daft Punk craft a dark, glamorous track on fame and transformation.",
        duration: "3:50",
        dateAdded: "Nov 26, 2024"
    },
    {
        id: 9,
        name: "In My Feelings",
        artist: "Drake",
        image: img9,
        file: song3,
        desc: "Drake’s viral hit with a bouncy beat and heartfelt lyrics that inspired a dance craze.",
        duration: "3:37",
        dateAdded: "Nov 27, 2024"
    },
    {
        id: 10,
        name: "Love Story",
        artist: "Taylor Swift",
        image: img10,
        file: song1,
        desc: "Taylor Swift retells Romeo & Juliet in a country-pop twist full of longing and hope.",
        duration: "3:55",
        dateAdded: "Nov 28, 2024"
    },
    {
        id: 11,
        name: "Without Me",
        artist: "Eminem",
        image: img11,
        file: song2,
        desc: "Eminem's playful, chaotic take on fame and media obsession, full of sharp bars.",
        duration: "4:50",
        dateAdded: "Nov 29, 2024"
    },
    {
        id: 12,
        name: "Let Go",
        artist: "Central Cee",
        image: img12,
        file: song3,
        desc: "Central Cee raps vulnerably about relationships and past trauma in this emotional track.",
        duration: "2:50",
        dateAdded: "Nov 30, 2024"
    },
    {
        id: 13,
        name: "Save Your Tears",
        artist: "The Weeknd",
        image: img13,
        file: song1,
        desc: "A synth-laced heartbreak anthem from The Weeknd, dripping with nostalgia.",
        duration: "3:36",
        dateAdded: "Dec 1, 2024"
    },
    {
        id: 14,
        name: "One Dance",
        artist: "Drake ft. Wizkid & Kyla",
        image: img14,
        file: song2,
        desc: "Drake’s dancehall-inspired summer hit with global rhythms and smooth vibes.",
        duration: "2:54",
        dateAdded: "Dec 2, 2024"
    },
    {
        id: 15,
        name: "Cruel Summer",
        artist: "Taylor Swift",
        image: img15,
        file: song3,
        desc: "Taylor Swift's euphoric synth-pop love song full of tension and release.",
        duration: "2:58",
        dateAdded: "Dec 3, 2024"
    },
    {
        id: 16,
        name: "Mockingbird",
        artist: "Eminem",
        image: img16,
        file: song1,
        desc: "Eminem’s emotional letter to his daughter Hailie — heartfelt and honest.",
        duration: "4:11",
        dateAdded: "Dec 4, 2024"
    }
]