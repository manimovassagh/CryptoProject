import React from 'react'
import { useParams } from "react-router-dom";
import { CoinPrice } from '../../Types/BinanceType'

export function CryptoDetails() {
  const { symbol } = useParams<CoinPrice>()
  console.log(useParams<CoinPrice>())
  return (
    <div>
      <h1>
        {symbol}
      </h1>
    </div>
  )
}
