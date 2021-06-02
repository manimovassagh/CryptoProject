import React from 'react';
import { Line } from '@ant-design/charts';
import { CoingeckoHistoryData } from '../../Types/CoingeckoHistoryData';
import { useCoingeckoCryptoApi } from '../../CustomHooks/Coingecko.CryptoApi';
import { useParams } from 'react-router-dom';
import { Skeleton } from 'antd';

const DemoLine: React.FC = () => {
  const { id } = useParams<any>()

  const [coingekoCoinsHistoryData] = useCoingeckoCryptoApi<CoingeckoHistoryData>("GET", `coins/${id}/market_chart?vs_currency=eur&days=30&interval=daily`)
  console.log(coingekoCoinsHistoryData?.prices)


  if (!coingekoCoinsHistoryData) { return <Skeleton /> }
  const config = {
    data: coingekoCoinsHistoryData?.prices.map(_priceArray => ({ price: _priceArray[1], timeStamp: _priceArray[0] })),
    xField: 'timeStamp',
    yField: 'price',
    xAxis: {
      type: 'timeCat',
      tickCount: 5,
    },
  };
  return <Line {...config} />;
};

export default DemoLine;