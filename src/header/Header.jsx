// import React from "react";
// import "./header.css";

// export default function Header() {
//   return (
//     <div className="header">
//       <div className="hdrtitle">
//         <div className="hdrttlsm">BLOG</div>
//       </div>
//       <img
//         className="hdrimg"
//         // src="https://images.pexels.com/photos/1233414/pexels-photo-1233414.jpeg?auto=compress&cs=tinysrgb&w=300"
//         src="https://images.pexels.com/photos/1122639/pexels-photo-1122639.jpeg?auto=compress&cs=tinysrgb&w=600"
//         // src="https://images.pexels.com/photos/10404277/pexels-photo-10404277.jpeg?auto=compress&cs=tinysrgb&w=600"
//         alt=""
//       />
//     </div>
//   );
// }

import React from "react";
import './header.css'
function Header() {
  return (
    <div className="header">
      <div className="headertitles">
        {/* <div className="hdrttlsm">REACT AND NODE</div> */}
        <div className="hfrttllg"> BLOGVILLA</div>
      </div>
{/*       
      <img src="https://images.pexels.com/photos/10588452/pexels-photo-10588452.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
       */}
       <img src="https://images.pexels.com/photos/2534523/pexels-photo-2534523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      className="headerimg"
      alt="skjdm" />
    </div>
  );
}

export default Header;





