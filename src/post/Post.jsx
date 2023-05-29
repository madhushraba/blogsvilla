import React from "react";

import AddIcon from "@mui/icons-material/Add";
import "./post.css";
import { openModal } from "../store/modalslice";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";

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
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus odio
        qui aperiam natus repellat aspernatur eligendi aliquid consequatur
        excepturi cum dolorem hic nulla assumenda inventore, velit sapiente non
        reiciendis provident nihil itaque incidunt!
      </p>
    </div>
  );
}
