// src/hooks/useTaskList.test.tsx
import { renderHook, act } from "@testing-library/react";
import useTaskList from "./useTaskList";
import * as todoService from "../../../../services/todoService";

// Mocks de los servicios
jest.mock("../../../../services/todoService", () => ({
  fetchTodos: jest.fn(),
  deleteTodo: jest.fn(),
}));

describe("useTaskList", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should initialize with loading state and empty todos", () => {
    const { result } = renderHook(() => useTaskList());
    expect(result.current.isLoading).toBe(true);
    expect(result.current.todos).toEqual([]);
    expect(result.current.currentPage).toBe(1);
  });

  it("should fetch todos on mount", async () => {
    const mockTodos = [
      { id: 1, title: "Task 1", completed: false },
      { id: 2, title: "Task 2", completed: false },
      { id: 3, title: "Task 3", completed: false },
    ];

    (todoService.fetchTodos as jest.Mock).mockResolvedValueOnce(mockTodos);

    const { result, waitForNextUpdate } = renderHook(() => useTaskList());

    // Espera a que se complete la carga de datos
    await waitForNextUpdate();

    expect(todoService.fetchTodos).toHaveBeenCalledTimes(1);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.todos).toEqual(mockTodos);
  });

  it("should add a todo", () => {
    const { result } = renderHook(() => useTaskList());
    const newTodo = { id: 4, title: "Task 4", completed: false };

    act(() => {
      result.current.addTodo(newTodo);
    });

    expect(result.current.todos).toEqual([newTodo]);
  });

  it("should delete a todo", async () => {
    const mockTodos = [
      { id: 1, title: "Task 1", completed: false },
      { id: 2, title: "Task 2", completed: false },
    ];
    (todoService.fetchTodos as jest.Mock).mockResolvedValueOnce(mockTodos);
    (todoService.deleteTodo as jest.Mock).mockResolvedValueOnce({});

    const { result, waitForNextUpdate } = renderHook(() => useTaskList());

    // Espera a que se complete la carga de datos
    await waitForNextUpdate();

    expect(result.current.todos).toHaveLength(2);

    act(() => {
      result.current.handleDeleteClick(1);
      act(() => {
        result.current.confirmDelete();
      });
    });

    expect(todoService.deleteTodo).toHaveBeenCalledWith(1);
    expect(result.current.todos).toHaveLength(1);
  });

  it("should capitalize the first letter of a string", () => {
    const { result } = renderHook(() => useTaskList());
    const capitalized = result.current.capitalizeFirstLetter("hello");
    expect(capitalized).toBe("Hello");
  });

  it("should handle page changes correctly", () => {
    const { result } = renderHook(() => useTaskList());
    act(() => {
      result.current.handlePageChange(2);
    });
    expect(result.current.currentPage).toBe(2);
  });

  it("should not change page if the page number is out of range", () => {
    const { result } = renderHook(() => useTaskList());
    act(() => {
      result.current.handlePageChange(0); // Invalid page
    });
    expect(result.current.currentPage).toBe(1);
  });
});
