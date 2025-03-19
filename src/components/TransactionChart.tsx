import { useQuery } from "@tanstack/react-query";

const getBinanceData = async () => {
  const res = await fetch("http://127.0.0.1:8080/https://binance.com/api/v3/klines?symbol=ETHBTC&interval=1h");
  const data = await res.json();
  return data;
};

const TransactionChart = () => {
  const { data, isLoading, error } = useQuery({ queryKey: ["binanceData"], queryFn: getBinanceData });

  console.log({ data, isLoading, error });
  return <div>TransactionChart</div>;
};

export default TransactionChart;
