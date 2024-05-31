import React from "react";

const ConfirmationModal = ({ isOpen, closeModal, confirmAction }) => {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h2>Are you sure?</h2>
        <button onClick={confirmAction}>Yes</button>
        <button onClick={closeModal}>No</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
