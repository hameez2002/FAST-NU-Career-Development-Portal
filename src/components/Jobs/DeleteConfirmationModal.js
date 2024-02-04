import React from "react";
// import { Modal, Button } from "react-bootstrap";
import "./DeleteConfirmationModal.css";

const DeleteConfirmationModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className="w-8 h-10 text-white" onClick={onCancel}>X</button>
        </div>
        <div className="title">
          <h1 className="text-black mt-[-1rem]">Are you sure you want to delete job?</h1>
        </div>
        <div className="body">
          {/* <p>The next page looks amazing. Hope you want to go there!</p> */}
        </div>
        <div className="footer">
          <button onClick={onCancel} id="cancelBtn">
            Cancel
          </button>
          <button onClick={onConfirm} id="deleteBtn">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
