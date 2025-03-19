import { ChartInterval } from "./getBinanceData";

export type DataFromBinance = [
  number,
  string,
  string,
  string,
  string,
  string,
  number,
  string,
  number,
  string,
  string,
  string
];

export type BinanceDataFormatted = {
  klineOpenTime: number;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  closePrice: string;
};

export const bincanceDataToObject = (data: DataFromBinance[]) => {
  const convertedData: BinanceDataFormatted[] = [];
  data.forEach((unit) => {
    const [klineOpenTime, openPrice, highPrice, lowPrice, closePrice] = unit;
    convertedData.push({ klineOpenTime, openPrice, highPrice, lowPrice, closePrice });
  });

  return convertedData;
};

export const getRefetchInterval = (chartInterval: ChartInterval) => {
  switch (chartInterval) {
    case "1s":
      return 2 * 1000;
    case "1m":
      return 60 * 1000;
    case "1h":
      return 60 * 5 * 1000;
    default:
      return 60 * 1000;
  }
};
