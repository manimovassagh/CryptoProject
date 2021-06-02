import React from 'react';
import { Area } from '@ant-design/charts';
import { CoingeckoHistoryData } from '../../Types/CoingeckoHistoryData';
import { useCoingeckoCryptoApi } from '../../CustomHooks/Coingecko.CryptoApi';
import { useParams } from 'react-router-dom';
import { Skeleton } from 'antd';


const CoinChart: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [coingekoCoinsHistoryData] = useCoingeckoCryptoApi<CoingeckoHistoryData>("GET", `coins/${id}/market_chart?vs_currency=eur&days=90&interval=daily`)


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
  return <Area {...config} />;
};

export default CoinChart;