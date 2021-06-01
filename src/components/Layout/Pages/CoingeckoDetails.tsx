import React, { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import { useCoingeckoCryptoApi } from '../../CustomHooks/Coingecko.CryptoApi'
import { CoingekoDetails } from '../../Types/CoingekoDetailsType'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { Button, Card, Col, Divider, Image, Row, Statistic, Typography } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined, PercentageOutlined } from '@ant-design/icons'
import * as _ from 'lodash'
import { CoingekoMarkets } from '../../Types/CoingekoType'
import { useHistory } from 'react-router-dom'

export function CoingeckoDetails(): ReactElement {

  const { id } = useParams<any>()
  const [coingekoCoins] = useCoingeckoCryptoApi<CoingekoDetails>("GET", `coins/${id}?market_data=false&community_data=false&developer_data=false&sparkline=false`)
  const [coingeckoCoinsForAll] = useCoingeckoCryptoApi<CoingekoMarkets[]>('GET', 'coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')

  // Helper Functions for Calculation
  //#region 
  const handleTickerPriceFilter = (_coinEuroFilter: CoingekoDetails | undefined) => {
    return _coinEuroFilter?.tickers.filter(coin => coin.target === "EUR")
  }

  const calculateAveragePricePerEuro = (_coinEuroPriceList: CoingekoDetails | undefined) => {
    const _filteredList = handleTickerPriceFilter(_coinEuroPriceList)
    if (_.round(_.meanBy(_filteredList, 'last'), 2)) {
      return _.round(_.meanBy(_filteredList, 'last'), 2)
    } else {
      return currentPriceByApi
    }
  }


  const history = useHistory()
  function clickHandler() {
    history.push(`/`)
  }

  const coinEuroFilter = handleTickerPriceFilter(coingekoCoins)
  const selectedCoinFurtherData = coingeckoCoinsForAll?.find(_coin => _coin.id === `${id}`)
  const ResultOfChange = selectedCoinFurtherData?.price_change_24h
  const currentPriceByApi = selectedCoinFurtherData?.current_price

  console.log(selectedCoinFurtherData?.price_change_percentage_24h)
  //#endregion

  if (!coinEuroFilter || !coingekoCoins) { return <LoadingSpinner /> }


  return (
    <>
      <Row align={'middle'}>

        <Col span={2}>
          <Image
            width={100}
            src={coingekoCoins.image.large}
          />
        </Col>
        <Col span={10}>
          <Typography.Title>{coingekoCoins.name}</Typography.Title>
        </Col>
        {/* Price Indicater Up */}
        <Col span={8}>
          <div className="site-statistic-demo-card">
            <Row gutter={36}>
              {ResultOfChange && ResultOfChange > 0 && (
                <Col span={12}>
                  <Card>
                    <Statistic
                      title="Price Up in Last 24 Hours"
                      value={ResultOfChange}
                      precision={2}
                      valueStyle={{ color: '#3f8600' }}
                      prefix={<ArrowUpOutlined />}
                      suffix="€"
                    />
                  </Card>
                </Col>
              )}
              {/* Price Indicater Down */}
              {ResultOfChange && ResultOfChange < 0 && (
                <Col span={12}>
                  <Card>
                    <Statistic
                      title="Price Down in Last 24 Hours"
                      value={ResultOfChange}
                      precision={2}
                      valueStyle={{ color: '#cf1322' }}
                      prefix={<ArrowDownOutlined />}
                      suffix="€"
                    />
                  </Card>
                </Col>
              )}
              {/* new Card */}

              {selectedCoinFurtherData?.price_change_percentage_24h && selectedCoinFurtherData?.price_change_percentage_24h < 0 && (
                <Col span={12}>
                  <Card style={{ textAlign: 'center' }}>
                    <Statistic
                      title="Percent change 24 Hours"
                      value={selectedCoinFurtherData?.price_change_percentage_24h}
                      precision={2}
                      valueStyle={{ color: '#cf1322' }}
                      prefix={<PercentageOutlined />}
                      suffix={<ArrowDownOutlined />}
                    />
                  </Card>
                </Col>)}
              {selectedCoinFurtherData?.price_change_percentage_24h && selectedCoinFurtherData?.price_change_percentage_24h > 0 && (
                <Col span={12}>
                  <Card style={{ textAlign: 'center' }}>
                    <Statistic
                      title="Percent change 24 Hours"
                      value={selectedCoinFurtherData?.price_change_percentage_24h}
                      precision={2}
                      valueStyle={{ color: '#3f8600' }}
                      prefix={<PercentageOutlined />}
                      suffix={<ArrowUpOutlined />}
                    />
                  </Card>
                </Col>)}


            </Row>
          </div>
        </Col>
        {/* new Card */}
        <Col span={5}>
          <Statistic title="Latest Average Price in Euro" value={`${calculateAveragePricePerEuro(coingekoCoins)} €`} precision={2} />
          <Button onClick={() => clickHandler()} style={{ marginTop: 16 }} type="primary">
            Back to Home
      </Button>
        </Col>
        <Col span={6}>
          <a href={coingekoCoins?.links.homepage[0]} target={"blank"}>
            <Statistic title={coingekoCoins?.links.homepage[0]} value={coingekoCoins?.links.homepage[0]} loading />
          </a>
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
