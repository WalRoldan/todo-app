import axios from "axios";
import { toast } from "react-toastify";
const handleApiError = (error: any, message: string) => {
  console.error(message, error);
  toast.error(message);
};

const handleSuccess = (message: string) => {
  console.log("success");
  toast.success(message);
};

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = async () => {
  try {
    const response = await axios.get(`${API_URL}?_limit=3`);
    return response.data;
  } catch (error) {
    handleApiError(error, "Error al obtener las tareas");
    throw error;
  }
};

export const addTodo = async (newTodo: {
  title: string;
  completed: boolean;
}) => {
  try {
    const response = await axios.post(API_URL, newTodo);
    handleSuccess("Tarea agregada con éxito");
    return response.data;
  } catch (error) {
    handleApiError(error, "Error al agregar la tarea");
    throw error;
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    handleSuccess("Tarea eliminada con éxito");
    return response.data;
  } catch (error) {
    handleApiError(error, "Error al eliminar la tarea");
    throw error;
  }
};
