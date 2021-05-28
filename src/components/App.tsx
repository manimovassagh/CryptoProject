import React, { ReactElement } from 'react';
import { DataReciever } from './DataReciever';
import { Coin } from '../components/types/Types'
import { Spin } from 'antd';
import { useCryptoApi } from '../components/CustomHooks/CryptoApi'


export default function App(): ReactElement {

  const [coins, setCoins] = useCryptoApi<Coin[]>('GET', 'trades')

  if (!coins) { return <Spin /> }
  return (
    <div >
      <DataReciever />

    </div>
  )
}

