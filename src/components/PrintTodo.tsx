import React from "react";
import { Todo } from "../types/Todo";

const PrintTodo: React.FC<{
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todoState: boolean;
}> = ({ todos, setTodos, todoState }) => {
  const filteredTodo = todos.filter((todo) => todo.isDone === todoState);
  const onHandleIsDone = (id: string) => {
    const changedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(changedTodos);
  };
  const onHandleDeleteTodo = (id: string) => {
    const filteredTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodo);
  };
  return (
    <ul>
      {filteredTodo.map((todo) => {
        return (
          <li key={todo.id}>
            <p>{todo.title}</p>
            <p>{todo.text}</p>
            <p>{todo.isDone.toString()}</p>
            <button onClick={() => onHandleIsDone(todo.id)}>
              {todo.isDone ? "취소" : "완료"}
            </button>
            <button onClick={() => onHandleDeleteTodo(todo.id)}>삭제</button>
          </li>
        );
      })}
    </ul>
  );
};

export default PrintTodo;
