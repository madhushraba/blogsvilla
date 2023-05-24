import React from "react";
import "./sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebartitle">ABOUT ME</span>
        <img
        className="sbimg"
          // src="https://images.pexels.com/photos/1233414/pexels-photo-1233414.jpeg?auto=compress&cs=tinysrgb&w=300"
          // src="https://images.pexels.com/photos/15604050/pexels-photo-15604050/free-photo-of-female-model-posing-in-a-purple-glowing-cube.jpeg?auto=compress&cs=tinysrgb&w=600"
          src="https://images.pexels.com/photos/11824539/pexels-photo-11824539.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
          voluptatibus, pariatur sed perferendis iusto aliquid tempore, sit odio
          nemo accusamus aliquam? Nostrum distinctio dolore at tempore nisi est
          voluptatem dicta amet! Accusamus, repudiandae?
        </p>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">CATEGORIES</span>
        <ul className="sidebarlist">
          <li className="sidebarliitem">lifestyle</li>
          <li className="sidebarliitem">fashion</li>
          <li className="sidebarliitem">health</li>
          <li className="sidebarliitem">tech</li>
          <li className="sidebarliitem">selfcare</li>
          <li className="sidebarliitem">music</li>
        </ul>
      </div>
    </div>
  );
}
