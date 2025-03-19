import { FC, useState } from "react";
import TransactionChart from "./TransactionChart";
import { ChartInterval } from "../utils/getBinanceData";

const TransactionChartWrapper: FC = () => {
  const [chartInterval, setChartInterval] = useState<ChartInterval>("1m");

  return (
    <div className='w-dvw grid place-items-center'>
      <div>
        <h3 className='text-2xl text-center mb-4'>Select interval</h3>
        <div className='flex gap-4 mb-4'>
          <button
            onClick={() => setChartInterval("1s")}
            className={chartInterval === "1s" ? "bg-gray-600" : "bg-gray-900"}
          >
            1s
          </button>
          <button
            onClick={() => setChartInterval("1m")}
            className={chartInterval === "1m" ? "bg-gray-600" : "bg-gray-900"}
          >
            1m
          </button>
          <button
            onClick={() => setChartInterval("1h")}
            className={chartInterval === "1h" ? "bg-gray-600" : "bg-gray-900"}
          >
            1h
          </button>
          <button
            onClick={() => setChartInterval("1x")}
            className={chartInterval === "1x" ? "bg-gray-600" : "bg-gray-900"}
          >
            trigger error
          </button>
        </div>
      </div>
      <TransactionChart chartInterval={chartInterval} />
    </div>
  );
};

export default TransactionChartWrapper;
