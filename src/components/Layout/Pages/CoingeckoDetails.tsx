import React, { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import { useCoingeckoCryptoApi } from '../../CustomHooks/Coingecko.CryptoApi'
import { CoingekoDetails } from '../../Types/CoingekoDetailsType'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { Button, Card, Col, Divider, Image, Row, Statistic, Typography } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons'
import * as _ from 'lodash'

export function CoingeckoDetails(): ReactElement {
  const { id } = useParams<any>()
  const [coingekoCoins] = useCoingeckoCryptoApi<CoingekoDetails>("GET", `coins/${id}?market_data=false&community_data=false&developer_data=false&sparkline=false`)

  // Helper Functions for Calculation

  //#region 
  const handleTickerPriceFilter = (_coinEuroFilter: CoingekoDetails | undefined) => {
    return _coinEuroFilter?.tickers.filter(coin => coin.target === "EUR")
  }

  const calculateAveragePricePerEuro = (_coinEuroPriceList: CoingekoDetails | undefined) => {
    const _filteredList = handleTickerPriceFilter(_coinEuroPriceList)
    return _.round(_.meanBy(_filteredList, 'last'), 2)
  }
  //#endregion

  const coinEuroFilter = handleTickerPriceFilter(coingekoCoins)
  if (!coinEuroFilter || !coingekoCoins) { return <LoadingSpinner /> }

  console.log(coinEuroFilter)
  console.log(coingekoCoins)
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
          <div className="site-statistic-demo-card">
            <Row gutter={16}>
              <Col span={12}>
                <Card>
                  <Statistic
                    title="Active"
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: '#3f8600' }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card>
                  <Statistic
                    title="Idle"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: '#cf1322' }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={5}>
          <Statistic title="Latest Average Price in Euro" value={`${calculateAveragePricePerEuro(coingekoCoins)} €`} precision={2} />
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
