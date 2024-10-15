import React, { useState } from "react";
import "./TaskForm.css";
import { addTodo as saveTodoToServer } from "../../services/todoService";
import CloseIcon from "../utils/CloseIcon/CloseIcon";

const TaskForm: React.FC<{
  closeModal: () => void;
  addTodo: (newTodo: {
    id: number;
    title: string;
    description: string;
    completed: boolean;
  }) => void;
}> = ({ closeModal, addTodo }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    const newTodo = {
      id: Date.now(),
      title: taskTitle.charAt(0).toUpperCase() + taskTitle.slice(1),
      description: taskDescription,
      completed: false,
    };

    try {
      const savedTodo = await saveTodoToServer(newTodo);

      addTodo(savedTodo);

      setTaskTitle("");
      setTaskDescription("");
      closeModal();
    } catch (error) {
      console.error("Error al agregar la tarea:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="close-icon" onClick={closeModal}>
          <CloseIcon onClick={closeModal} />
        </div>

        <h2 className="modal-title">Añadir tarea</h2>

        <form onSubmit={handleSubmit}>
          <div className="task-input-container">
            <label className="task-title-label">Nombre</label>
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="task-input"
              placeholder="Nombre"
              required
            />
          </div>

          <div className="task-input-container">
            <label className="task-description-label">Descripción</label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="task-textarea"
              placeholder="Descripción"
              required
            />
          </div>

          <div className="modal-buttons">
            <button
              type="button"
              className="btn btn-cancel"
              onClick={closeModal}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSaving}
            >
              {isSaving ? "Guardando..." : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
