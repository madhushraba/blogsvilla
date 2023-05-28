import React from "react";

import AddIcon from "@mui/icons-material/Add";
import "./post.css";
import { openModal } from "../store/modalslice";
import Modal from "./Popup";
import { useDispatch } from "react-redux";

export default function Post() {
  const dispatch = useDispatch();

  // openModal
  const handleOpenModal = () => {
    dispatch(openModal());
    console.log("open mdl");
  };

  return (
    <div className="post">
      <div className="feature">
        <h1>FEATURED POSTS</h1>
        <button className="addicon">
          {" "}
          <AddIcon />
        </button>
        {/* <div className="openmodal">
          <button className="openbtn" onClick={handleOpenModal}>
            Open Modal
          </button>
          <Modal />
        </div> */}
      </div>
      {/* <div className="addicon"></div> */}
    </div>
  );
}
