import React, { ReactElement } from 'react'
import { useCoingeckoCryptoApi } from '../../CustomHooks/Coingecko.CryptoApi'
import { CoingekoMarkets } from '../../Types/CoingekoType'
import { Avatar, Skeleton, Table } from 'antd'
import { useHistory } from 'react-router-dom'


export function CoingeckoList(): ReactElement {

  const [coingeckoCoins] = useCoingeckoCryptoApi<CoingekoMarkets[]>('GET', 'coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  const columns = [
    {
      title: 'Logo',
      dataIndex: 'image',
      key: 'image',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price €',
      dataIndex: 'current_price',
      sorter: {
        compare: (a: any, b: any) => a.current_price - b.current_price,
        multiple: 3,
      },
      key: 'current_price',
    },
    {
      title: 'Ranking',
      dataIndex: 'market_cap_rank',
      key: 'market_cap_rank',
      sorter: {
        compare: (a: any, b: any) => a.current_price - b.current_price,
        multiple: 3,
      },
    },
    {
      title: 'Market Capitalization',
      dataIndex: 'market_cap',
      key: 'market_cap',
      sorter: {
        compare: (a: any, b: any) => a.current_price - b.current_price,
        multiple: 3,
      },
    },
    {
      title: 'Highest Price(24h)',
      dataIndex: 'high_24h',
      key: 'high_24h',
      sorter: {
        compare: (a: any, b: any) => a.current_price - b.current_price,
        multiple: 3,
      },
    },
    {
      title: 'Lowest Price(24h)',
      dataIndex: 'low_24h',
      key: 'low_24h',
      sorter: {
        compare: (a: any, b: any) => a.current_price - b.current_price,
        multiple: 3,
      },
    },
    {
      title: 'Price Change(24h)',
      dataIndex: 'price_change_24h',
      key: 'price_change_24h',
      sorter: {
        compare: (a: any, b: any) => a.current_price - b.current_price,
        multiple: 3,
      },
    },
    {
      title: 'Price Change %(24h)',
      dataIndex: 'price_change_percentage_24h',
      key: 'price_change_percentage_24h',
      sorter: {
        compare: (a: any, b: any) => a.current_price - b.current_price,
        multiple: 3,
      },
    },
    {
      title: 'All Time Hight %',
      dataIndex: 'ath_change_percentage',
      key: 'ath_change_percentage',
      sorter: {
        compare: (a: any, b: any) => a.current_price - b.current_price,
        multiple: 3,
      },
    },
    {
      title: 'Trade Symbol',
      dataIndex: 'symbol',
      key: 'symbol',
    },
  ];
  let history = useHistory()

  function onChange(pagination: {}, filters: any, sorter: any, extra: any) {
    console.log('params', pagination, filters, sorter, extra);
  }

  function clickHandler(id: string) {
    history.push(`/coingeckodetails/${id}`)
    console.log(id)
  }

  if (!coingeckoCoins) { return <Skeleton /> }
  return (
    <Table onChange={onChange} rowKey={(record) => record.symbol} style={{ cursor: 'pointer' }}
      onRow={(_selectedRow, index) => {
        return {
          onClick: () => clickHandler(_selectedRow.id)
        };
      }}
      columns={columns} dataSource={coingeckoCoins.map(coin => ({ ...coin, image: <Avatar src={coin.image} alt={coin.symbol} /> }))} />

  )
}
