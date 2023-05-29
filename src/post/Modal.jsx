import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../store/modalslice";
import "./popup.css";
import ModalForm from "./ModalForm";
const Modal = () => {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  if (!isOpen) {
    return null; // Render nothing if the modal is closed
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <ModalForm/>
        {/* <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
        <button onClick={handleCloseModal}>Close Modal</button> */}
      </div>
    </div>
  );
};

export default Modal;
