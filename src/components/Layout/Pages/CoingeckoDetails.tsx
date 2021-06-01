import React, { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import { useCoingeckoCryptoApi } from '../../CustomHooks/Coingecko.CryptoApi'
import { CoingekoDetails } from '../../Types/CoingekoDetailsType'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { Button, Col, Divider, Image, Row, Statistic, Typography } from 'antd';
import * as _ from 'lodash'
import { values } from 'lodash'

export function CoingeckoDetails(): ReactElement {
  const { id } = useParams<any>()
  const [coingekoCoins] = useCoingeckoCryptoApi<CoingekoDetails>("GET", `coins/${id}?market_data=false&community_data=false&developer_data=false&sparkline=false`)
  // console.log(coingekoCoins)

  const handleTickerPriceFilter = (_coinEuroFilter: CoingekoDetails | undefined) => {
    return _coinEuroFilter?.tickers.filter(coin => coin.target === "EUR")
  }
  const calculateAveragePricePerEuro = (_coinEuroPriceList: CoingekoDetails | undefined) => {
    const _filteredList = handleTickerPriceFilter(_coinEuroPriceList)
    return _.round(_.meanBy(_filteredList, 'last'), 2)
  }

  calculateAveragePricePerEuro(coingekoCoins)
  const coinEuroFilter = handleTickerPriceFilter(coingekoCoins)
  if (!coinEuroFilter) { return <LoadingSpinner /> }
  if (!coingekoCoins) { return <LoadingSpinner /> }
  // console.log(coinEuroFilter)
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
          <Statistic title="Latest Average Price in Euro" value={`${calculateAveragePricePerEuro(coingekoCoins)} €
`} precision={2} />
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
          <Col span={4} key={index}>
            <Typography.Title level={5}>
              {_coin.market.name} :
            {_coin.last} Euro
            </Typography.Title>
          </Col >
        )}</>


      </Row>


    </>
  )
}
