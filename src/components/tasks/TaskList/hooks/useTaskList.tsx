import { useEffect, useState } from "react";
import { deleteTodo, fetchTodos } from "../../../../services/todoService";

const useTaskList = () => {
  const [todos, setTodos] = useState<
    { id: number; title: string; description?: string; completed: boolean }[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const tasksPerPage = 3;
  const totalPages = Math.ceil(todos.length / tasksPerPage);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  const refreshTodos = async () => {
    setIsLoading(true);
    try {
      const todosData = await fetchTodos();
      setTodos(todosData);
    } catch (error) {
      console.error("Error al obtener las tareas:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const addTodo = (newTodo: {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
  }) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleDeleteClick = (id: number) => {
    setTodoToDelete(id);
    setIsConfirmModalOpen(true);
  };

  const confirmDelete = async () => {
    if (todoToDelete !== null) {
      try {
        await deleteTodo(todoToDelete);
        setTodos((prevTodos) =>
          prevTodos.filter((todo) => todo.id !== todoToDelete),
        );
      } catch (error) {
        console.error("Error al eliminar la tarea:", error);
      } finally {
        setIsConfirmModalOpen(false);
        setTodoToDelete(null);
      }
    }
  };

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    refreshTodos();
  }, []);
  const paginatedTodos = todos.slice(
    (currentPage - 1) * tasksPerPage,
    currentPage * tasksPerPage,
  );

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  return {
    isModalOpen,
    handleCloseModal,
    addTodo,
    isLoading,
    todos: paginatedTodos,
    capitalizeFirstLetter,
    handleDeleteClick,
    isConfirmModalOpen,
    confirmDelete,
    setIsConfirmModalOpen,
    handleOpenModal,
    currentPage,
    handlePageChange,
    totalPages,
  };
};
export default useTaskList;
