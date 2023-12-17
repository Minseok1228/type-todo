import React, { useState } from "react";
import { v4 } from "uuid";
import { Todo } from "../types/Todo";
import { useMutation, useQueryClient } from "react-query";
import { addTodo } from "../api/todosApi";
import styled from "styled-components";

const AddTodo = () => {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const qureyClient = useQueryClient();
  const addMutation = useMutation(addTodo, {
    onSuccess: () => {
      qureyClient.invalidateQueries("todos");
    },
  });
  const onHandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !text) {
      alert("제목 또는 내용을 입력해 주세요.");
      return;
    }
    const newTodo: Todo = {
      id: v4(),
      title,
      text,
      isDone: false,
      createdAt: Date.now(),
    };
    addMutation.mutate(newTodo);
    setTitle("");
    setText("");
  };
  return (
    <StAddForm onSubmit={onHandleSubmit}>
      <StInput
        placeholder="제 목 (13자 이내로 입력해 주세요.)"
        value={title}
        maxLength={13}
        onChange={(e) => setTitle(e.target.value)}
      />
      <StInput
        placeholder="내 용 (60자 이내로 입력해 주세요.)"
        value={text}
        maxLength={60}
        onChange={(e) => setText(e.target.value)}
      />
      <StSubmitBtn>등록하기</StSubmitBtn>
    </StAddForm>
  );
};

export default AddTodo;
const StAddForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const StInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  width: 220px;
`;
const StSubmitBtn = styled.button`
  border-radius: 10px;
  font-size: 20px;
  background-color: #dadada;
  color: white;
  border: none;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: #b1b1b1;
    color: white;
  }
`;
