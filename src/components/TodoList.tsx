import styled from "styled-components";
import AddTodo from "./AddTodo";
import PrintTodo from "./PrintTodo";

function TodoList() {
  return (
    <>
      <StHeader>
        <h1>Todo</h1>
      </StHeader>
      <AddTodo />
      <StTodoContainer>
        <StTodoTag>할 일 목록</StTodoTag>
        <PrintTodo todoState={false} />
        <StTodoTag>완료 목록 </StTodoTag>
        <PrintTodo todoState={true} />
      </StTodoContainer>
    </>
  );
}

export default TodoList;
const StHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  & h1 {
    font-size: 50px;
    font-weight: 800;
  }
`;
const StTodoContainer = styled.div`
  padding: 40px;
`;
const StTodoTag = styled.p`
  font-size: 30px;
  margin: 10px;
`;
