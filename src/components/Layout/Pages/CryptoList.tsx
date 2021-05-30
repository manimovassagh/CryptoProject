import React, { useState } from 'react'
import { Table } from 'antd'

import { useCryptoApi } from '../../CustomHooks/CryptoApi'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { Coin, CoinPrice } from '../../types/Types'
import { Link, useHistory } from 'react-router-dom'

import { dataSource } from '../Shared/DummyData'

export function CryptoList() {
  // const [coins] = useCryptoApi<Coin[]>('GET', 'api/v3/ticker/bookTicker')

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
  if (!dataSource) { return <LoadingSpinner /> }

  const setData = function (_setSymbolData: string) {
    return _setSymbolData
  }

  return (
    <Link to={`/details/:${setData}`}>
      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: () => setData(record.symbol)
          };
        }}

        columns={columns} dataSource={dataSource} />
    </Link>


  )
}
