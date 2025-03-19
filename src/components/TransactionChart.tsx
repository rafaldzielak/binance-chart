import { useQuery } from "@tanstack/react-query";

import dayjs from "dayjs";
import ReactECharts from "echarts-for-react";
import { FC, useEffect } from "react";
import toast from "react-hot-toast";
import { getBinanceData } from "../utils/getBinanceData";

const TransactionChart: FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["binanceData"],
    queryFn: getBinanceData,
    refetchInterval: 20000,
    retry: 0,
  });

  useEffect(() => {
    if (error) toast.error("Failed to fetch data");
  }, [error]);

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
    </div>
  );
};

export default TransactionChart;
