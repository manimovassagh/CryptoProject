import { Table } from 'antd'
import React from 'react'
import { useCryptoApi } from '../../CustomHooks/CryptoApi'
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner'
import { Coin } from '../../types/Types'



export function CryptoList() {
  const [coins] = useCryptoApi<Coin[]>('GET', 'api/v3/ticker/bookTicker')
  const dataSource = coins
  const columns = [
    {
      title: 'symbol',
      dataIndex: 'symbol',
      key: 'symbol',
    },
    {
      title: 'bidPrice',
      dataIndex: 'bidPrice',
      key: 'bidPrice',
    },
    {
      title: 'bidQty',
      dataIndex: 'bidQty',
      key: 'bidQty',
    },
    {
      title: 'askPrice',
      dataIndex: 'askPrice',
      key: 'askPrice',
    },
    {
      title: 'askQty',
      dataIndex: 'askQty',
      key: 'askQty',
    },
  ];
  if (!coins) { return <LoadingSpinner /> }
  return (
    <div>
      {/* {coins.map((coin, index) =>
        <div key={index} >{coin.symbol}</div>
      )} */}
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  )
}
