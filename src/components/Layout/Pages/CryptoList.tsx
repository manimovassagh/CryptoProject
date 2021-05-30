import React, { useState } from 'react'
import { Table } from 'antd'
// import { useCryptoApi } from '../../CustomHooks/CryptoApi'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
// import { Coin, CoinPrice } from '../../Types/Types'
import { Link, useHistory } from 'react-router-dom'
import { dataSource } from '../Shared/DummyData'

export function CryptoList() {
  // const [coins] = useCryptoApi<Coin[]>('GET', 'api/v3/ticker/bookTicker')

  // console.log(dataSource)
  const [selectedRow, setSelectedRow] = useState<String>()
  const columns = [
    {
      title: 'symbol',
      dataIndex: 'symbol',
      // {dataIndex: 'email', render: (data) => <Link to="pages/mypage">{data}</Link>}
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
  let history = useHistory()

  function clickHandler(value: string) {
    history.push(`/details/${value}`)
  }

  if (!dataSource) { return <LoadingSpinner /> }

  return (

    // <Link to={`/details/${selectedRow}`}>
    <Table style={{ cursor: 'pointer' }}
      onRow={(_selectedRow) => {
        return {
          onClick: () => clickHandler(_selectedRow.symbol)
        };
      }}
      columns={columns} dataSource={dataSource} />

    // </Link>


  )
}