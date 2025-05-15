import React from 'react'
import Header from './Header'
import Sidabar from './Sidabar'
import Player from './Player'
import Home from './Home'
import Home2 from './Home2'

function Container1() {
  return (
    <div className='h-screen bg-black' id='container1'>
      <div id='header'><Header/></div>
      <div id='sidebar'><Sidabar/></div>
      <div id='main'><Home/></div>
      <div id='main2'><Home2/></div>
      <div id='player'><Player/></div>
    </div>
  )
}

export default Container1