// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { closemodal } from './store/slice';

// const PopupModal = () => {
//   const isOpen = useSelector((state) => state.modalreducer.isopen);
//   const dispatch = useDispatch();

//   const handleCloseModal = () => {
//     dispatch(closemodal());
//   };

//   if (!isOpen) {
//     return null; // Render nothing if the modal is closed
//   }

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <div className="modal-content">
//           <h2>Popup Modal</h2>
//           <p>This is the content of the popup modal.</p>
//           <button onClick={handleCloseModal}> X </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopupModal;

// import React from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../store/modalslice";
import "./popup.css";
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
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
        <button onClick={handleCloseModal}>Close Modal</button>
      </div>
    </div>
  );
};

export default Modal;