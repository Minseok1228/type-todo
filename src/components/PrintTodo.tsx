import { Todo } from "../types/Todo";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteTodo, getTodos, switchTodo } from "../api/todosApi";
import styled from "styled-components";

const PrintTodo = ({ todoState }: { todoState: boolean }) => {
  const { isLoading, isError, data } = useQuery("todos", getTodos);
  const qureyClient = useQueryClient();

  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      qureyClient.invalidateQueries("todos");
    },
  });
  const switchMutation = useMutation(switchTodo, {
    onSuccess: () => {
      qureyClient.invalidateQueries("todos");
    },
  });

  const onHandleIsDone = (todo: Todo) => {
    switchMutation.mutate(todo);
  };
  const onHandleDeleteTodo = (id: string) => {
    deleteMutation.mutate(id);
  };
  if (isLoading) {
    return <p>로딩중....</p>;
  }
  if (isError) {
    return <p>오류가 발생!</p>;
  }
  const filteredTodo = data!.filter((todo: Todo) => {
    return todo.isDone === todoState;
  });
  return (
    <StTodoBox>
      {filteredTodo.map((todo: Todo) => {
        return (
          <StTodoCard key={todo.id}>
            <StTitle>{todo.title}</StTitle>
            <StText>{todo.text}</StText>
            <StBtnBox>
              <StBtn onClick={() => onHandleIsDone(todo)}>
                {todo.isDone ? "취소" : "완료"}
              </StBtn>
              <StBtn onClick={() => onHandleDeleteTodo(todo.id)}>삭제</StBtn>
            </StBtnBox>
          </StTodoCard>
        );
      })}
    </StTodoBox>
  );
};

export default PrintTodo;
const StBtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;
const StTodoBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 10px;
`;
const StTodoCard = styled.li`
  list-style-type: none;
  width: 200px;
  border: 3px solid black;
  border-radius: 15px;
  position: relative;
  padding: 10px;
`;

const StTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  padding: 10px;
`;
const StText = styled.p`
  padding: 10px;
  font-size: 15px;
  font-weight: 600;
`;
const StBtn = styled.button`
  border-radius: 10px;
  border: none;
  color: white;
  background-color: #dadada;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: #b1b1b1;
  }
`;
