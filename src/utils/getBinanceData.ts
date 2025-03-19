import { bincanceDataToObject, DataFromBinance } from "./binanceDataConverter";

export type ChartInterval = "1s" | "1m" | "1h";

export const getBinanceData = async (chartInterval: ChartInterval = "1m") => {
  const res = await fetch(
    `http://127.0.0.1:8080/https://binance.com/api/v3/klines?symbol=ETHBTC&interval=${chartInterval}`
  );
  if (!res.ok) throw "Failed to fetch data";
  const data: DataFromBinance[] = await res.json();
  const convertedData = bincanceDataToObject(data);
  return convertedData;
};
