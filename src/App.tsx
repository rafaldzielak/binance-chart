import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TransactionChart from "./components/TransactionChart";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TransactionChart />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
