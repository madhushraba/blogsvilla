import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cardslice";
import { closeModal } from "../store/modalslice";
import './post.css'

const ModalForm = () => {
  const [inputval, setinputval] = useState(" ");
  const [inputval2, setinputval2] = useState(" ");
   {/* ////adding img */}
   const [img, setimg] = useState("https://images.pexels.com/photos/112314/pexels-photo-112314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");


   const dispatch = useDispatch();

  const evntchng = (e) => {
    setinputval(e.target.value);
  };
  const evntchng2 = (e) => {
    setinputval2(e.target.value);
  }; // console.log(inputval);

  const handlesubmit = (e) => {   //2 dispatches from 2 slices are called here addinput and closemodal
    e.preventDefault();
    dispatch(
      add({
        id: Math.random(),
        img:img,
        title: inputval,
        p: inputval2,
      })
    );
    dispatch(closeModal()); 
    setinputval(" ");
    console.log("imput addnew.jsx...", inputval);
  };

  return (
    <div className="addnew">
      <form onSubmit={handlesubmit} className="form">
        <input
          className="input"
          value={inputval}
          onChange={evntchng} // onChange={(e)=>setinputval(e.target.value)}
        />
        <textarea
          // className="input"
          value={inputval2}
          onChange={evntchng2} // for 2nd input
        />
        {/* <img
          className="input"
          value={img}
          // onChange={evntchng2} // for img
        /> */}
         <label htmlFor="fileinput" className="upload">
            {/* <button className="btn"> */}
              upload+
            {/* </button> */}
          </label>
          <input type="file" id='fileinput' style={{display:'none'}} />
        <button className="btn" onClick={handlesubmit}>
           +POST
        </button>
      </form>
    </div>
  );
};

export default ModalForm;
