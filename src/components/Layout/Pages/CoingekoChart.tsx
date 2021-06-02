import React from 'react';
import { Area } from '@ant-design/charts';
import { CoingeckoHistoryData } from '../../Types/CoingeckoHistoryData';
import { useCoingeckoCryptoApi } from '../../CustomHooks/Coingecko.CryptoApi';
import { useParams } from 'react-router-dom';
import { Skeleton } from 'antd';

interface Props {
  duration: number
}

const CoinChart: React.FC<Props> = (props: Props) => {
  const { id } = useParams<{ id: string }>()
  const [coingekoCoinsHistoryData] = useCoingeckoCryptoApi<CoingeckoHistoryData>("GET", `coins/${id}/market_chart?vs_currency=eur&days=${props.duration}&interval=daily`)
  console.log(coingekoCoinsHistoryData?.prices[0][0])

  if (!coingekoCoinsHistoryData) { return <Skeleton /> }
  const config = {
    data: coingekoCoinsHistoryData?.prices.map(_priceArray => ({ price: _priceArray[1], timeStamp: _priceArray[0] })),
    xField: 'timeStamp',
    yField: 'price',
    xAxis: {
      type: 'timeCat',
      tickCount: 5,
    },
    slider: {
      start: 0.1,
      end: 0.9,
      // coingekoCoinsHistoryData?.prices[0][0]
      // coingekoCoinsHistoryData?.prices[coingekoCoinsHistoryData?.prices.length - 1][0],

      // trendCfg: { isArea: true },
    },

  };
  return <Area {...config} />;
};

export default CoinChart;