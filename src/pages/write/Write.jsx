import React from "react";
import ModalForm from '../../post/ModalForm'
import "./write.css";
// import AddIcon from "@mui/icons-material/Add";

const Write = () => {
  return (
    <div className="write">
      <form className="writeForm">
        <img
          // src="https://images.pexels.com/photos/1122637/pexels-photo-1122637.jpeg?auto=compress&cs=tinysrgb&w=300"
          src="https://images.pexels.com/photos/3041110/pexels-photo-3041110.jpeg"
          alt="image"
          className="writeImg"
        />
        {/* <div className="writeFormGroup">
          <label className="label" htmlFor="fileInput">
           + add pic
          
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput2"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button> */}
        <ModalForm/>
      </form>
    </div>
  );
};

export default Write;
