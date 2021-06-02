import { Button } from 'antd'
import React, { ReactElement } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCoingeckoCryptoApi } from '../../CustomHooks/Coingecko.CryptoApi'
import { CoingekoDetails } from '../../Types/CoingekoDetailsType'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import DemoLine from './CoingekoChart'

export default function CoingeckoDescription(): ReactElement {
  const { id } = useParams<any>()
  const [coingekoCoins] = useCoingeckoCryptoApi<CoingekoDetails>("GET", `coins/${id}?market_data=false&community_data=false&developer_data=false&sparkline=false`)


  if (!coingekoCoins) { return <LoadingSpinner /> }
  return (

    <>
      <DemoLine />

      <div
        dangerouslySetInnerHTML={{
          __html: coingekoCoins?.description.en,
        }}
      />
      <Link to={`/coingeckodetails/${id}`}>
        <Button type="primary" block>
          Go back to Page
      </Button>
      </Link>
    </>

  )
}
