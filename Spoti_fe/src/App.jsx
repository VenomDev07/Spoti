import { useState } from 'react'
import './App.css'
import Container1 from './Components/Container1'
import Container2 from './Components/Container2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen bg-black' id='container'>
      <Container1/>
      <Container2/>
    </div>
  )
}

export default App
