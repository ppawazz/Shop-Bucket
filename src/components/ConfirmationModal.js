import React from "react";

const ConfirmationModal = ({ isOpen, closeModal, confirmAction }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Are you sure?</h2>
        <div className="modal-buttons">
          <button onClick={confirmAction} className="modal-button confirm">
            Yes
          </button>
          <button onClick={closeModal} className="modal-button cancel">
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
