import { useQuery } from "@tanstack/react-query";

import dayjs from "dayjs";
import ReactECharts from "echarts-for-react";
import { FC, useEffect } from "react";
import toast from "react-hot-toast";
import { ChartInterval, getBinanceData } from "../utils/getBinanceData";

type TransactionChartProps = {
  chartInterval: ChartInterval;
};

const TransactionChart: FC<TransactionChartProps> = ({ chartInterval }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["binanceData", chartInterval],
    queryFn: () => getBinanceData(chartInterval),
    refetchInterval: 20000,
    retry: 0,
  });

  useEffect(() => {
    if (error) toast.error("Failed to fetch data");
  }, [error]);

  return (
    <ReactECharts
      showLoading={isLoading}
      style={{ width: "800px", height: "500px" }}
      option={{
        title: {
          text: "ETH/BTC price",
          padding: [15, 325],
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
          scale: true,
        },
        series: [
          {
            data: data?.map((unit) => unit.closePrice),
            type: "line",
          },
        ],
        tooltip: {
          trigger: "axis",
        },
      }}
    />
  );
};

export default TransactionChart;
