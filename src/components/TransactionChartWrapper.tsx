import { FC, useState } from "react";
import TransactionChart from "./TransactionChart";
import { ChartInterval } from "../utils/getBinanceData";

const ButtonTrigger: FC<{
  chartInterval: ChartInterval;
  intervalToSet: ChartInterval;
  text: string;
  onClick: () => void;
}> = ({ intervalToSet, onClick, text, chartInterval }) => (
  <button onClick={onClick} className={intervalToSet === chartInterval ? "bg-gray-600" : "bg-gray-900"}>
    {text}
  </button>
);

const TransactionChartWrapper: FC = () => {
  const [chartInterval, setChartInterval] = useState<ChartInterval>("1m");

  return (
    <div className='w-dvw grid place-items-center'>
      <div>
        <h3 className='text-2xl text-center mb-4'>Select interval</h3>
        <div className='flex gap-4 mb-4'>
          <ButtonTrigger
            intervalToSet='1s'
            onClick={() => setChartInterval("1s")}
            chartInterval={chartInterval}
            text='1s'
          />
          <ButtonTrigger
            intervalToSet='1m'
            onClick={() => setChartInterval("1m")}
            chartInterval={chartInterval}
            text='1m'
          />
          <ButtonTrigger
            intervalToSet='1h'
            onClick={() => setChartInterval("1h")}
            chartInterval={chartInterval}
            text='1h'
          />
          <ButtonTrigger
            intervalToSet='1x'
            onClick={() => setChartInterval("1x")}
            chartInterval={chartInterval}
            text='trigger error'
          />
        </div>
      </div>
      <TransactionChart chartInterval={chartInterval} />
    </div>
  );
};

export default TransactionChartWrapper;
