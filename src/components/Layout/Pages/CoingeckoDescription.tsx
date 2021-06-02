import { Button, Col, Divider, Row } from 'antd'
import React, { ReactElement } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCoingeckoCryptoApi } from '../../CustomHooks/Coingecko.CryptoApi'
import { CoingekoDetails } from '../../Types/CoingekoDetailsType'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import CoinChart from './CoingekoChart'
import { Image } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;

export default function CoingeckoDescription(): ReactElement {
  const { id } = useParams<{ id: string }>()
  const [coingekoCoins] = useCoingeckoCryptoApi<CoingekoDetails>("GET", `coins/${id}?market_data=false&community_data=false&developer_data=false&sparkline=false`)
  console.log(coingekoCoins?.image.large)

  if (!coingekoCoins) { return <LoadingSpinner /> }
  return (
    <>
      <Row align={"middle"}>
        <Col span={12}>
          <Title level={3} style={{ color: "darkblue" }} >{coingekoCoins?.localization.en} </Title>
          <Title level={5} style={{ color: "darkblue" }} >Three Month Chart </Title>
        </Col>
        <Col style={{ textAlign: "right" }} span={12}>
          <Image
            width={50}
            src={coingekoCoins?.image.large}
          />
        </Col>
      </Row>

      <CoinChart />
      <Divider orientation="left">Read more About This Coin</Divider>
      <div
        dangerouslySetInnerHTML={{
          __html: coingekoCoins?.description.en,
        }}
      />
      <Link to={`/coingeckodetails/${id}`}>
        <Button type="primary" block>
          Go back
      </Button>
      </Link>
    </>
  )
}
