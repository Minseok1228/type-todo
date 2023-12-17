import axios from "axios";
import { Todo } from "../types/Todo";

const getTodos = async () => {
  const res = await axios.get<Todo[]>(
    `${process.env.REACT_APP_SERVER_URL}/todos?_sort=createdAt&_order=desc`
  );
  return res.data;
};
const addTodo = async (todo: Todo) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos/`, todo);
};
const deleteTodo = async (id: string) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`);
};
const switchTodo = async (todo: Todo) => {
  await axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${todo.id}`, {
    isDone: !todo.isDone,
  });
};

export { getTodos, deleteTodo, switchTodo, addTodo };
