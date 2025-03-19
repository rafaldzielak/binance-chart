import { useQuery } from "@tanstack/react-query";

import ReactECharts from "echarts-for-react";
import { FC } from "react";
import { bincanceDataToObject, DataFromBinance } from "../utils/binanceDataConverter";
import dayjs from "dayjs";

const getBinanceData = async () => {
  const res = await fetch("http://127.0.0.1:8080/https://binance.com/api/v3/klines?symbol=ETHBTC&interval=1h");
  const data: DataFromBinance[] = await res.json();
  const convertedData = bincanceDataToObject(data);
  return convertedData;
};

const TransactionChart: FC = () => {
  const { data, isLoading, error } = useQuery({ queryKey: ["binanceData"], queryFn: getBinanceData });

  console.log({ data, isLoading, error });

  return (
    <>
      <ReactECharts
        style={{ width: "500px", height: "500px" }}
        option={{
          title: {
            text: "ETH/BTC price",
            padding: [15, 150],
            textStyle: {
              color: "white",
            },
          },
          grid: { top: 8, right: 8, bottom: 24, left: 36 },
          xAxis: {
            type: "category",
            data: data?.map((unit) => dayjs(unit.klineOpenTime).format("DD-MM HH-MM")),
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: data?.map((unit) => unit.closePrice),
              type: "line",
              smooth: true,
            },
          ],
          tooltip: {
            trigger: "axis",
          },
        }}
      />
    </>
  );
};

export default TransactionChart;
