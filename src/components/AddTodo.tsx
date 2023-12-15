import React, { useState } from "react";
import { v4 } from "uuid";
import { Todo } from "../types/Todo";

const AddTodo: React.FC<{
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}> = ({ setTodos }) => {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const onHandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: v4(),
      title,
      text,
      isDone: false,
    };
    setTodos((prev) => prev.concat(newTodo));
    setTitle("");
    setText("");
  };
  return (
    <form onSubmit={onHandleSubmit}>
      <input
        placeholder="제 목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="내 용 "
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>등록하기</button>
    </form>
  );
};

export default AddTodo;
