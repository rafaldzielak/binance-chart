import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TransactionChart from "./components/TransactionChart";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TransactionChart />
    </QueryClientProvider>
  );
}

export default App;
