import React from "react";
import './post.css'
import { useSelector } from "react-redux";

const Postcard = () => {
  const carditem = useSelector((store) => store.stateinstore.stateinslice); // console.log(store  ) // console.log("ci"+carditem);

  return (
    <>
      <span className="card">
        {carditem.map((xz) => (
          <div key={xz.id} className="carditem">
            <img className="img1" src={xz.img} key={xz.img}/>
            <h3> {xz.title}</h3>
            <p>{xz.p}</p>
          </div>
        ))}
      </span>
    </>
  );
};

export default Postcard;
