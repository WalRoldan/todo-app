
import React from "react";
import TaskForm from "../TaskForm";
import "./TaskList.css";
import Modal from "../../utils/Modal/modal";
import useTaskList from "./hooks/useTaskList";
import DeleteIcon from "../../utils/DeleteIcon/DeleteIcon";

const TaskList: React.FC = () => {
  const {
    isModalOpen,
    handleCloseModal,
    addTodo,
    isLoading,
    todos,
    currentPage,
    totalPages,
    capitalizeFirstLetter,
    handleDeleteClick,
    isConfirmModalOpen,
    confirmDelete,
    setIsConfirmModalOpen,
    handleOpenModal,
    handlePageChange, 
  } = useTaskList();

  return (
    <div className="task-list-container">
      <h1 className="titleData">Mis tareas</h1>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <TaskForm closeModal={handleCloseModal} addTodo={addTodo} />
          </div>
        </div>
      )}

      {isLoading ? (
        <p>Cargando tareas...</p>
      ) : (
        <ul className="task-items">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`task-item ${todo.completed ? "completed" : ""}`}
            >
              <div className="task-content">
                <h2 className="task-title">
                  {capitalizeFirstLetter(todo.title)}
                </h2>
                <p className="task-description">
                  {todo.description
                    ? todo.description
                    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                </p>
                <DeleteIcon onClick={() => handleDeleteClick(todo.id)} />
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="pagination">
        <button
          className="pagination-arrow"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &#8249; 
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`pagination-button ${
              currentPage === index + 1 ? "actual" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="pagination-arrow"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &#8250; 
        </button>
      </div>

      <Modal
        isOpen={isConfirmModalOpen}
        message="¿Estás seguro de que quieres eliminar esta tarea?"
        onConfirm={confirmDelete}
        onCancel={() => setIsConfirmModalOpen(false)}
      />

      <button className="add-task-button" onClick={handleOpenModal}>
        <span>Añadir tarea</span>
      </button>
    </div>
  );
};

export default TaskList;

