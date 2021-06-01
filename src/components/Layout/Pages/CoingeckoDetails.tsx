import React, { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import { useCoingeckoCryptoApi } from '../../CustomHooks/Coingecko.CryptoApi'
import { CoingekoDetails } from '../../Types/CoingekoDetailsType'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { Button, Col, Image, Row, Statistic, Typography } from 'antd';


export function CoingeckoDetails(): ReactElement {
  const { id } = useParams<any>()
  const [coingekoCoins] = useCoingeckoCryptoApi<CoingekoDetails>("GET", `coins/${id}?market_data=false&community_data=false&developer_data=false&sparkline=false`)
  console.log(coingekoCoins)

  const handleTickerPriceFilter = (_coinEuroFilter: CoingekoDetails | undefined) => {
    return _coinEuroFilter?.tickers.filter(coin => coin.target === "EUR")
  }


  const coinEuroFilter = handleTickerPriceFilter(coingekoCoins)
  if (!coinEuroFilter) { return <LoadingSpinner /> }
  if (!coingekoCoins) { return <LoadingSpinner /> }
  console.log(coinEuroFilter)
  return (
    <Row align={'middle'}>

      <Col span={2}>
        <Image
          width={100}
          src={coingekoCoins.image.large}
        />
      </Col>

      <Col span={12}>
        <Typography.Title>{coingekoCoins.name}</Typography.Title>
      </Col>


      <Col span={8}>
        <Statistic title="Active Users" value={112893} />
      </Col>
      <Col span={12}>
        <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
        <Button style={{ marginTop: 16 }} type="primary">
          Back to Home
      </Button>
      </Col>
      <Col span={12}>
        <Statistic title="Active Users" value={112893} loading />
      </Col>


      <Row >
        <Col span={12}>
          <h1>{coinEuroFilter?.map((_coin, index) =>
            <div key={index}>
              <div> {_coin.market.name}</div>
              <div> {_coin.last}</div>
            </div>
          )}</h1>
        check
        </Col>
      </Row>


    </Row>

  )
}
