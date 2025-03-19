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
            className={`bg-gray-${chartInterval === "1s" ? "400" : "950"}`}
          >
            1s
          </button>
          <button
            onClick={() => setChartInterval("1m")}
            className={`bg-gray-${chartInterval === "1m" ? "400" : "950"}`}
          >
            1m
          </button>
          <button
            onClick={() => setChartInterval("1h")}
            className={`bg-gray-${chartInterval === "1h" ? "400" : "950"}`}
          >
            1h
          </button>
        </div>
      </div>
      <TransactionChart chartInterval={chartInterval} />
    </div>
  );
};

export default TransactionChartWrapper;
