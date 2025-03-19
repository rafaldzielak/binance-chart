import { useQuery } from "@tanstack/react-query";

import dayjs from "dayjs";
import ReactECharts from "echarts-for-react";
import { FC } from "react";
import { bincanceDataToObject, DataFromBinance } from "../utils/binanceDataConverter";

const getBinanceData = async () => {
  const res = await fetch("http://127.0.0.1:8080/https://binance.com/api/v3/klines?symbol=ETHBTC&interval=1s");
  const data: DataFromBinance[] = await res.json();
  const convertedData = bincanceDataToObject(data);
  return convertedData;
};

const TransactionChart: FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["binanceData"],
    queryFn: getBinanceData,
    refetchInterval: 20000,
  });

  console.log({ error });

  return (
    <div>
      <ReactECharts
        showLoading={isLoading}
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
            data: data?.map((unit) => dayjs(unit.klineOpenTime).format("DD-MM HH:MM:ss")),
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
    </div>
  );
};

export default TransactionChart;
