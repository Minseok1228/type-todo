import React, { useState } from "react";
import PrintTodo from "./components/PrintTodo";
import { Todo } from "./types/Todo";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      <h1>Todo</h1>
      <AddTodo setTodos={setTodos} />
      <ul>할 일 목록</ul>
      <PrintTodo todos={todos} setTodos={setTodos} todoState={false} />
      <ul>완료 목록</ul>
      <PrintTodo todos={todos} setTodos={setTodos} todoState={true} />
    </>
  );
}

export default App;
