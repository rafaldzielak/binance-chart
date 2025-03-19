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
