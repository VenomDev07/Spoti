import React from 'react'
import Header from './Header'
import Player from './Player'
import Home from './Home'

function Container2() {
  return (
    <div className='h-screen bg-black' id='container2'>
        <div id='header2'><Header/></div>
        <div id='main-con2'>Main-2</div>
        <div id='player2'>Player</div>
        <div id='tabs'>tabs</div>
    </div>
  )
}

export default Container2