import React, { ReactElement } from 'react'
import { useCoingeckoCryptoApi } from '../../CustomHooks/Coingecko.CryptoApi'
import { CoingekoMarkets } from '../../Types/CoingekoType'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { Avatar, Table } from 'antd'
import { useHistory } from 'react-router-dom'

export function CoingeckoList(): ReactElement {
  const [coingeckoCoins] = useCoingeckoCryptoApi<CoingekoMarkets[]>('GET', 'coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  // const theImageURL: string[] | undefined

  const columns = [
    {
      title: 'image',
      dataIndex: 'image',
      // render: theImageURL => <img src={theImageURL} alt={theImageURL} />,
      key: 'image',
    },
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'symbol',
      dataIndex: 'symbol',
      key: 'symbol',
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'current_price',
      dataIndex: 'current_price',
      key: 'current_price',
    },
  ];
  let history = useHistory()

  function clickHandler(value: string) {
    history.push(`/details/${value}`)
  }

  if (!coingeckoCoins) { return <LoadingSpinner /> }
  return (
    <Table rowKey={(record) => record.symbol} style={{ cursor: 'pointer' }}
      onRow={(_selectedRow, index) => {
        return {
          onClick: () => clickHandler(_selectedRow.symbol)
        };
      }}
      columns={columns} dataSource={coingeckoCoins.map(coin => ({ ...coin, image: <Avatar src={coin.image} alt={coin.symbol} /> }))} />
    // <div>
    //   <h1>
    //     {coingeckoCoins?.map((coin, index) =>
    //       <div key={coin.id}>{coin.symbol}{coin.current_price}</div>
    //     )}
    //   </h1>
    // </div>
  )
}
