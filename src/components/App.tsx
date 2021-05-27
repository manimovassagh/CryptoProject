import React, { ReactElement, useEffect, useState } from 'react';
import { DataReciever } from './DataReciever';
import { Coin } from '../components/types/Types'
import axios from 'axios';
import { Spin } from 'antd';



export default function App(): ReactElement {
  const [data, setData] = useState<Coin[]>([])

  //check why it make fetch several times !!
  useEffect(() => {
    axios.get(`https://api.binance.com/api/v3/exchangeInfo`)
      .then(res => {
        const coins = res.data;
        setData(coins)
        console.log(coins.symbols)
      })

  })
  if (!data) { return <Spin /> }
  return (
    <div >
      <DataReciever />

    </div>
  )
}

