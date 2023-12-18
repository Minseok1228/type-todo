import axios from "axios";
import { Todo } from "../types/Todo";
const todoAxios = axios.create({
  baseURL: "http://localhost:5000",
});
const getTodos = async () => {
  const res = await todoAxios.get<Todo[]>(`/todos?_sort=createdAt&_order=desc`);
  return res.data;
};
const addTodo = async (todo: Todo) => {
  await todoAxios.post(`/todos/`, todo);
};
const deleteTodo = async (id: string) => {
  await todoAxios.delete(`/todos/${id}`);
};
const switchTodo = async (todo: Todo) => {
  await todoAxios.patch(`/todos/${todo.id}`, {
    isDone: !todo.isDone,
  });
};

export { getTodos, deleteTodo, switchTodo, addTodo };
