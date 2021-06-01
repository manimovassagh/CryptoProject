import React, { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import { useCoingeckoCryptoApi } from '../../CustomHooks/Coingecko.CryptoApi'
import { CoingekoDetails } from '../../Types/CoingekoDetailsType'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { Button, Col, Divider, Image, Row, Statistic, Typography } from 'antd';


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
    <>
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
        <Col span={5}>
          <Statistic title="Latest Price in Euro" value={112893} precision={2} />
          <Button style={{ marginTop: 16 }} type="primary">
            Back to Home
      </Button>
        </Col>
        <Col span={6}>
          <Statistic title="Active Users" value={112893} loading />
        </Col>

      </Row>
      <Divider>Price Per Euro In Diffrent Exchange Markets</Divider>
      <Row >

        <>{coinEuroFilter?.map((_coin, index) =>
          <Col span={5} key={index}>
            {_coin.market.name}
            {_coin.last}
          </Col >
        )}</>
        check

      </Row>


    </>
  )
}
