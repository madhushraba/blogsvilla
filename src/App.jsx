import { useState } from 'react'

import './App.css'
import Topbar from './topbar/Topbar'
import Home from './pages/home/Home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='body'>
      <Topbar/>
      <Home/>
    </div>
  )
}

export default App
