import React from "react";

import AddIcon from "@mui/icons-material/Add";
import "./post.css";
import { openModal } from "../store/modalslice";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import Postcard from "./Postcards";

export default function Post() {
  const { isOpen } = useSelector((state) => state.modal);
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

        <button className="addicon" onClick={handleOpenModal}>
          <AddIcon />
        </button>
      </div>
      {isOpen && <Modal />}
      <Postcard/>
    </div>
  );
}
