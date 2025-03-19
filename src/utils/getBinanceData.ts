import { bincanceDataToObject, DataFromBinance } from "./binanceDataConverter";

export const getBinanceData = async () => {
  const res = await fetch("http://127.0.0.1:8080/https://binance.com/api/v3/klines?symbol=ETHBTC&interval=1s");
  if (!res.ok) throw "Failed to fetch data";
  const data: DataFromBinance[] = await res.json();
  const convertedData = bincanceDataToObject(data);
  return convertedData;
};
