import React, { ReactElement } from 'react'
import { useCoingeckoCryptoApi } from '../../CustomHooks/Coingecko.CryptoApi'
import { CoingekoMarkets } from '../../Types/CoingekoType'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

export function CoingeckoList(): ReactElement {
  const [coingeckoCoins] = useCoingeckoCryptoApi<CoingekoMarkets[]>('GET', 'coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')

  if (!coingeckoCoins) { return <LoadingSpinner /> }
  return (
    <div>
      <h1>
        {coingeckoCoins?.map((coin, index) =>
          <div key={coin.id}>{coin.symbol}{coin.current_price}</div>
        )}
      </h1>
    </div>
  )
}
