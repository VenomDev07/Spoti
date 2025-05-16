import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Album from './Album'

function Main() {
  return (
    
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='album/:id' element={<Album/>} />
        </Routes>
    
  )
}

export default Main