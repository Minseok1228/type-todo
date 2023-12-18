import { QueryClient, QueryClientProvider } from "react-query";
import TodoList from "./components/TodoList";
import GlobalStyles from "./styles/GlobalStyle";
import CustomModal from "./components/customModal/CustomModal";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <CustomModal />
        <TodoList />
      </QueryClientProvider>
    </>
  );
}

export default App;
