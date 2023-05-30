import React from 'react'
import Topbar from './topbar/Topbar'
import Home from './pages/home/Home'
import Header from './header/Header'

const Landingpage = () => {
  return (
    <div>
        <div className='body'>
      {/* <Topbar/> */}
      <Header/>
      <Home/>
    </div>
    </div>
  )
}

export default Landingpage