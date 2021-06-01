import React, { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import { useCoingeckoCryptoApi } from '../../CustomHooks/Coingecko.CryptoApi'
import { CoingekoDetails } from '../../Types/CoingekoDetailsType'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { Col, Image, Row } from 'antd';

export function CoingeckoDetails(): ReactElement {
  const { id } = useParams<any>()
  const [coingekoCoins] = useCoingeckoCryptoApi<CoingekoDetails>("GET", `coins/${id}?market_data=false&community_data=false&developer_data=false&sparkline=false`)
  console.log(coingekoCoins)

  const handleTickerPriceFilter = () => {

    console.log('check')
  }

  if (!coingekoCoins) { return <LoadingSpinner /> }
  console.log(coingekoCoins)
  return (
    <Row align={'middle'}>
      <Col span={2}>
        <Image
          width={100}
          src={coingekoCoins.image.large}
        /></Col>
      <Col span={12}>
        <h1>{coingekoCoins.name}</h1>
        {/* <Title>h1. Ant Design</Title> */}
      </Col>
      <Col span={8}>
        <h1>{coingekoCoins.tickers.map((_coinPrice) => <div>{_coinPrice.target}</div>)}</h1>
        check
      </Col>

    </Row>

  )
}
