import React from 'react'
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Coin, CoinPrice } from '../../types/Types'

export function CryptoDetails() {
  const { symbol } = useParams<CoinPrice>()
  console.log(useParams<CoinPrice>())
  return (
    <div>
      just check details to see everything works
    </div>
  )
}
