import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import TransactionChartWrapper from "./components/TransactionChartWrapper";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TransactionChartWrapper />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
