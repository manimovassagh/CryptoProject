import React, { ReactElement, useState } from 'react'
import { useCoingeckoCryptoApi } from '../../CustomHooks/Coingecko.CryptoApi'
import { CoingekoMarkets } from '../../Types/CoingekoType'
import { Avatar, Input, Skeleton, Table } from 'antd'
import { useHistory } from 'react-router-dom'
import { columns } from './CoingeckoList.Column'
import * as _ from 'lodash'
export function CoingeckoList(): ReactElement {
  const { Search } = Input;
  const [coingeckoCoins, setCoingekocoins] = useCoingeckoCryptoApi<CoingekoMarkets[]>('GET', 'coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  const [searchTerm, setSearchTerm] = useState('')

  function onChange(pagination: {}, filters: any, sorter: any, extra: any) {
    console.log('params', pagination, filters, sorter, extra);
  }

  const history = useHistory()
  function clickHandler(id: string) {
    history.push(`/coingeckodetails/${id}`)
    console.log(id)
  }

  if (!coingeckoCoins) { return <Skeleton /> }

  return (
    <>
      <Search type={"text"} onChange={e => setSearchTerm(e.target.value)} placeholder="Enter Coin name to Search" loading={false} />

      <Table onChange={onChange} rowKey={(record) => record.symbol} style={{ cursor: 'pointer' }}
        onRow={(_selectedRow) => {
          return {
            onClick: () => clickHandler(_selectedRow.id)
          };
        }}
        columns={columns} dataSource={coingeckoCoins.map(coin => ({
          ...coin, image: <Avatar src={coin.image} alt={coin.symbol} />,
          price_change_24h: _.round((coin.price_change_24h), 2),
          market_cap: coin.market_cap.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

        }))} />
    </>
  )
}
