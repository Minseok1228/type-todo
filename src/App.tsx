import { QueryClient, QueryClientProvider } from "react-query";
import TodoList from "./components/TodoList";
import GlobalStyles from "./styles/GlobalStyle";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <TodoList />
      </QueryClientProvider>
    </>
  );
}

export default App;
