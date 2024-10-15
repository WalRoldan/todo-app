import React from 'react';
import './modal.css';

interface ConfirmModalProps {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Modal: React.FC<ConfirmModalProps> = ({ isOpen, message, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="confirm-modal">
        <p>{message}</p>
        <div className="modal-actions">
          <button className="btn btn-cancel" onClick={onCancel}>Cancelar</button>
          <button className="btn btn-confirm" onClick={onConfirm}>Confirmar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
