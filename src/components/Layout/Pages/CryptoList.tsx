import React from 'react'
import { Table } from 'antd'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { useHistory } from 'react-router-dom'
import { useBinanceCryptoApi } from '../../CustomHooks/Binance.CryptoApi'
import { Coin } from '../../Types/BinanceType'


export function CryptoList() {
  const [coins] = useBinanceCryptoApi<Coin[]>('GET', 'api/v3/ticker/bookTicker')
  // console.log(dataSource)
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

  const history = useHistory()
  function clickHandler(value: string) {
    history.push(`/details/${value}`)
  }

  if (!coins) { return <LoadingSpinner /> }

  return (
    <Table rowKey={(record) => record.symbol} style={{ cursor: 'pointer' }}
      onRow={(_selectedRow, index) => {
        return {
          onClick: () => clickHandler(_selectedRow.symbol)
        };
      }}
      columns={columns} dataSource={coins} />
  )
}
