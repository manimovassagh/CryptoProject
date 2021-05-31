import React from 'react'
import { useParams } from 'react-router-dom'
import { useCoingeckoCryptoApi } from '../../CustomHooks/Coingecko.CryptoApi'
import { CoingekoDetails } from '../../Types/CoingekoDetailsType'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { Image } from 'antd';

export function CoingeckoDetails() {
  const { id } = useParams<any>()
  const [coingekoCoins] = useCoingeckoCryptoApi<CoingekoDetails>("GET", `coins/${id}?market_data=false&community_data=false&developer_data=false&sparkline=false`)

  if (!coingekoCoins) { return <LoadingSpinner /> }
  console.log(coingekoCoins)
  return (
    <div>
      <Image
        width={100}
        src={coingekoCoins.image.large}
      />
    </div>
  )
}
