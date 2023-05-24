import React from 'react' 

import './topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PinterestIcon from '@mui/icons-material/Pinterest';import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
function Topbar() {
  return (
    <div className='top'>
        <div className="topleft">
            <FacebookIcon/>
            <TwitterIcon/>
            <PinterestIcon/>
            <InstagramIcon
            />
        </div>
        <div className="topmid">
            <ul className="midlist">
                <li className="listitem">HOME</li>
                <li className="listitem">ABOUT</li>
                <li className="listitem">CONTACT</li>
                <li className="listitem">WRITE</li>
                <li className="listitem">PROFILE</li>
            </ul>
        </div>
        <div className="topright">
        <SearchIcon/>
        <img src="dcd.png" alt="pic" />
        </div>
    </div>
  )
}

export default Topbar