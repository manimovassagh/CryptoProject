import { Button, Col, Row, Statistic } from 'antd';
import React from 'react'
import { useParams } from "react-router-dom";
import { CoinPrice } from '../../Types/BinanceType'

export function CryptoDetails() {
  const { symbol } = useParams<CoinPrice>()
  console.log(useParams<CoinPrice>())
  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title={symbol} value={112893} />
        </Col>
        <Col span={12}>
          <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
          <Button style={{ marginTop: 16 }} type="primary">
            Recharge
      </Button>
        </Col>
        <Col span={12}>
          <Statistic title="Active Users" value={112893} loading />
        </Col>
      </Row>,
    </div>
  )
}
